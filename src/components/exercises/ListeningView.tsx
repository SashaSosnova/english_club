import { useEffect, useState } from 'react'
import type { ListeningExercise } from '../../types'
import { speakEnglish, stopSpeaking, canSpeak } from '../../lib/tts'
import { DrillView } from './DrillView'
import { SpeakButton } from '../SpeakButton'

type Props = {
  exercise: ListeningExercise
  onResult: (correct: boolean) => void
  onDone: () => void
}

export function ListeningView({ exercise, onResult, onDone }: Props) {
  const [lineIndex, setLineIndex] = useState(-1)
  const [phase, setPhase] = useState<'listen' | 'gist'>('listen')
  const [gistStep, setGistStep] = useState(0)
  const [awaitNext, setAwaitNext] = useState(false)

  const active = lineIndex >= 0 ? exercise.lines[lineIndex] : null
  const sceneText = exercise.lines.map((l) => `${l.speaker}: ${l.text}`).join('\n')

  useEffect(() => () => stopSpeaking(), [])

  function playFrom(start: number) {
    if (!canSpeak()) {
      setLineIndex(exercise.lines.length - 1)
      return
    }
    stopSpeaking()
    let i = start
    const speakNext = () => {
      if (i >= exercise.lines.length) return
      setLineIndex(i)
      const u = exercise.lines[i]
      const utter = new SpeechSynthesisUtterance(u.text)
      utter.lang = 'en-GB'
      utter.rate = 0.9
      utter.onend = () => {
        i += 1
        if (i < exercise.lines.length) speakNext()
      }
      window.speechSynthesis.speak(utter)
    }
    speakNext()
  }

  if (phase === 'gist') {
    const q = exercise.gist[gistStep]
    if (!q) {
      return (
        <div className="panel center">
          <p className="feedback ok">Сцена прослушана</p>
          <button type="button" className="btn primary" onClick={onDone}>
            Дальше
          </button>
        </div>
      )
    }
    return (
      <div className="listening-gist">
        <p className="hint">Проверка понимания · {gistStep + 1}/{exercise.gist.length}</p>
        <DrillView
          key={q.id}
          exercise={q}
          onResult={(ok) => {
            onResult(ok)
            setAwaitNext(true)
          }}
        />
        {awaitNext && (
          <div className="footer-actions">
            <button
              type="button"
              className="btn primary"
              onClick={() => {
                setAwaitNext(false)
                if (gistStep >= exercise.gist.length - 1) onDone()
                else setGistStep((s) => s + 1)
              }}
            >
              {gistStep >= exercise.gist.length - 1 ? 'Дальше' : 'Следующий вопрос'}
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="panel listening">
      <h2>{exercise.title}</h2>
      {exercise.titleRu && <p className="hint">{exercise.titleRu}</p>}
      <p className="muted">Слушайте сцену. Текст внизу — как EN-субтитры.</p>

      <div className="subtitle-box" aria-live="polite">
        {active ? (
          <>
            <span className="sub-speaker">{active.speaker}</span>
            <p className="sub-text">{active.text}</p>
          </>
        ) : (
          <p className="sub-placeholder">Нажмите «Слушать сцену»</p>
        )}
      </div>

      <div className="transcript">
        <p className="label">Текст сцены</p>
        {exercise.lines.map((l, i) => (
          <button
            key={`${l.speaker}-${i}`}
            type="button"
            className={`transcript-line ${i === lineIndex ? 'active' : ''}`}
            onClick={() => {
              setLineIndex(i)
              speakEnglish(l.text)
            }}
          >
            <strong>{l.speaker}</strong>
            <span>{l.text}</span>
          </button>
        ))}
      </div>

      <div className="row">
        <button type="button" className="btn primary" onClick={() => playFrom(0)}>
          ▶︎ Слушать сцену
        </button>
        <SpeakButton text={sceneText} label="▶︎ Весь текст" />
      </div>
      <button
        type="button"
        className="btn block"
        onClick={() => {
          stopSpeaking()
          if (exercise.gist.length === 0) onDone()
          else setPhase('gist')
        }}
      >
        К вопросам
      </button>
    </div>
  )
}
