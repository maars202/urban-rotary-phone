/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-850': '#172033',
      },
      backgroundImage: {
        'hero-pattern': "url('/Users/maarunipandithurai/Documents/maars202/polka_pro/solana_pro/solFullDevTutorial/NFT-Tutorial-Metacamp/escrow-marketplace-ui copy/src/assets/pexels-anni-roenkae-2156881 2 (1).svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
  
}