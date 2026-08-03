import type { ExplainBlock } from '../../types'

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
          <p key={ex} className="example">
            {ex}
          </p>
        ))}
      </div>
    </div>
  )
}
