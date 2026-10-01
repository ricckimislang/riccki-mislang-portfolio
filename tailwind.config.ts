import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      }
    }
  }
}
