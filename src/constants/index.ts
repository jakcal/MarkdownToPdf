import type { Theme } from '../types'

export const DEFAULT_MARKDOWN = `# Markdown to PDF

Write Markdown on the left. Preview renders on the right.

## Features

- Live preview
- Client-side PDF export
- Works offline
- Multiple themes
- Auto-save to localStorage

> Tip: Images and links are supported.

### Code Example

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

- The Team`

export const THEMES: { value: Theme; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'purple', label: 'Purple' },
  { value: 'orange', label: 'Orange' },
]

export const STORAGE_KEYS = {
  MARKDOWN: 'md2pdf_markdown',
  THEME: 'md2pdf_theme',
  LAST_SAVED: 'md2pdf_last_saved',
} as const

export const AUTO_SAVE_DELAY = 2000 // 2 seconds
