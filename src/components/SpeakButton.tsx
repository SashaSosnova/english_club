import { speakEnglish, canSpeak } from '../lib/tts'

type Props = {
  text: string
  label?: string
  className?: string
}

export function SpeakButton({ text, label = '▶︎ Слушать', className = '' }: Props) {
  if (!canSpeak() || !text.trim()) return null
  return (
    <button
      type="button"
      className={`btn speak ${className}`.trim()}
      onClick={(e) => {
        e.stopPropagation()
        speakEnglish(text)
      }}
    >
      {label}
    </button>
  )
}
