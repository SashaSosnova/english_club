import { useState } from 'react'
import type { ExplainBlock } from '../../types'
import { SpeakButton } from '../SpeakButton'

type Props = {
  exercise: ExplainBlock
  onDone: () => void
}

/** One tip + one example at a time — no wall of text. */
export function ExplainView({ exercise, onDone }: Props) {
  const [i, setI] = useState(0)
  const total = exercise.points.length
  const point = exercise.points[i] ?? ''
  const example =
    exercise.examples[
      Math.min(i, Math.max(0, exercise.examples.length - 1))
    ] ?? exercise.examples[0]
  const last = i >= total - 1

  return (
    <div className="panel explain">
      <p className="eyebrow">
        Правило {i + 1} / {total}
      </p>
      <h2>{exercise.title}</h2>
      <p className="tip-card">{point}</p>
      {example && (
        <div className="examples">
          <p className="label">Пример</p>
          <div className="example-row">
            <p className="example">{example}</p>
            <SpeakButton text={example} label="▶︎" className="icon" />
          </div>
        </div>
      )}
      <div className="footer-actions inline">
        {i > 0 && (
          <button
            type="button"
            className="btn ghost"
            onClick={() => setI((n) => n - 1)}
          >
            Назад
          </button>
        )}
        <button
          type="button"
          className="btn primary"
          onClick={() => {
            if (last) onDone()
            else setI((n) => n + 1)
          }}
        >
          {last ? 'К практике' : 'Дальше'}
        </button>
      </div>
    </div>
  )
}
