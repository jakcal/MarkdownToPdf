import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface EditorProps {
  markdown: string
  onMarkdownChange: (markdown: string) => void
}

export default function Editor({ markdown, onMarkdownChange }: EditorProps) {
  return (
    <Card className="h-[75dvh] md:h-[80dvh]">
      <CardHeader>
        <CardTitle>Editor</CardTitle>
      </CardHeader>
      <CardContent>
        <textarea
          className="h-[60dvh] w-full resize-none rounded-md border bg-background p-3 font-mono text-sm outline-none focus-visible:ring-1"
          value={markdown}
          onChange={(e) => onMarkdownChange(e.target.value)}
          placeholder="Write your Markdown here..."
        />
      </CardContent>
    </Card>
  )
}
