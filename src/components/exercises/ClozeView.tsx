import { useState } from 'react'
import type { ClozeExercise } from '../../types'

type Props = {
  exercise: ClozeExercise
  onResult: (correct: boolean) => void
}

export function ClozeView({ exercise, onResult }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)

  const parts = exercise.text.split('___')
  const allFilled = exercise.gaps.every((g) => answers[g.id])
  const correct =
    checked &&
    exercise.gaps.every((g) => answers[g.id] === g.answer)

  return (
    <div className="panel">
      <h2 className="prompt">Заполните пропуски</h2>
      <p className="cloze-text">
        {parts.map((part, i) => {
          const gap = exercise.gaps[i]
          return (
            <span key={i}>
              {part}
              {gap && (
                <select
                  className="cloze-select"
                  disabled={checked}
                  value={answers[gap.id] ?? ''}
                  onChange={(e) =>
                    setAnswers((a) => ({ ...a, [gap.id]: e.target.value }))
                  }
                >
                  <option value="">…</option>
                  {gap.options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              )}
            </span>
          )
        })}
      </p>
      {!checked ? (
        <button
          type="button"
          className="btn primary"
          disabled={!allFilled}
          onClick={() => {
            const ok = exercise.gaps.every((g) => answers[g.id] === g.answer)
            setChecked(true)
            onResult(ok)
          }}
        >
          Проверить
        </button>
      ) : (
        <p className={`feedback ${correct ? 'ok' : 'bad'}`}>
          {correct
            ? 'Верно'
            : `Ответы: ${exercise.gaps.map((g) => g.answer).join(', ')}`}
        </p>
      )}
    </div>
  )
}
