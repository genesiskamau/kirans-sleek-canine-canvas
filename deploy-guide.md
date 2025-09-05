# FTP Deployment Guide

## Build for Production
```bash
npm run build
```

## Upload to FTP
1. Upload the entire `dist` folder contents to your web server root directory
2. Make sure to upload all files including:
   - index.html (main entry point)
   - assets/ folder (CSS, JS, images)
   - All other files in dist/

## Server Configuration
- No special server configuration needed
- Works with any static web server (Apache, Nginx, etc.)
- The app will handle routing automatically

## Files to Upload
After running `npm run build`, upload these from the `dist` folder:
- index.html
- assets/ (entire folder)
- Any other files generated in dist/

## Notes
- Base path is configured for relative URLs
- All assets use relative paths for maximum compatibility
- Single bundle output for easier deployment