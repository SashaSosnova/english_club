import type { ExplainBlock } from '../../types'
import { SpeakButton } from '../SpeakButton'

export function ExplainView({ exercise }: { exercise: ExplainBlock }) {
  return (
    <div className="panel explain">
      <h2>{exercise.title}</h2>
      <ul>
        {exercise.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div className="examples">
        <p className="label">Examples</p>
        {exercise.examples.map((ex) => (
          <div key={ex} className="example-row">
            <p className="example">{ex}</p>
            <SpeakButton text={ex} label="▶︎" className="icon" />
          </div>
        ))}
      </div>
    </div>
  )
}
