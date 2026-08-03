import type { LevelMeta } from '../types'

type Props = {
  level: LevelMeta
  completedIds: Set<string>
  onBack: () => void
  onOpenLesson: (lessonId: string) => void
}

export function LevelScreen({
  level,
  completedIds,
  onBack,
  onOpenLesson,
}: Props) {
  return (
    <div className="screen">
      <header className="topbar">
        <button type="button" className="btn ghost" onClick={onBack}>
          ← Назад
        </button>
        <div>
          <p className="eyebrow">
            Level {level.number} · {level.cefr}
          </p>
          <h1>{level.titleRu}</h1>
        </div>
      </header>
      <p className="lead pad">{level.goal}</p>

      {level.units.length === 0 && (
        <p className="panel muted">Юниты этого уровня появятся позже.</p>
      )}

      {level.units.map((unit) => (
        <section key={unit.id} className="unit-block">
          <h2>
            Unit {unit.number}. {unit.titleRu}
          </h2>
          <div className="lesson-list">
            {unit.lessons.map((lesson) => {
              const done = completedIds.has(lesson.id)
              const locked = !lesson.hasContent
              return (
                <button
                  key={lesson.id}
                  type="button"
                  className={`lesson-row ${done ? 'done' : ''} ${locked ? 'locked' : ''}`}
                  disabled={locked}
                  onClick={() => onOpenLesson(lesson.id)}
                >
                  <span className="num">{lesson.number}</span>
                  <div>
                    <strong>{lesson.titleRu}</strong>
                    <p className="muted">{lesson.grammar}</p>
                  </div>
                  <span className="muted">
                    {locked ? 'скоро' : done ? '✓' : '→'}
                  </span>
                </button>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
