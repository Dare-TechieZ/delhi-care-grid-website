/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.25', letterSpacing: '0.025em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.75', letterSpacing: '-0.025em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.75', letterSpacing: '-0.025em', fontWeight: '500' }],
                '2xl': ['1.5rem', { lineHeight: '2', letterSpacing: '-0.025em', fontWeight: '500' }],
                '3xl': ['1.875rem', { lineHeight: '2.25', letterSpacing: '-0.025em', fontWeight: '600' }],
                '4xl': ['2.25rem', { lineHeight: '2.5', letterSpacing: '-0.025em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '800' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '800' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '900' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '900' }],
            },
            fontFamily: {
                heading: "space grotesk",
                paragraph: "nunito sans"
            },
            colors: {
                'delhi-blue': '#0E7490',
                'health-green': '#16A34A',
                'delhi-orange': '#EA580C',
                'delhi-purple': '#7C3AED',
                destructive: '#DC2626',
                'destructive-foreground': '#FFFFFF',
                background: '#0F172A',
                secondary: '#34D399',
                foreground: '#E2E8F0',
                'secondary-foreground': '#000000',
                'primary-foreground': '#FFFFFF',
                primary: '#1E3A8A'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
