# Deployment Guide: AI in Ophthalmology Research Report

This guide provides step-by-step instructions for deploying the interactive research report to GitHub Pages.

## 📋 Prerequisites

Before you begin, ensure you have:

- A GitHub account (free account is sufficient)
- Git installed on your computer ([Download Git](https://git-scm.com/))
- Node.js 18+ and pnpm installed ([Download Node.js](https://nodejs.org/))

## 🚀 Quick Start (5 Minutes)

### 1. Clone or Download the Project

```bash
# Option A: Clone from GitHub (if already uploaded)
git clone https://github.com/YOUR_USERNAME/ai-ophthalmology-research.git
cd ai-ophthalmology-research

# Option B: If you have the project locally, navigate to it
cd /path/to/ai-ophthalmology-research
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Build the Project

```bash
pnpm build
```

This creates a `dist/` folder with the production-ready website.

### 4. Test Locally (Optional)

```bash
pnpm preview
```

Open `http://localhost:4173` in your browser to see the built site.

## 📤 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface (Easiest)

1. **Create a GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `ai-ophthalmology-research`
   - Description: "Technical Research Report on AI in Ophthalmology"
   - Choose "Public" (so anyone can access it)
   - Click "Create repository"

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop the entire project folder
   - Or use the "Add file" → "Upload files" option
   - Commit with message: "Initial commit: AI in Ophthalmology research report"

3. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Source: Select "Deploy from a branch"
   - Branch: Select `main` and `/root` folder
   - Click **Save**

4. **Wait for Deployment**
   - GitHub will automatically build and deploy
   - Your site will be available at: `https://YOUR_USERNAME.github.io/ai-ophthalmology-research/`

### Method 2: Using Git Command Line (Recommended for Developers)

1. **Initialize Git Repository**

```bash
cd /path/to/ai-ophthalmology-research
git init
git add .
git commit -m "Initial commit: AI in Ophthalmology research report"
```

2. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Create repository named `ai-ophthalmology-research`
   - Do NOT initialize with README
   - Click "Create repository"

3. **Connect Local Repository to GitHub**

```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-ophthalmology-research.git
git branch -M main
git push -u origin main
```

4. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Source: "Deploy from a branch"
   - Branch: `main` and `/root`
   - Click **Save**

5. **Access Your Site**
   - Wait 1-2 minutes for deployment
   - Visit: `https://YOUR_USERNAME.github.io/ai-ophthalmology-research/`

### Method 3: Using GitHub Actions (Automatic Deployment)

A GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`.

1. **Push to GitHub** (using Method 1 or 2)

2. **Enable GitHub Pages**
   - Settings → Pages
   - Source: "GitHub Actions"
   - Click **Save**

3. **Automatic Deployment**
   - Every push to `main` branch automatically builds and deploys
   - Check "Actions" tab to see deployment progress

## 🔧 Configuration

### Custom Domain (Optional)

To use a custom domain (e.g., `research.yoursite.com`):

1. **Update Repository Settings**
   - Settings → Pages → Custom domain
   - Enter your domain: `research.yoursite.com`
   - Click **Save**

2. **Configure DNS**
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or use GitHub's IP addresses (see GitHub docs)

3. **Enable HTTPS**
   - GitHub automatically enables HTTPS
   - Wait 5-10 minutes for certificate

### Subdirectory Deployment

If deploying to a subdirectory (not root):

1. **Update `vite.config.ts`**

```typescript
export default defineConfig({
  base: '/ai-ophthalmology-research/',
  // ... rest of config
})
```

2. **Rebuild and Push**

```bash
pnpm build
git add dist/
git commit -m "Update for subdirectory deployment"
git push
```

## 📊 Verification

After deployment, verify your site is working:

1. **Check GitHub Pages Status**
   - Repository → Settings → Pages
   - Should show: "Your site is live at https://..."

2. **Test the Website**
   - Visit the provided URL
   - Check all sections load correctly
   - Test interactive charts and expandable sections
   - Verify responsive design on mobile

3. **Check Build Logs**
   - If using GitHub Actions: Actions tab → Latest workflow
   - Look for green checkmark (successful deployment)

## 🐛 Troubleshooting

### Site Not Showing

**Problem**: GitHub Pages shows 404 error

**Solutions**:
- Verify repository is public (Settings → Visibility)
- Check branch is `main` (not `master`)
- Ensure folder is `/root` (not `/docs`)
- Wait 2-3 minutes for deployment to complete
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Build Fails

**Problem**: GitHub Actions shows red X

**Solutions**:
- Check Node.js version compatibility (18+)
- Verify `pnpm-lock.yaml` is committed
- Check for syntax errors in code
- View workflow logs for specific error

### Styling Issues

**Problem**: Site loads but styles are missing

**Solutions**:
- Clear browser cache (Ctrl+Shift+Delete)
- Check `base` path in `vite.config.ts`
- Verify CSS files are in `dist/` folder
- Check browser console for errors (F12)

### Charts Not Displaying

**Problem**: Charts show as blank

**Solutions**:
- Ensure Recharts library is installed (`pnpm install`)
- Check browser console for JavaScript errors
- Verify data is being passed correctly
- Try different browser (Chrome, Firefox, Safari)

## 📱 Mobile Optimization

The site is fully responsive and works on:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

Test on different devices:
- Use browser DevTools (F12) → Device Toolbar
- Or use [Responsively App](https://responsively.app/)

## 🔒 Security & Privacy

- No backend server or database
- No user data collection
- No tracking (analytics disabled by default)
- All content is static and served from GitHub
- HTTPS enabled automatically

## 📈 Performance

Expected performance metrics:
- **Page Load Time**: < 2 seconds
- **Lighthouse Score**: 90+
- **Mobile Score**: 85+

Monitor performance:
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Enter your GitHub Pages URL
- Check recommendations

## 🔄 Updates & Maintenance

### Making Updates

1. **Edit Files Locally**

```bash
# Make changes to files
# e.g., edit client/src/pages/Home.tsx
```

2. **Rebuild and Push**

```bash
pnpm build
git add .
git commit -m "Update: [describe changes]"
git push
```

3. **Automatic Deployment**
   - GitHub automatically rebuilds and deploys
   - Changes live in 1-2 minutes

### Keeping Dependencies Updated

```bash
# Check for updates
pnpm outdated

# Update all dependencies
pnpm update

# Update specific package
pnpm update package-name@latest
```

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

## ✅ Deployment Checklist

Before going live, verify:

- [ ] All content is accurate and up-to-date
- [ ] Links are working correctly
- [ ] Charts and visualizations display properly
- [ ] Mobile responsiveness is tested
- [ ] No console errors in browser (F12)
- [ ] Page loads in < 3 seconds
- [ ] All images and assets load correctly
- [ ] Navigation works smoothly
- [ ] Repository is public
- [ ] GitHub Pages is enabled
- [ ] Custom domain configured (if applicable)

## 🎉 Success!

Your AI in Ophthalmology research report is now live and ready for sharing with professors, colleagues, and the research community!

**Share your link**: `https://YOUR_USERNAME.github.io/ai-ophthalmology-research/`

---

**Need Help?**
- Check GitHub Issues for common problems
- Review the main README.md for content information
- Consult Vite and React documentation for technical questions
