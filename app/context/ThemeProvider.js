'use client'

import { createContext } from 'react'

export const ThemeContext = createContext({})

export default function ThemeProvider({ children , value}) {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
