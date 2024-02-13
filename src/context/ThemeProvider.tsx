import { useState } from 'react'
import ThemeContext from './ThemeContext'

interface props {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: props) => {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <ThemeContext.Provider
      value={{
        darkMode: darkMode,
        toggleDarkMode: toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider
