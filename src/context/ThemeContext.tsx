import { createContext } from 'react'

export type ThemeContextProps = {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextProps>({
  darkMode: false,
  toggleDarkMode: () => {},
})

export default ThemeContext
