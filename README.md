# Flamoca Superfoods

A website dedicated to educating users about superfoods categorized by health benefits for different parts of the body.

## Publishing to Your Custom Domain for Free

### Option 1: Netlify with GoDaddy Domain (Recommended)

1. **Create a GitHub repository**
   - Sign up for GitHub if you don't have an account
   - Create a new repository
   - Push your code to the repository:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/flamoca.git
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Sign up for [Netlify](https://www.netlify.com/) (free tier)
   - Click "New site from Git"
   - Connect your GitHub account and select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Connect your GoDaddy domain to Netlify**
   - In Netlify dashboard, go to Site settings > Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `flamoca.com`)
   - Verify domain ownership if prompted
   
   **Setting up DNS records in GoDaddy:**
   - Log in to your GoDaddy account
   - Go to "My Products" > Select your domain
   - Click "DNS" or "Manage DNS"
   - You have two options:
   
   **Option A: Using Netlify's nameservers (recommended):**
   - In GoDaddy, find the "Nameservers" section
   - Select "Change" or "Custom nameservers"
   - Enter Netlify's nameservers:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```
   - Save changes
   
   **Option B: Using GoDaddy DNS with custom records:**
   - In Netlify, go to Domain settings and look for the DNS verification records
   - In GoDaddy DNS management, add the following records:
     - Add an A record: 
       - Host: @ (or leave blank)
       - Points to: Netlify's IP (provided in Netlify DNS instructions)
       - TTL: 1 hour (or 3600 seconds)
     - Add CNAME record for "www":
       - Host: www
       - Points to: your Netlify site URL (yoursite.netlify.app)
       - TTL: 1 hour
   
   - Wait for DNS propagation (can take 24-48 hours)
   - In Netlify, verify your domain once DNS is propagated

4. **Enable HTTPS**
   - Netlify will automatically provision an SSL certificate via Let's Encrypt
   - This may take a few hours after DNS propagation
   - Ensure "HTTPS" is enabled in your Netlify domain settings

### Option 2: Vercel with GoDaddy Domain

1. **Create a GitHub repository** (same as above)

2. **Deploy on Vercel**
   - Sign up for [Vercel](https://vercel.com/) (free tier)
   - Click "New Project"
   - Import your GitHub repository
   - Configure build settings (Vercel should auto-detect Vite settings)
   - Click "Deploy"

3. **Connect your GoDaddy domain to Vercel**
   - In Vercel dashboard, go to Project settings > Domains
   - Add your domain (e.g., `flamoca.com`)
   - Choose "Continue with Nameservers" or "Continue with Vercel for verification"
   
   **Setting up DNS records in GoDaddy:**
   - Log in to your GoDaddy account
   - Go to "My Products" > Select your domain
   - Click "DNS" or "Manage DNS"
   - You have two options:
   
   **Option A: Using Vercel's nameservers:**
   - In GoDaddy, find the "Nameservers" section
   - Select "Change" or "Custom nameservers"
   - Enter the nameservers provided by Vercel (typically these are `ns1.vercel-dns.com`, `ns2.vercel-dns.com`)
   - Save changes
   
   **Option B: Using GoDaddy DNS with custom records:**
   - In Vercel domain settings, select "Verify with DNS records"
   - In GoDaddy DNS management, add the records Vercel provides, typically:
     - An A record pointing to Vercel's IP
     - A CNAME record for "www" pointing to your Vercel deployment URL
     - TXT records for verification
   
   - Wait for DNS propagation (can take 24-48 hours)
   - Vercel will automatically verify the domain once DNS is properly configured

4. **Enable HTTPS**
   - Vercel automatically provisions SSL certificates
   - No additional steps needed

## Development

To run the project locally:

```
npm install
npm run dev
```

## Building for Production

```
npm run build
```

This will create optimized files in the `dist` folder, ready for deployment.

## Troubleshooting Domain Setup

### Common GoDaddy DNS Issues

1. **DNS changes not reflecting:**
   - DNS propagation can take up to 48 hours
   - Try clearing your browser cache or using a different browser
   - Use a tool like [whatsmydns.net](https://www.whatsmydns.net/) to check propagation status

2. **HTTPS not working:**
   - Ensure your DNS is correctly configured
   - For Netlify, check if SSL certificate provisioning is complete in domain settings
   - For Vercel, SSL is automatic but requires proper DNS configuration

3. **"Website not secure" warning:**
   - Wait for SSL certificate to be fully provisioned (up to 24 hours)
   - Ensure all site assets are loaded over HTTPS

4. **www subdomain not working:**
   - Make sure you've added a CNAME record for www pointing to your deployment
   - For Netlify, enable "www subdomain" in domain settings

### Getting Help

- Netlify Support: [https://www.netlify.com/support/](https://www.netlify.com/support/)
- Vercel Support: [https://vercel.com/help](https://vercel.com/help)
- GoDaddy Support: [https://www.godaddy.com/help](https://www.godaddy.com/help)

---

The error `405 Method Not Allowed` means that the endpoint `/api/gemini-1.5-pro-latest` does not exist or is not set up to handle POST requests.

### Here’s what’s happening:
- Your frontend is making a POST request to `/api/gemini-1.5-pro-latest`
- But your backend function is actually at `/api/gemini`
- So, Vercel returns a 405 error because there is no `/api/gemini-1.5-pro-latest` endpoint

---

## **How to Fix**

### 1. **Update the Frontend Endpoint**

In your `AIResearchSearch.tsx`, make sure the fetch call is:
```js
<code_block_to_apply_changes_from>
```
**NOT** `/api/gemini-1.5-pro-latest`.

---

### 2. **Check Your Code**

If you see `/api/gemini-1.5-pro-latest` anywhere in your frontend, change it to `/api/gemini`.

---

### 3. **Deploy the Fix**

- Save the file.
- Commit and push your changes.
- Redeploy your site.

---

## **Summary Table**

| What you want           | What you have now                | What to change to         |
|-------------------------|----------------------------------|--------------------------|
| API endpoint (frontend) | `/api/gemini-1.5-pro-latest`     | `/api/gemini`            |
| API endpoint (backend)  | `/api/gemini`                    | `/api/gemini`            |

---

**Once you do this, your search should work (or you’ll get a more helpful error from Gemini).**

Let me know if you want me to make this change for you!
