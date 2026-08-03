import {
  levelCompletionPct,
  unitProgressRows,
  weakLessons,
} from '../lib/progressInsights'
import { activeLevelId, getLevel, quizIdForUnit } from '../content/catalog'
import type { ProgressState } from '../types'

type Props = {
  progress: ProgressState
  completedIds: Set<string>
  dueCount: number
  onBack: () => void
  onOpenLesson: (lessonId: string) => void
  onOpenQuiz: (quizId: string) => void
  onReview: () => void
}

export function ProgressScreen({
  progress,
  completedIds,
  dueCount,
  onBack,
  onOpenLesson,
  onOpenQuiz,
  onReview,
}: Props) {
  const levelId = activeLevelId(completedIds)
  const level = getLevel(levelId)
  const pct = levelCompletionPct(completedIds, levelId)
  const units = unitProgressRows(progress, levelId, completedIds)
  const weak = weakLessons(progress, levelId)
  const srsTotal = Object.keys(progress.srs).length
  const mature = Object.values(progress.srs).filter((c) => c.reps >= 3).length

  return (
    <div className="screen">
      <header className="topbar">
        <button type="button" className="btn ghost" onClick={onBack}>
          ← Назад
        </button>
        <div>
          <p className="eyebrow">Прогресс</p>
          <h1>Ваш путь</h1>
        </div>
      </header>

      <section className="panel">
        <p className="eyebrow">
          Level {level?.number} · {level?.cefr}
        </p>
        <div className="bar fat">
          <div className="bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <p className="meta">{pct}% уроков завершено</p>
        <div className="stats tight">
          <div className="stat">
            <strong>{progress.streakDays}</strong>
            <span>streak</span>
          </div>
          <div className="stat">
            <strong>
              {mature}/{srsTotal || 0}
            </strong>
            <span>слов mature</span>
          </div>
          <div className="stat">
            <strong>{dueCount}</strong>
            <span>к повтору</span>
          </div>
        </div>
        {dueCount > 0 && (
          <button type="button" className="btn primary block" onClick={onReview}>
            Повторить слова
          </button>
        )}
      </section>

      <section className="unit-block">
        <h2>Юниты</h2>
        {units.map((u) => {
          if (u.lessonsTotal === 0) return null
          const quizScore = u.quiz?.score
          return (
            <div key={u.unitId} className="progress-unit">
              <div>
                <strong>
                  Unit {u.number}. {u.titleRu}
                </strong>
                <p className="muted">
                  Уроки {u.lessonsDone}/{u.lessonsTotal}
                  {u.quiz?.completed
                    ? ` · тест ${quizScore}%`
                    : u.quizReady
                      ? ' · тест готов'
                      : ''}
                </p>
              </div>
              {u.quizReady && !u.quiz?.completed && (
                <button
                  type="button"
                  className="btn primary small"
                  onClick={() => onOpenQuiz(quizIdForUnit(u.unitId))}
                >
                  Тест
                </button>
              )}
              {u.quiz?.completed && (
                <button
                  type="button"
                  className="btn small"
                  onClick={() => onOpenQuiz(quizIdForUnit(u.unitId))}
                >
                  Ещё раз
                </button>
              )}
            </div>
          )
        })}
      </section>

      <section className="unit-block">
        <h2>Слабые места</h2>
        {weak.length === 0 ? (
          <p className="panel muted">
            Пока нет слабых уроков. Результаты ниже 70% появятся здесь.
          </p>
        ) : (
          weak.map((w) => (
            <button
              key={w.lessonId}
              type="button"
              className="lesson-row"
              onClick={() => onOpenLesson(w.lessonId)}
            >
              <span className="num warn">{w.score}</span>
              <div>
                <strong>
                  Урок {w.number}. {w.titleRu}
                </strong>
                <p className="muted">{w.grammar}</p>
              </div>
              <span className="muted">повторить</span>
            </button>
          ))
        )}
      </section>
    </div>
  )
}
