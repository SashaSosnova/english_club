import { useMemo, useState } from 'react'
import {
  getLessonMeta,
  getLevel,
  nextAction,
} from './content/catalog'
import { useProgress } from './hooks/useProgress'
import { HomeScreen } from './screens/HomeScreen'
import { LevelScreen } from './screens/LevelScreen'
import { LessonScreen } from './screens/LessonScreen'
import { ProgressScreen } from './screens/ProgressScreen'
import { QuizScreen } from './screens/QuizScreen'
import { ReviewScreen } from './screens/ReviewScreen'
import './App.css'

type Screen =
  | { name: 'home' }
  | { name: 'level'; levelId: string }
  | { name: 'lesson'; lessonId: string }
  | { name: 'quiz'; quizId: string }
  | { name: 'review' }
  | { name: 'progress' }

export default function App() {
  const {
    progress,
    ready,
    completedIds,
    quizCompletedIds,
    dueCards,
    markLessonComplete,
    markQuizComplete,
    addCards,
    reviewCard,
  } = useProgress()
  const [screen, setScreen] = useState<Screen>({ name: 'home' })

  const lessonNext = useMemo(() => {
    if (screen.name !== 'lesson') return null
    // Treat current lesson as done so "next" is correct on the finish screen
    const ids = new Set(completedIds)
    ids.add(screen.lessonId)
    return nextAction(progress.currentLevelId, ids, quizCompletedIds)
  }, [screen, progress.currentLevelId, completedIds, quizCompletedIds])

  if (!ready) {
    return (
      <div className="app-shell">
        <p className="loading">Загрузка…</p>
      </div>
    )
  }

  return (
    <div className="app-shell">
      {screen.name === 'home' && (
        <HomeScreen
          progress={progress}
          completedIds={completedIds}
          quizCompletedIds={quizCompletedIds}
          dueCount={dueCards.length}
          onOpenLevel={(levelId) => setScreen({ name: 'level', levelId })}
          onContinueLesson={(lessonId) =>
            setScreen({ name: 'lesson', lessonId })
          }
          onContinueQuiz={(quizId) => setScreen({ name: 'quiz', quizId })}
          onReview={() => setScreen({ name: 'review' })}
          onProgress={() => setScreen({ name: 'progress' })}
        />
      )}

      {screen.name === 'level' && (
        <LevelScreen
          level={getLevel(screen.levelId)!}
          completedIds={completedIds}
          quizCompletedIds={quizCompletedIds}
          onBack={() => setScreen({ name: 'home' })}
          onOpenLesson={(lessonId) => setScreen({ name: 'lesson', lessonId })}
          onOpenQuiz={(quizId) => setScreen({ name: 'quiz', quizId })}
        />
      )}

      {screen.name === 'lesson' && (
        <LessonScreen
          lessonId={screen.lessonId}
          onExit={() => {
            const ctx = getLessonMeta(screen.lessonId)
            setScreen({
              name: 'level',
              levelId: ctx?.level.id ?? progress.currentLevelId,
            })
          }}
          onComplete={(lessonId, score) => markLessonComplete(lessonId, score)}
          onCollectCards={addCards}
          nextLabel={
            lessonNext
              ? lessonNext.type === 'quiz'
                ? `Тест: ${lessonNext.detail}`
                : `Дальше: ${lessonNext.label}`
              : undefined
          }
          onContinueNext={
            lessonNext
              ? () => {
                  if (lessonNext.type === 'quiz') {
                    setScreen({ name: 'quiz', quizId: lessonNext.quizId })
                  } else {
                    setScreen({
                      name: 'lesson',
                      lessonId: lessonNext.lessonId,
                    })
                  }
                }
              : undefined
          }
        />
      )}

      {screen.name === 'quiz' && (
        <QuizScreen
          quizId={screen.quizId}
          onExit={() =>
            setScreen({ name: 'level', levelId: progress.currentLevelId })
          }
          onComplete={(quizId, score) => markQuizComplete(quizId, score)}
        />
      )}

      {screen.name === 'review' && (
        <ReviewScreen
          cards={dueCards}
          onReview={reviewCard}
          onBack={() => setScreen({ name: 'home' })}
        />
      )}

      {screen.name === 'progress' && (
        <ProgressScreen
          progress={progress}
          completedIds={completedIds}
          dueCount={dueCards.length}
          onBack={() => setScreen({ name: 'home' })}
          onOpenLesson={(lessonId) => setScreen({ name: 'lesson', lessonId })}
          onOpenQuiz={(quizId) => setScreen({ name: 'quiz', quizId })}
          onReview={() => setScreen({ name: 'review' })}
        />
      )}
    </div>
  )
}
