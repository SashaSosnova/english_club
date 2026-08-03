import { useMemo, useState } from 'react'
import type { BuilderExercise } from '../../types'

type Props = {
  exercise: BuilderExercise
  onResult: (correct: boolean) => void
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function BuilderView({ exercise, onResult }: Props) {
  const poolInit = useMemo(
    () => shuffle(exercise.tokens.map((t, i) => ({ t, i }))),
    [exercise],
  )
  const [pool, setPool] = useState(poolInit)
  const [built, setBuilt] = useState<{ t: string; i: number }[]>([])
  const [checked, setChecked] = useState(false)

  const correct =
    checked &&
    built.map((b) => b.t).join(' ') === exercise.answer.join(' ')

  return (
    <div className="panel">
      <p className="hint">{exercise.prompt}</p>
      {exercise.promptRu && <h2 className="prompt">{exercise.promptRu}</h2>}
      <div className="builder-line">
        {built.length === 0 && <span className="placeholder">Соберите здесь</span>}
        {built.map((item) => (
          <button
            key={`b-${item.i}`}
            type="button"
            className="chip"
            disabled={checked}
            onClick={() => {
              setBuilt((b) => b.filter((x) => x.i !== item.i))
              setPool((p) => [...p, item])
            }}
          >
            {item.t}
          </button>
        ))}
      </div>
      <div className="builder-pool">
        {pool.map((item) => (
          <button
            key={`p-${item.i}`}
            type="button"
            className="chip"
            disabled={checked}
            onClick={() => {
              setPool((p) => p.filter((x) => x.i !== item.i))
              setBuilt((b) => [...b, item])
            }}
          >
            {item.t}
          </button>
        ))}
      </div>
      {!checked ? (
        <button
          type="button"
          className="btn primary"
          disabled={built.length === 0}
          onClick={() => {
            const ok =
              built.map((b) => b.t).join(' ') === exercise.answer.join(' ')
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
            : `Правильно: ${exercise.answer.join(' ')}`}
        </p>
      )}
    </div>
  )
}
