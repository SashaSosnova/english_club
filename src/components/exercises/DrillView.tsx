import { useState } from 'react'
import type { DrillExercise } from '../../types'

type Props = {
  exercise: DrillExercise
  onResult: (correct: boolean) => void
}

export function DrillView({ exercise, onResult }: Props) {
  const [chosen, setChosen] = useState<string | null>(null)
  const locked = chosen !== null
  const correct = chosen === exercise.answer

  return (
    <div className="panel">
      {exercise.promptRu && <p className="hint">{exercise.promptRu}</p>}
      <h2 className="prompt">{exercise.prompt}</h2>
      <div className="options">
        {exercise.options.map((opt) => {
          let cls = 'option'
          if (locked) {
            if (opt === exercise.answer) cls += ' correct'
            else if (opt === chosen) cls += ' wrong'
          }
          return (
            <button
              key={opt}
              type="button"
              className={cls}
              disabled={locked}
              onClick={() => {
                setChosen(opt)
                onResult(opt === exercise.answer)
              }}
            >
              {opt}
            </button>
          )
        })}
      </div>
      {locked && (
        <p className={`feedback ${correct ? 'ok' : 'bad'}`}>
          {correct
            ? 'Верно'
            : `Правильный ответ: ${exercise.answer}${
                exercise.explainRu ? ` — ${exercise.explainRu}` : ''
              }`}
        </p>
      )}
    </div>
  )
}
