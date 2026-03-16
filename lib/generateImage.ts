import { toPng } from "html-to-image"

export async function generateImage() {
  const node = document.getElementById("quote-card")

  const dataUrl = await toPng(node)

  const link = document.createElement("a")
  link.download = "quote.png"
  link.href = dataUrl
  link.click()
}