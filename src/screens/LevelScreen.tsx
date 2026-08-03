import {
  isLessonUnlocked,
  isUnitComplete,
  quizIdForUnit,
} from '../content/catalog'
import type { LevelMeta } from '../types'

type Props = {
  level: LevelMeta
  completedIds: Set<string>
  quizCompletedIds: Set<string>
  onBack: () => void
  onOpenLesson: (lessonId: string) => void
  onOpenQuiz: (quizId: string) => void
}

export function LevelScreen({
  level,
  completedIds,
  quizCompletedIds,
  onBack,
  onOpenLesson,
  onOpenQuiz,
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

      {level.units.map((unit) => {
        const withContent = unit.lessons.filter((l) => l.hasContent)
        const unitDone = isUnitComplete(unit.id, completedIds)
        const quizId = quizIdForUnit(unit.id)
        const quizDone = quizCompletedIds.has(quizId)

        return (
          <section key={unit.id} className="unit-block">
            <h2>
              Unit {unit.number}. {unit.titleRu}
            </h2>
            <div className="lesson-list">
              {unit.lessons.map((lesson) => {
                const done = completedIds.has(lesson.id)
                const noContent = !lesson.hasContent
                const sequenceLocked =
                  !noContent &&
                  !done &&
                  !isLessonUnlocked(level.id, lesson.id, completedIds)
                const locked = noContent || sequenceLocked
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
                      {noContent
                        ? 'скоро'
                        : sequenceLocked
                          ? '🔒'
                          : done
                            ? '✓'
                            : '→'}
                    </span>
                  </button>
                )
              })}

              {withContent.length > 0 && (
                <button
                  type="button"
                  className={`lesson-row quiz-row ${quizDone ? 'done' : ''} ${!unitDone ? 'locked' : ''}`}
                  disabled={!unitDone}
                  onClick={() => onOpenQuiz(quizId)}
                >
                  <span className="num quiz">Q</span>
                  <div>
                    <strong>Unit Quiz</strong>
                    <p className="muted">
                      {unitDone
                        ? quizDone
                          ? 'Пройден — можно повторить'
                          : 'Проверьте юнит'
                        : 'Откроется после 4 уроков'}
                    </p>
                  </div>
                  <span className="muted">
                    {!unitDone ? '🔒' : quizDone ? '✓' : '→'}
                  </span>
                </button>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}
