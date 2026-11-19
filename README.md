# GALAXYNEX Software Solutions - Smart Digital Business Card 🚀

A modern, sleek, mobile-first **Smart NFC & QR Digital Business Card** web application crafted with **React, Vite, Tailwind CSS, and Framer Motion**, engineered specifically for lightning-fast NFC taps, QR code scans, and seamless Vercel deployment.

---

## 📱 Live Features

1. **⚡ Fast & Smooth Intro Reveal Animation:**
   - Ultra-snappy logo reveal animation with scanline energy pulses powered by Framer Motion.
   - Smoothly reveals the profile card in ~1.2s without feeling bloated or slow for repeat scans.

2. **📇 One-Click vCard 3.0 (.vcf) Download:**
   - Prominent, high-contrast **"Save Contact"** button.
   - Dynamically compiles and triggers a direct browser download of standard **vCard 3.0** with full metadata (Name, Company, Role, Phone 1 & 2, Email, Website, Location, and Bio notes).
   - Natively prompts iOS Contacts and Android Google Contacts to save the contact with zero friction.
   - Includes haptic celebration confetti feedback on tap.

3. **💬 Instant WhatsApp Direct Connect:**
   - One-tap button opening `https://wa.me/917909247054` with the pre-filled message:
     > *"Hi! I just connected with you via Galaxy Software Solutions' Smart Card."*

4. **⚡ Quick Action Icon Grid:**
   - **Direct Call:** Intelligent phone dialer (offers selection between Primary line `+91 7909247054` and Secondary line `+91 7902278723`).
   - **Email:** Direct mailto trigger to `galaxynex2026@gmail.com`.
   - **Website:** 1-click link to official company website.
   - **Location:** Opens exact GPS pin for Kottayam, Kerala on Google Maps.
   - **QR Code & Share Modal:** Dynamic QR code display and native share sheet integration.

5. **🪪 Physical Card Preview Modal:**
   - Includes interactive high-resolution preview of your original physical business card.

6. **🏢 Multi-Client Architecture (`src/config/profileData.js`):**
   - Manage unlimited clients or team members from a single codebase without requiring any backend or database!
   - Supports slug/profile switching via:
     - Query parameter: `?profile=galaxynex` or `?profile=sample-client`
     - URL hash: `#/sample-client`
     - Subdomain: `client.yourdomain.com`
     - Fallback: Default `galaxynex` profile

---

## 🎨 Design & Aesthetic
- **Brand Colors:** Navy & Deep Space (`#030814`, `#0B192C`), Royal Electric Blue (`#1E60FF`), Neon Cyan (`#00D2FF`).
- **Surface:** Bespoke glassmorphism (`backdrop-blur-2xl`), specular gradient edge borders, and ambient glow accents.
- **Form Factor:** Strictly mobile-first. Centered on desktop (max-width `420px`) with edge-to-edge responsiveness on smartphones.

---

## 🛠️ Project Structure

```
├── public/
│   ├── logo.png             # GALAXYNEX Hero G Logo
│   └── business-card.jpg    # Physical card reference
├── src/
│   ├── config/
│   │   └── profileData.js   # Single source of truth for all profile details
│   ├── utils/
│   │   └── vcard.js         # vCard 3.0 generation & browser download utility
│   ├── components/
│   │   ├── IntroSplash.jsx       # Snappy NFC load reveal
│   │   ├── CardHeader.jsx        # Logo, title, verified status & branding
│   │   ├── ActionButtons.jsx     # Save Contact, WhatsApp & quick action grid
│   │   ├── ContactDetails.jsx    # Interactive contact list with copy buttons
│   │   ├── ServicesList.jsx      # Core offerings & metrics
│   │   ├── SocialLinks.jsx       # Social profiles
│   │   ├── ShareModal.jsx        # QR Code and share drawer
│   │   ├── PhysicalCardModal.jsx # Full-screen physical card viewer
│   │   ├── CallModal.jsx         # Multi-phone selector
│   │   └── Footer.jsx            # Watermark & client profile switcher
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ☁️ Deploy to Vercel in 2 Minutes

### Option A: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: Using GitHub & Vercel Dashboard
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Galaxy Software Solutions Smart Card"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect **Vite** and configure the build settings (`npm run build`, output: `dist`).
4. Click **Deploy**. Done!

---

## ✏️ How to Edit Details or Add Clients

Open `src/config/profileData.js` to modify:
- **Contact Details:** Phone numbers, email, WhatsApp, and Google Maps URL.
- **Personal Details:** Name and designation.
- **Services:** Titles, icons, and descriptions.
- **Add New Client:** Duplicate any profile object, specify a unique key (e.g. `"client-abc"`), and access it instantly at `yourdomain.com/?profile=client-abc`.
