import { useMemo, useRef, useState } from 'react'
import { getLessonMeta } from '../content/catalog'
import { getLessonContent } from '../content/lessons'
import { ExplainView } from '../components/exercises/ExplainView'
import { DrillView } from '../components/exercises/DrillView'
import { BuilderView } from '../components/exercises/BuilderView'
import { ClozeView } from '../components/exercises/ClozeView'
import { CardsView } from '../components/exercises/CardsView'
import { DialogueView } from '../components/exercises/DialogueView'
import { ListeningView } from '../components/exercises/ListeningView'
import type { CardItem } from '../types'

type Props = {
  lessonId: string
  onExit: () => void
  onComplete: (
    lessonId: string,
    score: { correct: number; total: number },
  ) => void
  onCollectCards: (cards: CardItem[]) => void
  nextLabel?: string
  onContinueNext?: () => void
}

export function LessonScreen({
  lessonId,
  onExit,
  onComplete,
  onCollectCards,
  nextLabel,
  onContinueNext,
}: Props) {
  const meta = getLessonMeta(lessonId)
  const content = getLessonContent(lessonId)
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [total, setTotal] = useState(0)
  const [awaitNext, setAwaitNext] = useState(false)
  const [finished, setFinished] = useState(false)
  const scoreRef = useRef({ correct: 0, total: 0 })

  // Free-write "produce" skipped: slow and hard for learners; focus on drills/cards/cloze.
  const exercises = useMemo(
    () => (content?.exercises ?? []).filter((e) => e.type !== 'produce'),
    [content],
  )
  const exercise = exercises[step]
  const progressPct = useMemo(
    () =>
      exercises.length
        ? ((step + (finished ? 1 : 0)) / exercises.length) * 100
        : 0,
    [step, exercises.length, finished],
  )

  if (!meta || !content || !exercise) {
    return (
      <div className="screen">
        <p className="panel">Урок пока недоступен.</p>
        <button type="button" className="btn" onClick={onExit}>
          Назад
        </button>
      </div>
    )
  }

  function record(ok: boolean) {
    scoreRef.current = {
      correct: scoreRef.current.correct + (ok ? 1 : 0),
      total: scoreRef.current.total + 1,
    }
    setCorrect(scoreRef.current.correct)
    setTotal(scoreRef.current.total)
    setAwaitNext(true)
  }

  function completeLesson() {
    setFinished(true)
    onComplete(lessonId, scoreRef.current)
  }

  function goNext() {
    setAwaitNext(false)
    if (step >= exercises.length - 1) {
      completeLesson()
      return
    }
    setStep((s) => s + 1)
  }

  function finishSilent() {
    if (step >= exercises.length - 1) {
      completeLesson()
      return
    }
    setStep((s) => s + 1)
  }

  return (
    <div className="screen lesson">
      <header className="topbar">
        <button type="button" className="btn ghost" onClick={onExit}>
          ✕
        </button>
        <div className="grow">
          <p className="eyebrow">
            Урок {meta.lesson.number} · {exercises.length} шагов
          </p>
          <strong>{meta.lesson.titleRu}</strong>
          <div className="bar">
            <div className="bar-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      </header>

      {finished ? (
        <div className="panel center">
          <h2>Урок завершён</h2>
          <p className="lead">
            Результат: {correct}/{total || '—'}
            {total
              ? ` (${Math.round((correct / total) * 100)}%)`
              : ''}
          </p>
          <div className="finish-actions">
            {nextLabel && onContinueNext && (
              <button
                type="button"
                className="btn primary"
                onClick={onContinueNext}
              >
                {nextLabel}
              </button>
            )}
            <button type="button" className="btn" onClick={onExit}>
              К уровню
            </button>
          </div>
        </div>
      ) : (
        <>
          {exercise.type === 'explain' && (
            <ExplainView
              key={exercise.id}
              exercise={exercise}
              onDone={finishSilent}
            />
          )}
          {exercise.type === 'drill' && (
            <DrillView
              key={exercise.id}
              exercise={exercise}
              onResult={record}
            />
          )}
          {exercise.type === 'builder' && (
            <BuilderView
              key={exercise.id}
              exercise={exercise}
              onResult={record}
              onSkip={() => {
                record(false)
              }}
            />
          )}
          {exercise.type === 'cloze' && (
            <ClozeView
              key={exercise.id}
              exercise={exercise}
              onResult={record}
            />
          )}
          {exercise.type === 'cards' && (
            <CardsView
              key={exercise.id}
              exercise={exercise}
              onCollect={() => onCollectCards(exercise.cards)}
              onDone={finishSilent}
            />
          )}
          {exercise.type === 'dialogue' && (
            <DialogueView
              key={exercise.id}
              exercise={exercise}
              onResult={record}
              onDone={() => setAwaitNext(true)}
            />
          )}
          {exercise.type === 'listening' && (
            <ListeningView
              key={exercise.id}
              exercise={exercise}
              onResult={record}
              onDone={() => setAwaitNext(true)}
            />
          )}

          {awaitNext && !finished && (
            <div className="footer-actions">
              <button type="button" className="btn primary" onClick={goNext}>
                {step >= exercises.length - 1 ? 'Завершить' : 'Дальше'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
