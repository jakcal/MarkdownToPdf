import { Github, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">Markdown to PDF</span> v1.0.0
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by <a href="https:/github.com/jakcal" target="_blank">Yassine Chandid</a></span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jakcal/MarkdownToPdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Github className="h-4 w-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-muted-foreground">
          <p>
            Open source • Built with React, Vite, and Tailwind CSS • 
            <span className="ml-1">Works offline</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
