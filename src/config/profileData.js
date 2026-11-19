/**
 * ============================================================================
 * MULTI-CLIENT SMART BUSINESS CARD CONFIGURATION
 * ============================================================================
 * You can host multiple profiles on a single deployment!
 * 
 * Profile Selection Resolution Order:
 * 1. Query parameter: `?profile=slug` or `?p=slug` (e.g. yoursite.com/?p=galaxynex)
 * 2. URL Path: `yoursite.com/slug` or `yoursite.com/#/slug`
 * 3. Subdomain: `client.yoursite.com` -> slug = 'client'
 * 4. Fallback: Default profile ('galaxynex')
 * 
 * To add a new client/person, simply duplicate an object below and customize!
 */

export const profiles = {
  // --- DEFAULT PROFILE: GALAXYNEX SOFTWARE SOLUTIONS ---
  "galaxynex": {
    id: "galaxynex",
    companyName: "Galaxy Software Solutions",
    brandTitle: "GALAXYNEX",
    brandSubtitle: "Software Solutions",
    tagline: "Custom Software, Web Development & Digital Solutions",
    slogan: "Smart Solutions. Better Future.",
    logo: "/logo.png",
    cardImage: "/business-card.jpg",
    verifiedBadge: true,
    
    // Personal Details (Easily editable placeholder/defaults)
    person: {
      name: "Founder & Lead Architect",
      placeholderName: "[Your Name]",
      designation: "Founder / Software Developer",
      bio: "Crafting mission-critical web applications, enterprise software, and scalable digital architectures.",
      experience: "5+ Years Experience",
      availability: "Available for New Projects",
    },

    // Contact Information (From your physical card)
    contact: {
      primaryPhone: "+91 7909247054",
      primaryPhoneClean: "+917909247054",
      secondaryPhone: "+91 7902278723",
      secondaryPhoneClean: "+917902278723",
      whatsappNumber: "917909247054", // without '+' or spaces for wa.me API
      email: "galaxynex2026@gmail.com",
      secondaryEmail: "info@galaxysoftwaresolutions.com",
      website: "https://galaxysoftwaresolutions.com",
      displayWebsite: "galaxysoftwaresolutions.com",
      location: "Kottayam, Kerala",
      city: "Kottayam",
      state: "Kerala",
      country: "India",
      googleMapsUrl: "https://maps.google.com/?q=Kottayam,+Kerala,+India",
    },

    // WhatsApp Instant Connect Pre-filled Message
    whatsappPreFilledMessage: "Hi! I just connected with you via Galaxy Software Solutions' Smart Card.",

    // Core Services / Specializations
    services: [
      {
        title: "Custom Software",
        desc: "Tailored business automation & high-scale enterprise tools",
        icon: "Code2"
      },
      {
        title: "Modern Web Apps",
        desc: "Ultra-fast, responsive web applications built with React & Next.js",
        icon: "Globe"
      },
      {
        title: "Mobile App Development",
        desc: "Cross-platform iOS and Android solutions with seamless UX",
        icon: "Smartphone"
      },
      {
        title: "Digital Solutions & Cloud",
        desc: "APIs, cloud architecture, DevOps, and database optimization",
        icon: "Cloud"
      }
    ],

    // Social Links (Add/remove easily)
    socials: [
      { name: "WhatsApp", url: "https://wa.me/917909247054", icon: "MessageSquare", primary: true },
      { name: "LinkedIn", url: "https://linkedin.com/company/galaxy-software-solutions", icon: "Linkedin" },
      { name: "GitHub", url: "https://github.com/galaxynex", icon: "Github" },
      { name: "Instagram", url: "https://instagram.com/galaxynex", icon: "Instagram" },
      { name: "Email", url: "mailto:galaxynex2026@gmail.com", icon: "Mail" }
    ],

    // Quick Stats or Highlights
    highlights: [
      { label: "Solutions Delivered", value: "50+" },
      { label: "Client Satisfaction", value: "100%" },
      { label: "Response Time", value: "< 2 hrs" }
    ],

    // Brand Colors (Hex codes for fine-tuned accents)
    theme: {
      accentBlue: "#1E60FF",
      accentCyan: "#00D2FF",
      darkNavy: "#0B192C",
      deepSpace: "#030814"
    }
  },

  // --- EXAMPLE CLIENT / SECONDARY PROFILE TEMPLATE ---
  "sample-client": {
    id: "sample-client",
    companyName: "Nexus Digital Agency",
    brandTitle: "NEXUS",
    brandSubtitle: "Creative Studio",
    tagline: "UI/UX Design, Branding & Creative Web",
    slogan: "Design That Inspires.",
    logo: "/logo.png",
    verifiedBadge: true,
    person: {
      name: "Alex Mathew",
      designation: "Creative Director",
      bio: "Helping brands elevate their visual identities through high-converting web and UI design.",
      experience: "7+ Years Experience",
      availability: "Open to Consultations",
    },
    contact: {
      primaryPhone: "+91 9876543210",
      primaryPhoneClean: "+919876543210",
      whatsappNumber: "919876543210",
      email: "alex@nexusagency.com",
      website: "https://nexusagency.com",
      displayWebsite: "nexusagency.com",
      location: "Kochi, Kerala",
      city: "Kochi",
      state: "Kerala",
      country: "India",
      googleMapsUrl: "https://maps.google.com/?q=Kochi,+Kerala,+India",
    },
    whatsappPreFilledMessage: "Hi Alex! Connecting with you from your Smart Business Card.",
    services: [
      { title: "Brand Identity", desc: "Distinctive logos, typography & color guidelines", icon: "Palette" },
      { title: "UI/UX Design", desc: "User journeys, prototypes and high-fidelity interfaces", icon: "Layout" },
      { title: "Webflow Development", desc: "CMS-driven lightning fast websites", icon: "Zap" }
    ],
    socials: [
      { name: "WhatsApp", url: "https://wa.me/919876543210", icon: "MessageSquare" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" }
    ],
    highlights: [
      { label: "Brands Launched", value: "40+" },
      { label: "Design Awards", value: "12" }
    ],
    theme: {
      accentBlue: "#6366F1",
      accentCyan: "#A855F7",
      darkNavy: "#0F172A",
      deepSpace: "#020617"
    }
  }
};

/**
 * Resolves the active profile based on query parameter, hash, path, or subdomain.
 * Default fallback is "galaxynex".
 */
export function getActiveProfile() {
  if (typeof window === "undefined") {
    return profiles["galaxynex"];
  }

  // 1. Check Query Param: ?p=slug or ?profile=slug
  const searchParams = new URLSearchParams(window.location.search);
  const paramSlug = searchParams.get("p") || searchParams.get("profile") || searchParams.get("user");
  if (paramSlug && profiles[paramSlug.toLowerCase()]) {
    return profiles[paramSlug.toLowerCase()];
  }

  // 2. Check Hash: #/slug or #slug
  const hash = window.location.hash.replace(/^#\/?/, "").toLowerCase().trim();
  if (hash && profiles[hash]) {
    return profiles[hash];
  }

  // 3. Check Subdomain (e.g. client.domain.com)
  const hostname = window.location.hostname.toLowerCase();
  const parts = hostname.split(".");
  if (parts.length > 2) {
    const subdomain = parts[0];
    if (profiles[subdomain]) {
      return profiles[subdomain];
    }
  }

  // 4. Check Pathname: /p/slug or /slug
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  if (pathParts.length > 0) {
    const pathSlug = pathParts[pathParts.length - 1].toLowerCase();
    if (profiles[pathSlug]) {
      return profiles[pathSlug];
    }
  }

  // Fallback to default
  return profiles["galaxynex"];
}
