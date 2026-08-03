import { levels, nextAction } from '../content/catalog'
import type { ProgressState } from '../types'

type Props = {
  progress: ProgressState
  completedIds: Set<string>
  quizCompletedIds: Set<string>
  dueCount: number
  onOpenLevel: (levelId: string) => void
  onContinueLesson: (lessonId: string) => void
  onContinueQuiz: (quizId: string) => void
  onReview: () => void
  onProgress: () => void
}

export function HomeScreen({
  progress,
  completedIds,
  quizCompletedIds,
  dueCount,
  onOpenLevel,
  onContinueLesson,
  onContinueQuiz,
  onReview,
  onProgress,
}: Props) {
  const current =
    levels.find((l) => l.id === progress.currentLevelId) ?? levels[0]
  const action = nextAction(current.id, completedIds, quizCompletedIds)
  const doneInLevel = current.units
    .flatMap((u) => u.lessons)
    .filter((l) => l.hasContent && completedIds.has(l.id)).length
  const totalInLevel = current.units
    .flatMap((u) => u.lessons)
    .filter((l) => l.hasContent).length

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
          <strong>
            {doneInLevel}/{totalInLevel || '—'}
          </strong>
          <span>уроков уровня</span>
        </div>
        <div className="stat">
          <strong>{Object.keys(progress.srs).length}</strong>
          <span>слов в SRS</span>
        </div>
      </section>

      {action && (
        <button
          type="button"
          className="card-cta"
          onClick={() => {
            if (action.type === 'quiz') onContinueQuiz(action.quizId)
            else onContinueLesson(action.lessonId)
          }}
        >
          <span className="eyebrow">
            {action.type === 'quiz' ? 'Тест юнита' : 'Продолжить'} · {current.cefr}
          </span>
          <strong>{action.label}</strong>
          <span className="muted">{action.detail}</span>
        </button>
      )}

      {!action && totalInLevel > 0 && doneInLevel >= totalInLevel && (
        <div className="card-cta secondary static">
          <strong>Level 1 пройден</strong>
          <span className="muted">Можно повторять уроки и тесты</span>
        </div>
      )}

      <div className="home-actions">
        <button
          type="button"
          className="card-cta secondary"
          onClick={onReview}
          disabled={dueCount === 0}
        >
          <strong>Повтор слов</strong>
          <span className="muted">
            {dueCount > 0
              ? `${dueCount} карточек к повтору`
              : 'Пока нечего повторять'}
          </span>
        </button>
        <button type="button" className="card-cta secondary" onClick={onProgress}>
          <strong>Прогресс</strong>
          <span className="muted">Юниты, тесты и слабые места</span>
        </button>
      </div>

      <section className="level-list">
        <h2>Уровни</h2>
        {levels.map((level) => {
          const locked = level.number > 1 && level.units.length === 0
          const lessons = level.units.flatMap((u) => u.lessons).filter((l) => l.hasContent)
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
