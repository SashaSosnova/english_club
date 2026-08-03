import { useCallback, useEffect, useMemo, useState } from 'react'
import type { CardItem, ProgressState } from '../types'
import { completedQuizIds } from '../lib/progressInsights'
import {
  completeLesson,
  completeQuiz,
  dueSrsCards,
  loadProgress,
  reviewSrsCard,
  saveProgress,
  upsertSrsCards,
} from '../storage/progressStore'

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress())
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setProgress(loadProgress())
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    saveProgress(progress)
  }, [progress, ready])

  const markLessonComplete = useCallback(
    (lessonId: string, score: { correct: number; total: number }) => {
      setProgress((p) => completeLesson(p, lessonId, score))
    },
    [],
  )

  const markQuizComplete = useCallback(
    (quizId: string, score: { correct: number; total: number }) => {
      setProgress((p) => completeQuiz(p, quizId, score))
    },
    [],
  )

  const addCards = useCallback((cards: CardItem[]) => {
    setProgress((p) => upsertSrsCards(p, cards))
  }, [])

  const reviewCard = useCallback((cardId: string, knew: boolean) => {
    setProgress((p) => reviewSrsCard(p, cardId, knew))
  }, [])

  const dueCards = dueSrsCards(progress)

  const completedIds = useMemo(
    () =>
      new Set(
        Object.entries(progress.lessons)
          .filter(([, v]) => v.completed)
          .map(([id]) => id),
      ),
    [progress.lessons],
  )

  const quizCompletedIds = useMemo(
    () => completedQuizIds(progress),
    [progress],
  )

  return {
    progress,
    ready,
    completedIds,
    quizCompletedIds,
    dueCards,
    markLessonComplete,
    markQuizComplete,
    addCards,
    reviewCard,
  }
}
