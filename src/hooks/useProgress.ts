import { useCallback, useEffect, useState } from 'react'
import type { CardItem, ProgressState } from '../types'
import {
  completeLesson,
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

  const addCards = useCallback((cards: CardItem[]) => {
    setProgress((p) => upsertSrsCards(p, cards))
  }, [])

  const reviewCard = useCallback((cardId: string, knew: boolean) => {
    setProgress((p) => reviewSrsCard(p, cardId, knew))
  }, [])

  const dueCards = dueSrsCards(progress)

  const completedIds = new Set(
    Object.entries(progress.lessons)
      .filter(([, v]) => v.completed)
      .map(([id]) => id),
  )

  return {
    progress,
    ready,
    completedIds,
    dueCards,
    markLessonComplete,
    addCards,
    reviewCard,
  }
}
