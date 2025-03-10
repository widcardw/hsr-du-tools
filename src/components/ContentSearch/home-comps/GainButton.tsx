import ToggleButton from '@/components/ui/ToggleButton'
import type { GainMapType } from '@/libs/du/constants'

import { type Component, createEffect, createSignal, on } from 'solid-js'

const GainButton: Component<{
  gain: number // GainType
  pressed: boolean
  onChange: (v: boolean) => void
  gain_map: GainMapType<number>
}> = (props) => {
  const [p, setP] = createSignal(props.pressed)
  createEffect(
    on(
      () => props.pressed,
      (v) => setP(v),
    ),
  )
  return (
    <ToggleButton
      size="small"
      class="text-foreground whitespace-nowrap mb-2 mr-2 inline-flex gap-1"
      value={p()}
      onChange={(v) => {
        setP(v)
        props.onChange(v)
      }}
    >
      <img
        src={props.gain_map[props.gain][2]}
        alt={props.gain.toString()}
        width="20"
        height="20"
        class="light:drop-shadow light:drop-shadow-color-fg-tertiary"
      />
      <span>{props.gain_map[props.gain][1]}</span>
    </ToggleButton>
  )
}

export default GainButton
