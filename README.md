# PICO SulTeng API Documentation

Modern documentation and landing page website for PICO SulTeng COVID-19 API, built with Vue.js and Tailwind CSS.

## Features

- 🚀 **Modern Design** - Clean, responsive design built with Tailwind CSS
- ⚡ **Fast Performance** - Static site generation with Vite
- 📱 **Mobile Responsive** - Optimized for all device sizes
- 🎯 **Focus on Central Sulawesi** - Specialized for Sulawesi Tengah COVID-19 data
- 📖 **Interactive Documentation** - Links to Swagger UI for live API testing
- 🔗 **Easy Integration** - Direct links to live API endpoints

## Tech Stack

- **Frontend**: Vue.js 3 with Composition API
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite
- **Language**: TypeScript
- **Routing**: Vue Router 4

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Development

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd pico-api-docs
   pnpm install
   ```

2. **Start development server:**
   ```bash
   pnpm dev
   ```
   
   The site will be available at `http://localhost:5173`

### Production Build

1. **Build for production:**
   ```bash
   pnpm build
   ```
   
   This creates optimized static files in the `dist/` directory.

2. **Preview production build:**
   ```bash
   pnpm preview
   ```

## Deployment

The built files in `dist/` directory are completely static and can be deployed anywhere:

### Simple Upload Deployment

1. Build the project: `pnpm build`
2. Upload the entire `dist/` folder to your web server
3. Configure your web server:
   - **Apache**: Add `.htaccess` file for SPA routing
   - **Nginx**: Configure try_files for SPA routing
   - **Static hosts**: Most work out of the box

### Example .htaccess for Apache

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Deployment Options

- **Static Hosting**: Netlify, Vercel, GitHub Pages, Surge.sh
- **Traditional Hosting**: Any web server (Apache, Nginx, IIS)
- **CDN**: AWS CloudFront, Cloudflare Pages

## Project Structure

```
├── src/
│   ├── components/         # Reusable Vue components
│   ├── views/             # Page components
│   │   ├── Home.vue       # Landing page
│   │   ├── Documentation.vue
│   │   └── ApiReference.vue
│   ├── router/            # Vue Router configuration
│   ├── assets/           # Static assets
│   ├── style.css         # Global styles and Tailwind imports
│   ├── main.ts           # Application entry point
│   └── App.vue           # Root component
├── public/               # Static files (served as-is)
├── dist/                # Built files (generated)
└── ...config files
```

## API Integration

The site integrates with PICO SulTeng API:

- **Base URL**: `https://pico-api.banuacoder.com/api/v1`
- **Documentation**: `https://pico-api.banuacoder.com/swagger/index.html`
- **Health Check**: `https://pico-api.banuacoder.com/api/v1/health`
- **Source Code**: `https://github.com/banua-coder/pico-api-go`

## Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build

# Type checking
pnpm run vue-tsc  # Type check without emit
```

## Customization

### Styling
- Edit `src/style.css` for global styles
- Modify `tailwind.config.js` for theme customization
- Update gradient colors in CSS custom properties

### Content
- **Landing Page**: Edit `src/views/Home.vue`
- **Navigation**: Update router links in navigation components
- **API URLs**: Update base URLs in components

### Branding
- Replace logo files in `public/` directory
- Update site title in `index.html`
- Modify meta tags for SEO

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build: `pnpm build`
5. Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Created for PICO SulTeng API**  
[Banua Coder](https://banuacoder.com) • Central Sulawesi COVID-19 Data API

**Developer**: [Fajrian Aidil Pratama](https://github.com/ryanaidilp)
