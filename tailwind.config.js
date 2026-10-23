/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            50: "#FAF5FF",
            100: "#F3E8FF",
            200: "#E9D5FF",
            300: "#D8B4FE",
            400: "#C084FC",
            500: "#A855F7",
            600: "#9333EA",
            700: "#7E22CE",
            800: "#6B21A8",
            900: "#581C87",
            950: "#2E1065",
            deep: "#1C0D3A",
            darkest: "#0F0624",
          },
          yellow: {
            50: "#FEFCE8",
            100: "#FEF9C3",
            200: "#FEF08A",
            300: "#FDE047",
            400: "#FACC15",
            500: "#EAB308",
            glow: "#FFE500",
            hover: "#D97706",
          },
          base: {
            warm: "#FAF9F5",
            card: "#FFFFFF",
            subtle: "#F4F2EC",
          },
          text: {
            primary: "#0F091E",
            secondary: "#473F58",
            muted: "#736A88",
          },
          border: {
            light: "#EAE5F5",
            medium: "#D5CCE8",
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-yellow': '0 0 25px -4px rgba(250, 204, 21, 0.45)',
        'glow-purple': '0 0 35px -5px rgba(107, 33, 168, 0.35)',
        'card-elevate': '0 12px 30px -10px rgba(28, 13, 58, 0.08), 0 4px 12px -2px rgba(28, 13, 58, 0.04)',
        'card-hover': '0 20px 40px -15px rgba(88, 28, 135, 0.16), 0 8px 16px -4px rgba(250, 204, 21, 0.12)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
