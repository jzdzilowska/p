# Deploying this site (GitHub Pages + your Squarespace domain)

## 1. Push to GitHub

```
cd portfolio
git init
git add .
git commit -m "initial portfolio"
git branch -M main
git remote add origin https://github.com/jzdzilowska/<repo-name>.git
git push -u origin main
```

## 2. Turn on GitHub Pages

In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions.**

The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`. First push will kick off the deploy — check the **Actions** tab for progress.

## 3. Point your Squarespace domain at GitHub Pages

Edit `public/CNAME` and replace `yourdomain.com` with your real domain (e.g. `juliazdzilowska.com`), then commit and push.

In Squarespace's domain DNS settings, add these records (standard GitHub Pages apex + www setup):

**A records for the apex domain** (e.g. `juliazdzilowska.com`) pointing to:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME record for `www`** pointing to:
```
jzdzilowska.github.io
```

Then in the repo: **Settings → Pages → Custom domain** → enter your domain → save, and check "Enforce HTTPS" once it's verified (can take a few hours for DNS to propagate).

## Local development

```
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```
