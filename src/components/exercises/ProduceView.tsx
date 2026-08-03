import { useState } from 'react'
import type { ProduceExercise } from '../../types'

type Props = {
  exercise: ProduceExercise
  onDone: () => void
}

export function ProduceView({ exercise, onDone }: Props) {
  const [text, setText] = useState('')
  const sentences = text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter(Boolean)
  const enough = sentences.length >= exercise.minSentences

  return (
    <div className="panel">
      <h2>{exercise.prompt}</h2>
      <p className="hint">{exercise.promptRu}</p>
      <div className="hints">
        {exercise.hints.map((h) => (
          <span key={h} className="chip soft">
            {h}
          </span>
        ))}
      </div>
      <textarea
        className="produce-input"
        rows={6}
        placeholder="Write here…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="meta">
        Предложений: {sentences.length} / минимум {exercise.minSentences}
      </p>
      <button
        type="button"
        className="btn primary"
        disabled={!enough}
        onClick={onDone}
      >
        Готово
      </button>
    </div>
  )
}
