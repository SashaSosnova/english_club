/** Browser TTS (Web Speech API) — no API key, works in Chrome/Edge/Android WebView. */

let preferredVoice: SpeechSynthesisVoice | null = null

function pickEnglishVoice(voices: SpeechSynthesisVoice[]) {
  const en = voices.filter((v) => v.lang.toLowerCase().startsWith('en'))
  return (
    en.find((v) => /uk|gb/i.test(v.lang) && /female|susan|martha|google/i.test(v.name)) ||
    en.find((v) => /uk|gb/i.test(v.lang)) ||
    en.find((v) => /us/i.test(v.lang)) ||
    en[0] ||
    null
  )
}

function ensureVoices() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  const voices = window.speechSynthesis.getVoices()
  if (voices.length) preferredVoice = pickEnglishVoice(voices)
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  ensureVoices()
  window.speechSynthesis.onvoiceschanged = ensureVoices
}

export function canSpeak() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

export function stopSpeaking() {
  if (!canSpeak()) return
  window.speechSynthesis.cancel()
}

export function speakEnglish(text: string, opts?: { rate?: number }) {
  if (!canSpeak() || !text.trim()) return
  ensureVoices()
  stopSpeaking()
  const u = new SpeechSynthesisUtterance(text.trim())
  u.lang = preferredVoice?.lang || 'en-GB'
  if (preferredVoice) u.voice = preferredVoice
  u.rate = opts?.rate ?? 0.92
  u.pitch = 1
  window.speechSynthesis.speak(u)
}
