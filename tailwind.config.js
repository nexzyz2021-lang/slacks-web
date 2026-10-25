module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { brand: '#8B1515', 'brand-dark': '#5E0D0D', ink: '#3A1B16', cream: '#FFF7F1', blush: '#F4C9C3', gold: '#FFD166' },
      fontFamily: { display: ['var(--font-fredoka)', 'sans-serif'], body: ['var(--font-nunito)', 'sans-serif'] },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0) rotate(-2deg)' }, '50%': { transform: 'translateY(-14px) rotate(2deg)' } },
        pop: { '0%': { transform: 'scale(.6) rotate(-20deg)', opacity: 0 }, '100%': { transform: 'scale(1) rotate(-12deg)', opacity: 1 } },
        rise: { '0%': { transform: 'translateY(24px)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } },
      },
      animation: { float: 'float 5s ease-in-out infinite', pop: 'pop .6s .5s cubic-bezier(.34,1.56,.64,1) both', rise: 'rise .7s ease-out both' },
    },
  },
  plugins: [],
};
