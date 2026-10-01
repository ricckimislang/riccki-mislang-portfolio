export type ThemeMode = 'light' | 'dark'

export function useTheme() {
  const theme = useState<ThemeMode>('portfolio-theme', () => 'light')

  const applyTheme = (next: ThemeMode) => {
    theme.value = next
    if (import.meta.client) {
      document.documentElement.dataset.theme = next
      document.documentElement.style.colorScheme = next
      localStorage.setItem('portfolio-theme', next)
    }
  }

  const toggleTheme = () => applyTheme(theme.value === 'dark' ? 'light' : 'dark')

  onMounted(() => {
    const stored = localStorage.getItem('portfolio-theme') as ThemeMode | null
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    theme.value = stored === 'dark' || stored === 'light' ? stored : system
    document.documentElement.dataset.theme = theme.value
    document.documentElement.style.colorScheme = theme.value
  })

  return { theme, applyTheme, toggleTheme }
}
