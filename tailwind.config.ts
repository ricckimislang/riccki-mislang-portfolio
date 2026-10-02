import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      }
    }
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ':root': {
          '--bg': '#fafafa',
          '--surface': '#f1f1f1',
          '--surface-strong': '#e8e8e8',
          '--text': '#161616',
          '--muted': '#595959',
          '--faint': '#858585',
          '--line': '#d8d8d8',
          '--line-strong': '#b7b7b7',
          '--inverse': '#161616',
          '--inverse-text': '#fafafa',
          '--pattern': '#a7a7a7',
          '--focus': '#161616'
        },
        ':root[data-theme="dark"]': {
          '--bg': '#121212',
          '--surface': '#1d1d1d',
          '--surface-strong': '#272727',
          '--text': '#f5f5f5',
          '--muted': '#b8b8b8',
          '--faint': '#838383',
          '--line': '#383838',
          '--line-strong': '#575757',
          '--inverse': '#f5f5f5',
          '--inverse-text': '#121212',
          '--pattern': '#656565',
          '--focus': '#f5f5f5'
        },
        'html': { scrollBehavior: 'smooth' },
        'body': {
          margin: '0',
          backgroundColor: 'var(--bg)',
          color: 'var(--text)',
          fontFamily: 'Manrope, ui-sans-serif, system-ui, sans-serif',
          fontSize: '15px',
          lineHeight: '1.65',
          textRendering: 'optimizeLegibility',
          transition: 'background-color 180ms ease, color 180ms ease'
        },
        '::selection': { backgroundColor: 'var(--text)', color: 'var(--bg)' },
        ':focus-visible': { outline: '2px solid var(--focus)', outlineOffset: '4px' },
        'button, a': { WebkitTapHighlightColor: 'transparent' },
        '@media (max-width: 620px)': { body: { fontSize: '14px' } },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            scrollBehavior: 'auto !important',
            transitionDuration: '0.001ms !important',
            animationDuration: '0.001ms !important',
            animationIterationCount: '1 !important'
          }
        }
      })
    })
  ]
}
