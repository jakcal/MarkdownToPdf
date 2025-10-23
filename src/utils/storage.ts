import type { Theme } from '../types';
import { STORAGE_KEYS, DEFAULT_MARKDOWN } from '../constants'

export function loadFromStorage(): { markdown: string; theme: Theme; lastSaved: string | null } {
  try {
    const markdown = localStorage.getItem(STORAGE_KEYS.MARKDOWN)
    const theme = localStorage.getItem(STORAGE_KEYS.THEME) as Theme
    const lastSaved = localStorage.getItem(STORAGE_KEYS.LAST_SAVED)
    
    // Validate theme
    const validThemes: Theme[] = ['light', 'dark', 'blue', 'green', 'purple', 'orange']
    const validTheme = validThemes.includes(theme) ? theme : 'light'
    
    return { 
      markdown: markdown || DEFAULT_MARKDOWN, 
      theme: validTheme, 
      lastSaved 
    }
  } catch (error) {
    console.error('Error loading from storage:', error)
    return { markdown: DEFAULT_MARKDOWN, theme: 'light', lastSaved: null }
  }
}

export function saveToStorage(markdown: string, theme: Theme): void {
  try {
    // Only save if content is valid
    if (typeof markdown === 'string' && typeof theme === 'string') {
      localStorage.setItem(STORAGE_KEYS.MARKDOWN, markdown)
      localStorage.setItem(STORAGE_KEYS.THEME, theme)
      localStorage.setItem(STORAGE_KEYS.LAST_SAVED, new Date().toISOString())
    }
  } catch (error) {
    console.error('Error saving to storage:', error)
  }
}

export function clearStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.MARKDOWN)
    localStorage.removeItem(STORAGE_KEYS.THEME)
    localStorage.removeItem(STORAGE_KEYS.LAST_SAVED)
  } catch (error) {
    console.error('Error clearing storage:', error)
  }
}
