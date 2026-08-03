import { useMemo, useState } from 'react'
import type { DialogueExercise } from '../../types'

type Props = {
  exercise: DialogueExercise
  onResult: (correct: boolean) => void
  onDone: () => void
}

type LogItem = { speaker: string; text: string }

function initialLog(exercise: DialogueExercise): {
  log: LogItem[]
  index: number
} {
  const log: LogItem[] = []
  let i = 0
  while (i < exercise.lines.length && exercise.lines[i].text) {
    log.push({
      speaker: exercise.lines[i].speaker,
      text: exercise.lines[i].text!,
    })
    i += 1
  }
  return { log, index: i }
}

export function DialogueView({ exercise, onResult, onDone }: Props) {
  const start = useMemo(() => initialLog(exercise), [exercise])
  const [log, setLog] = useState<LogItem[]>(start.log)
  const [index, setIndex] = useState(start.index)
  const [wrongHint, setWrongHint] = useState<string | null>(null)
  const [finished, setFinished] = useState(
    start.index >= exercise.lines.length,
  )

  const line = exercise.lines[index]

  function finish() {
    setFinished(true)
    onDone()
  }

  function afterChoice(correctText: string) {
    setWrongHint(null)
    const nextLog = [...log, { speaker: 'You', text: correctText }]
    let i = index + 1
    while (i < exercise.lines.length && exercise.lines[i].text) {
      nextLog.push({
        speaker: exercise.lines[i].speaker,
        text: exercise.lines[i].text!,
      })
      i += 1
    }
    setLog(nextLog)
    if (i >= exercise.lines.length) finish()
    else setIndex(i)
  }

  return (
    <div className="panel">
      <h2>{exercise.title}</h2>
      <div className="dialogue-log">
        {log.map((l, i) => (
          <div
            key={`${l.speaker}-${i}`}
            className={`bubble ${l.speaker === 'You' ? 'you' : 'npc'}`}
          >
            <span>{l.speaker}</span>
            <p>{l.text}</p>
          </div>
        ))}
      </div>

      {!finished && line?.choices && (
        <div className="options">
          {line.choices.map((c) => (
            <button
              key={c.text}
              type="button"
              className="option"
              onClick={() => {
                onResult(c.correct)
                if (!c.correct) {
                  setWrongHint('Не совсем так — попробуйте другую реплику')
                  return
                }
                afterChoice(c.text)
              }}
            >
              {c.text}
            </button>
          ))}
        </div>
      )}

      {wrongHint && <p className="feedback bad">{wrongHint}</p>}
      {finished && <p className="feedback ok">Диалог завершён</p>}
    </div>
  )
}
