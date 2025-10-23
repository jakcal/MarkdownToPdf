import MarkdownIt from "markdown-it"
import DOMPurify from "dompurify"

const md = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: true,
  typographer: true,
})

export function renderMarkdown(markdown: string): string {
  if (!markdown || markdown.trim() === '') {
    return ''
  }
  
  try {
    const raw = md.render(markdown)
    const clean = DOMPurify.sanitize(raw, { 
      USE_PROFILES: { html: true },
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'img', 'hr'],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class']
    })
    return clean
  } catch (error) {
    console.error('Error rendering markdown:', error)
    return markdown // Return original if rendering fails
  }
}
