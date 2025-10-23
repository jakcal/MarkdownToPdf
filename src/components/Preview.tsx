import { forwardRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Theme } from "@/types"

interface PreviewProps {
  renderedHtml: string
  theme: Theme
}

const Preview = forwardRef<HTMLDivElement, PreviewProps>(
  ({ renderedHtml, theme }, ref) => {
    return (
      <Card className="h-[75dvh] md:h-[80dvh]">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            ref={ref}
            className={`preview-scroll pdf-page markdown-body max-w-[210mm] md:max-w-none h-[60dvh] md:h-[64dvh] theme-${theme}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: renderedHtml }}
          />
        </CardContent>
      </Card>
    )
  }
)

Preview.displayName = "Preview"

export default Preview
