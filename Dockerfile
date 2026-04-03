# Multi-stage build — pico-api-docs
FROM node:22-alpine AS builder

WORKDIR /app

# Install pnpm (pinned version to match CI)
RUN npm install -g pnpm@10.15.1

# Copy dependency files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm docs:build

# ---- Runtime image ----
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
