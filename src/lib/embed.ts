// Turn a YouTube or Vimeo page URL into an embeddable player URL.
// Returns null for anything else, which is then shown as a plain link.
export function embedUrl(raw: string): string | null {
  const url = new URL(raw)
  const host = url.hostname.replace(/^(www|m)\./, "")

  if (host === "youtu.be") return youtube(url.pathname.slice(1))
  if (host === "youtube.com" && url.searchParams.get("v")) return youtube(url.searchParams.get("v")!)
  if (host === "vimeo.com" && /^\/\d+$/.test(url.pathname))
    return `https://player.vimeo.com/video${url.pathname}?dnt=1`
  return null
}

const youtube = (id: string) => `https://www.youtube-nocookie.com/embed/${id}`
