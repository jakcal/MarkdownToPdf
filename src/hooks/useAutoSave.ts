import { useEffect, useRef, useCallback } from 'react'
import type { Theme } from '../types'
import { STORAGE_KEYS, AUTO_SAVE_DELAY } from '../constants'

interface UseAutoSaveProps {
  markdown: string
  theme: Theme
}

export function useAutoSave({ markdown, theme }: UseAutoSaveProps) {
  const timeoutRef = useRef<number | null>(null);

  const lastSavedRef = useRef<string>('')
  const lastThemeRef = useRef<Theme>('light')

  const saveToStorage = useCallback(() => {
    try {
      // Only save if content has actually changed
      if (markdown !== lastSavedRef.current || theme !== lastThemeRef.current) {
        localStorage.setItem(STORAGE_KEYS.MARKDOWN, markdown)
        localStorage.setItem(STORAGE_KEYS.THEME, theme)
        localStorage.setItem(STORAGE_KEYS.LAST_SAVED, new Date().toISOString())
        
        lastSavedRef.current = markdown
        lastThemeRef.current = theme
        
        console.log('Auto-saved to localStorage')
      }
    } catch (error) {
      console.error('Error auto-saving:', error)
    }
  }, [markdown, theme])

  useEffect(() => {
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Set new timeout for auto-save
    timeoutRef.current = setTimeout(saveToStorage, AUTO_SAVE_DELAY)

    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [saveToStorage])
}
