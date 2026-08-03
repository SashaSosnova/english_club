import { useState } from 'react'
import { getLessonMeta, getLevel } from './content/catalog'
import { useProgress } from './hooks/useProgress'
import { HomeScreen } from './screens/HomeScreen'
import { LevelScreen } from './screens/LevelScreen'
import { LessonScreen } from './screens/LessonScreen'
import { ReviewScreen } from './screens/ReviewScreen'
import './App.css'

type Screen =
  | { name: 'home' }
  | { name: 'level'; levelId: string }
  | { name: 'lesson'; lessonId: string }
  | { name: 'review' }

export default function App() {
  const {
    progress,
    ready,
    completedIds,
    dueCards,
    markLessonComplete,
    addCards,
    reviewCard,
  } = useProgress()
  const [screen, setScreen] = useState<Screen>({ name: 'home' })

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
          dueCount={dueCards.length}
          onOpenLevel={(levelId) => setScreen({ name: 'level', levelId })}
          onContinue={(lessonId) => setScreen({ name: 'lesson', lessonId })}
          onReview={() => setScreen({ name: 'review' })}
        />
      )}

      {screen.name === 'level' && (
        <LevelScreen
          level={getLevel(screen.levelId)!}
          completedIds={completedIds}
          onBack={() => setScreen({ name: 'home' })}
          onOpenLesson={(lessonId) => setScreen({ name: 'lesson', lessonId })}
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
        />
      )}

      {screen.name === 'review' && (
        <ReviewScreen
          cards={dueCards}
          onReview={reviewCard}
          onBack={() => setScreen({ name: 'home' })}
        />
      )}
    </div>
  )
}
