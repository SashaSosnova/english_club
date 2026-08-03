import { useState } from 'react'
import type { CardsExercise } from '../../types'

type Props = {
  exercise: CardsExercise
  onDone: () => void
  onCollect: () => void
}

export function CardsView({ exercise, onDone, onCollect }: Props) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const card = exercise.cards[index]
  const last = index >= exercise.cards.length - 1

  return (
    <div className="panel">
      <p className="hint">
        Карточка {index + 1} / {exercise.cards.length} — нажмите, чтобы перевернуть
      </p>
      <button
        type="button"
        className={`flashcard ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
      >
        {!flipped ? (
          <span className="term">{card.term}</span>
        ) : (
          <span className="back">
            <strong>{card.translation}</strong>
            <em>{card.example}</em>
          </span>
        )}
      </button>
      <div className="row">
        {last ? (
          <button
            type="button"
            className="btn primary"
            onClick={() => {
              onCollect()
              onDone()
            }}
          >
            В словарь и дальше
          </button>
        ) : (
          <button
            type="button"
            className="btn primary"
            onClick={() => {
              setIndex((i) => i + 1)
              setFlipped(false)
            }}
          >
            Дальше
          </button>
        )}
      </div>
    </div>
  )
}
