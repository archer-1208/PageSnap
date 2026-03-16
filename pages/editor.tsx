import QuoteCard from "../components/QuoteCard"
import QuoteForm from "../components/QuoteForm"
import { generateImage } from "../lib/generateImage"

export default function Editor() {
  const quote = {
    text: "One sees clearly only with the heart.",
    bookTitle: "The Little Prince",
    author: "Antoine de Saint-Exupéry"
  }

  return (
    <div className="flex gap-10">

      <QuoteForm />

      <QuoteCard quote={quote} />

      <button onClick={generateImage}>
        Download Image
      </button>

    </div>
  )
}