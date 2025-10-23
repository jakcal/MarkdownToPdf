import { Button } from "@/components/ui/button"
import { THEMES } from "@/constants"
import type { Theme } from "@/types"
import { useOnlineStatus } from "@/hooks/useOnlineStatus"

interface HeaderProps {
  theme: Theme
  onThemeChange: (theme: Theme) => void
  onClear: () => void
  onExportPdf: () => void
}

export default function Header({ theme, onThemeChange, onClear, onExportPdf }: HeaderProps) {
  const isOnline = useOnlineStatus()

  return (
    <header className="no-print sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <h1 className="text-lg font-semibold">Markdown → PDF</h1>
        <div className="flex items-center gap-2">
          {!isOnline && (
            <div className="flex items-center gap-1 rounded-md bg-orange-100 px-2 py-1 text-xs text-orange-800 dark:bg-orange-900 dark:text-orange-200">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <span>Offline</span>
            </div>
          )}
          <select 
            value={theme} 
            onChange={(e) => onThemeChange(e.target.value as Theme)}
            className="rounded-md border border-input bg-background px-3 py-1 text-sm"
          >
            {THEMES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <Button variant="outline" onClick={onClear}>Clear</Button>
          <Button onClick={onExportPdf}>Download PDF</Button>
        </div>
      </div>
    </header>
  )
}
