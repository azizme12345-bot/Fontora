/**
 * ============================================================================
 * GOOGLE SEARCH CONSOLE & SEO CONFIGURATION
 * ============================================================================
 * 
 * Instructions:
 * 1. Enter your Google Search Console verification string below in `googleSiteVerificationCode`.
 * 2. If using HTML File Verification:
 *    - Download the HTML file from Google Search Console (e.g. google123456789.html).
 *    - Place that exact file inside the 'public/' directory of your repository.
 * 3. Push to GitHub and deploy once on Vercel. Both file and meta tag verification will succeed instantly!
 */

export const SEO_CONFIG = {
  // Replace 'YOUR_GOOGLE_VERIFICATION_CODE_HERE' with your actual GSC token
  // Example: 'v-123456789abcdefghijklmnopqrstuvwxyz'
  googleSiteVerificationCode: 'YOUR_GOOGLE_VERIFICATION_CODE_HERE',

  // Your production Vercel domain
  siteUrl: 'https://all-fonts.vercel.app',

  // Metadata
  siteName: 'Fontora - Multilingual Font Platform',
  siteDescription: 'Discover, preview, and download stunning Urdu, Arabic, Hindi, English, and Roman Urdu fonts with live typography customization.',
  siteKeywords: 'Urdu fonts, Arabic fonts, Hindi fonts, English fonts, Roman Urdu fonts, Nastaleeq, Naskh, Fontora, free font download',
};
