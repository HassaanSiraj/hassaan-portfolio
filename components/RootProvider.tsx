'use client'

import { ThemeProvider } from '@/context/ThemeContext'

export function RootProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
