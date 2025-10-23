export type Theme = 'light' | 'dark' | 'blue' | 'green' | 'purple' | 'orange'

export interface AppState {
  markdown: string
  theme: Theme
  lastSaved: string | null
}

export interface SaveData {
  markdown: string
  theme: Theme
  timestamp: number
}
