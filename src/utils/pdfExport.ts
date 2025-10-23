// html2pdf.js has no bundled TS types; we declare the module separately
// and import the default function as any to keep the surface simple here.
// eslint-disable-next-line @typescript-eslint/no-var-requires
import html2pdf from "html2pdf.js"

export async function exportToPdf(element: HTMLElement, rootElement: HTMLElement) {
  // Toggle export mode to enforce precise width and layout
  rootElement.setAttribute("data-exporting", "true")

  // Temporarily remove height constraints and scroll to capture full content
  const originalHeight = element.style.height
  const originalOverflow = element.style.overflow
  element.style.height = 'auto'
  element.style.overflow = 'visible'

  const opt = {
    margin:       [10, 10, 10, 10],
    filename:     "jkl_PDF-TO-PDF.pdf",
    image:        { type: "jpeg", quality: 0.98 },
    html2canvas:  { 
      scale: 2, 
      useCORS: true,
      height: element.scrollHeight,
      width: element.scrollWidth,
      scrollX: 0,
      scrollY: 0
    },
    jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak:    { mode: ["css", "legacy"] },
  } as const

  try {
    await (html2pdf() as any).from(element).set(opt).save()
  } finally {
    // Restore original styles
    element.style.height = originalHeight
    element.style.overflow = originalOverflow
    rootElement.removeAttribute("data-exporting")
  }
}
