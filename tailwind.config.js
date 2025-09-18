/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff00ff',
        'neon-blue': '#00ffff',
        'neon-green': '#00ff00',
        'cyber-green': '#0dff00',
      },
      fontFamily: {
        'digital': ['Digital-7', 'Monaco', 'Consolas', 'monospace'],
        'matrix': ['Courier New', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flip': 'flip 0.6s ease-in-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'glitch': 'glitch 2s linear infinite',
      },
      keyframes: {
        glow: {
          'from': { 'text-shadow': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor' },
          'to': { 'text-shadow': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' }
        },
        flip: {
          '0%': { transform: 'rotateX(0)' },
          '50%': { transform: 'rotateX(-90deg)' },
          '100%': { transform: 'rotateX(0)' }
        },
        'pulse-glow': {
          '0%, 100%': { 'box-shadow': '0 0 10px rgba(59, 130, 246, 0.5)' },
          '50%': { 'box-shadow': '0 0 30px rgba(59, 130, 246, 0.8)' }
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
