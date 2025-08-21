import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				coffee: {
					50: 'hsl(35, 35%, 95%)',
					100: 'hsl(35, 30%, 90%)',
					200: 'hsl(30, 25%, 80%)',
					300: 'hsl(25, 30%, 65%)',
					400: 'hsl(25, 35%, 50%)',
					500: 'hsl(25, 45%, 35%)',
					600: 'hsl(25, 45%, 25%)',
					700: 'hsl(20, 50%, 20%)',
					800: 'hsl(15, 55%, 15%)',
					900: 'hsl(10, 60%, 10%)'
				},
				gold: {
					50: 'hsl(45, 90%, 95%)',
					100: 'hsl(45, 85%, 85%)',
					200: 'hsl(45, 80%, 75%)',
					300: 'hsl(45, 85%, 65%)',
					400: 'hsl(45, 85%, 55%)',
					500: 'hsl(40, 80%, 50%)',
					600: 'hsl(35, 75%, 45%)',
					700: 'hsl(30, 70%, 40%)',
					800: 'hsl(25, 65%, 35%)',
					900: 'hsl(20, 60%, 30%)'
				}
			},
			fontFamily: {
				sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
				display: ['Playfair Display', 'serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			backgroundImage: {
				'gradient-warm': 'var(--gradient-warm)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-cream': 'var(--gradient-cream)',
			},
			boxShadow: {
				'warm': 'var(--shadow-warm)',
				'gold': 'var(--shadow-gold)',
				'soft': 'var(--shadow-soft)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'pulse-gold': {
					'0%, 100%': {
						boxShadow: '0 0 0 0 hsl(45, 85%, 55%, 0.4)'
					},
					'50%': {
						boxShadow: '0 0 0 15px hsl(45, 85%, 55%, 0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'pulse-gold': 'pulse-gold 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
