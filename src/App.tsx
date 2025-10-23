import { useMemo, useRef, useState, useEffect } from "react"

import { Header, Editor, Preview, Footer } from "@/components"

import {  useAutoSave } from "@/hooks"
import { renderMarkdown, exportToPdf, loadFromStorage, clearStorage } from "@/utils"

import { DEFAULT_MARKDOWN } from "@/constants"
import type { Theme } from "@/types"

export default function App() {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN)
  const [theme, setTheme] = useState<Theme>('light')
  const [, setLastSaved] = useState<string | null>(null)
  
  const previewRef = useRef<HTMLDivElement | null>(null)
  const rootRef = useRef<HTMLDivElement | null>(null)

  // Load from storage on mount
  useEffect(() => {
    const { markdown: savedMarkdown, theme: savedTheme, lastSaved: savedLastSaved } = loadFromStorage()
    setMarkdown(savedMarkdown)
    setTheme(savedTheme)
    setLastSaved(savedLastSaved)
  }, [])

  // Auto-save functionality
  useAutoSave({ markdown, theme })

  const renderedHtml = useMemo(() => {
    return renderMarkdown(markdown)
  }, [markdown])

  const handleExportPdf = async () => {
    if (!previewRef.current || !rootRef.current) return
    await exportToPdf(previewRef.current, rootRef.current)
  }

  const handleClear = () => {
    setMarkdown("")
    clearStorage()
  }

  return (
    <div ref={rootRef} className="min-h-dvh bg-background text-foreground">
      <Header
        theme={theme}
        onThemeChange={setTheme}
        onClear={handleClear}
        onExportPdf={handleExportPdf}
      />

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-4 md:grid-cols-2">
        <Editor
          markdown={markdown}
          onMarkdownChange={setMarkdown}
        />

        <Preview
          ref={previewRef}
          renderedHtml={renderedHtml}
          theme={theme}
        />
      </main>
      
      <Footer />
    </div>
  )
}