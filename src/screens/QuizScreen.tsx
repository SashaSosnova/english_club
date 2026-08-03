import { useRef, useState } from 'react'
import { getQuizById } from '../content/quizzes'
import { DrillView } from '../components/exercises/DrillView'

type Props = {
  quizId: string
  onExit: () => void
  onComplete: (
    quizId: string,
    score: { correct: number; total: number },
  ) => void
}

export function QuizScreen({ quizId, onExit, onComplete }: Props) {
  const quiz = getQuizById(quizId)
  const [step, setStep] = useState(0)
  const [awaitNext, setAwaitNext] = useState(false)
  const [finished, setFinished] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [total, setTotal] = useState(0)
  const scoreRef = useRef({ correct: 0, total: 0 })

  if (!quiz) {
    return (
      <div className="screen">
        <p className="panel">Тест пока недоступен.</p>
        <button type="button" className="btn" onClick={onExit}>
          Назад
        </button>
      </div>
    )
  }

  const question = quiz.questions[step]
  const pct = ((step + (finished ? 1 : 0)) / quiz.questions.length) * 100

  function record(ok: boolean) {
    scoreRef.current = {
      correct: scoreRef.current.correct + (ok ? 1 : 0),
      total: scoreRef.current.total + 1,
    }
    setCorrect(scoreRef.current.correct)
    setTotal(scoreRef.current.total)
    setAwaitNext(true)
  }

  function goNext() {
    setAwaitNext(false)
    if (step >= quiz!.questions.length - 1) {
      setFinished(true)
      onComplete(quizId, scoreRef.current)
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
            Unit {quiz.unitNumber} · Quiz · {step + 1}/{quiz.questions.length}
          </p>
          <strong>{quiz.titleRu}</strong>
          <div className="bar">
            <div className="bar-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </header>

      {finished ? (
        <div className="panel center">
          <h2>Тест пройден</h2>
          <p className="lead">
            Результат: {correct}/{total} (
            {total ? Math.round((correct / total) * 100) : 0}%)
          </p>
          <button type="button" className="btn primary" onClick={onExit}>
            Дальше
          </button>
        </div>
      ) : (
        <>
          <DrillView key={question.id} exercise={question} onResult={record} />
          {awaitNext && (
            <div className="footer-actions">
              <button type="button" className="btn primary" onClick={goNext}>
                {step >= quiz.questions.length - 1 ? 'Завершить' : 'Дальше'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
