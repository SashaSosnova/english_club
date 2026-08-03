import { useState } from 'react'
import type { SrsCardState } from '../types'

type Props = {
  cards: SrsCardState[]
  onReview: (cardId: string, knew: boolean) => void
  onBack: () => void
}

export function ReviewScreen({ cards, onReview, onBack }: Props) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const card = cards[index]

  if (!card) {
    return (
      <div className="screen">
        <div className="panel center">
          <h2>На сегодня всё</h2>
          <p className="muted">Новых карточек к повтору нет.</p>
          <button type="button" className="btn primary" onClick={onBack}>
            На главную
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="screen">
      <header className="topbar">
        <button type="button" className="btn ghost" onClick={onBack}>
          ← Назад
        </button>
        <div>
          <p className="eyebrow">SRS повтор</p>
          <strong>
            {index + 1} / {cards.length}
          </strong>
        </div>
      </header>

      <button
        type="button"
        className={`flashcard ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(true)}
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

      {flipped && (
        <div className="row">
          <button
            type="button"
            className="btn danger"
            onClick={() => {
              onReview(card.cardId, false)
              setFlipped(false)
              setIndex((i) => i + 1)
            }}
          >
            Не помню
          </button>
          <button
            type="button"
            className="btn primary"
            onClick={() => {
              onReview(card.cardId, true)
              setFlipped(false)
              setIndex((i) => i + 1)
            }}
          >
            Помню
          </button>
        </div>
      )}
    </div>
  )
}
