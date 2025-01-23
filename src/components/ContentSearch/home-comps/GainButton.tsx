import ToggleButton from '@/components/ui/ToggleButton'
import type { GainType, Side } from '@/libs/du/constants'
// import { GAIN_MAP } from '@/pages/v2.7/data/constants'

import { type Component, createEffect, createSignal, on } from 'solid-js'

const GainButton: Component<{
  gain: GainType
  pressed: boolean
  onChange: (v: boolean) => void
  gain_map: Record<GainType, [Side, string, string]>
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
        class="w-5 h-5 light:drop-shadow light:drop-shadow-color-fg-tertiary"
        loading="lazy"
      />
      <span>{props.gain_map[props.gain][1]}</span>
    </ToggleButton>
  )
}

export default GainButton
