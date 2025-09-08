#!/bin/bash

# Deployment script for PICO SulTeng COVID-19 API Documentation
# Prepares files for deployment to Hostinger shared hosting

echo "🚀 Preparing PICO API Documentation for deployment..."

# Build the Vue.js application
echo "📦 Building Vue.js application..."
pnpm run build

if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

# Create deployment directory
echo "📁 Creating deployment directory..."
rm -rf deploy
mkdir -p deploy

# Copy built files
echo "📋 Copying built files..."
cp -r dist/* deploy/

# Copy essential server files
echo "🔧 Copying server configuration files..."
cp .htaccess deploy/
cp public/api-down.html deploy/
cp public/favicon.ico deploy/ 2>/dev/null || echo "⚠️ favicon.ico not found, skipping"

# Copy logos and assets that might not be in dist
echo "🖼️ Ensuring all assets are included..."
mkdir -p deploy/assets
cp -r public/sulteng-*.webp deploy/assets/ 2>/dev/null || echo "⚠️ Logo files not found in public, checking dist"

# Create deployment info file
cat > deploy/DEPLOY_INFO.txt << EOF
PICO SulTeng COVID-19 API Documentation
Deployment prepared on: $(date)
Built with: Vue.js + Vite
Target: Hostinger Shared Hosting

Deployment Structure:
- All files in this directory should be uploaded to public_html/
- .htaccess handles Vue Router routing and API proxy
- api-down.html is the maintenance page for API downtime

Post-deployment steps:
1. Ensure .htaccess is in the document root
2. Verify Vue router is working by testing routes
3. Test API proxy functionality
4. Check that all assets load correctly
EOF

# Note: No server startup needed - this is a static website served by Apache

# Create health check for the static site
cat > deploy/health-check.sh << 'EOF'
#!/bin/bash
# Health check for the documentation site

echo "🔍 Checking documentation site health..."

# Check if main files exist
if [ -f "index.html" ]; then
    echo "✅ index.html found"
else
    echo "❌ index.html missing"
    exit 1
fi

if [ -f ".htaccess" ]; then
    echo "✅ .htaccess found"
else
    echo "⚠️ .htaccess missing - Vue routing may not work"
fi

if [ -f "api-down.html" ]; then
    echo "✅ api-down.html found"
else
    echo "⚠️ api-down.html missing - API maintenance page unavailable"
fi

echo "📊 Site files:"
ls -la *.html *.js *.css 2>/dev/null | head -10

echo "✅ Documentation site health check complete"
EOF

chmod +x deploy/health-check.sh

# Verify deployment package
echo "🔍 Verifying deployment package..."
cd deploy

# Check essential files
ESSENTIAL_FILES=("index.html" ".htaccess" "api-down.html")
MISSING_FILES=()

for file in "${ESSENTIAL_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        MISSING_FILES+=("$file")
    fi
done

if [ ${#MISSING_FILES[@]} -eq 0 ]; then
    echo "✅ All essential files present"
else
    echo "⚠️ Missing files: ${MISSING_FILES[*]}"
fi

cd ..

# Display deployment summary
echo ""
echo "✅ Deployment package ready in ./deploy/ directory"
echo ""
echo "📋 Deployment Summary:"
echo "- Vue.js app built successfully"
echo "- Static files prepared for upload"
echo "- Apache .htaccess configured for SPA routing"
echo "- API maintenance page included"
echo "- Total files: $(find deploy -type f | wc -l)"
echo "- Package size: $(du -sh deploy | cut -f1)"
echo ""
echo "📤 Next steps:"
echo "1. Upload all files in ./deploy/ to your Hostinger public_html/"
echo "2. Ensure .htaccess is in the document root"
echo "3. Test the site at your domain"
echo "4. Verify API proxy is working (if backend is running)"
echo ""
echo "🌐 Expected URLs:"
echo "- Documentation: https://your-domain.com/"
echo "- API Proxy: https://your-domain.com/api/v1/"
echo "- Maintenance: https://your-domain.com/api-down.html"
echo ""
echo "📁 Files ready for upload:"
ls -la deploy/ | head -20