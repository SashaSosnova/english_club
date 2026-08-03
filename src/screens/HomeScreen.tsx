import { levels, nextPlayableLesson } from '../content/catalog'
import type { ProgressState } from '../types'

type Props = {
  progress: ProgressState
  completedIds: Set<string>
  dueCount: number
  onOpenLevel: (levelId: string) => void
  onContinue: (lessonId: string) => void
  onReview: () => void
}

export function HomeScreen({
  progress,
  completedIds,
  dueCount,
  onOpenLevel,
  onContinue,
  onReview,
}: Props) {
  const current =
    levels.find((l) => l.id === progress.currentLevelId) ?? levels[0]
  const next = nextPlayableLesson(current.id, completedIds)
  const doneInLevel = current.units
    .flatMap((u) => u.lessons)
    .filter((l) => completedIds.has(l.id)).length
  const totalInLevel = current.units.flatMap((u) => u.lessons).length

  return (
    <div className="screen home">
      <header className="hero">
        <p className="eyebrow">English Club</p>
        <h1>Учим английский уверенно</h1>
        <p className="lead">
          Грамматика, словарь и разговор — путь от A1 к книгам и фильмам.
        </p>
      </header>

      <section className="stats">
        <div className="stat">
          <strong>{progress.streakDays}</strong>
          <span>дней подряд</span>
        </div>
        <div className="stat">
          <strong>{doneInLevel}/{totalInLevel || '—'}</strong>
          <span>уроков уровня</span>
        </div>
        <div className="stat">
          <strong>{Object.keys(progress.srs).length}</strong>
          <span>слов в SRS</span>
        </div>
      </section>

      {next && (
        <button
          type="button"
          className="card-cta"
          onClick={() => onContinue(next.id)}
        >
          <span className="eyebrow">Продолжить · {current.cefr}</span>
          <strong>
            Урок {next.number}. {next.titleRu}
          </strong>
          <span className="muted">{next.grammar}</span>
        </button>
      )}

      <button
        type="button"
        className="card-cta secondary"
        onClick={onReview}
        disabled={dueCount === 0}
      >
        <strong>Повтор слов</strong>
        <span className="muted">
          {dueCount > 0 ? `${dueCount} карточек к повтору` : 'Пока нечего повторять'}
        </span>
      </button>

      <section className="level-list">
        <h2>Уровни</h2>
        {levels.map((level) => {
          const locked = level.number > 1 && level.units.length === 0
          const lessons = level.units.flatMap((u) => u.lessons)
          const done = lessons.filter((l) => completedIds.has(l.id)).length
          return (
            <button
              key={level.id}
              type="button"
              className="level-row"
              disabled={locked}
              onClick={() => onOpenLevel(level.id)}
            >
              <div>
                <span className="badge">{level.cefr}</span>
                <strong>
                  {level.number}. {level.titleRu}
                </strong>
                <p className="muted">{level.goal}</p>
              </div>
              <span className="muted">
                {locked ? 'скоро' : `${done}/${lessons.length}`}
              </span>
            </button>
          )
        })}
      </section>
    </div>
  )
}
