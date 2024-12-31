import ToggleButton from '@/components/ui/ToggleButton'
import { GAIN_MAP, type GainType } from '@/libs/du/constants'
import { type Component, createEffect, createSignal, on } from 'solid-js'

const GainButton: Component<{
  gain: GainType
  pressed: boolean
  onChange: (v: boolean) => void
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
        src={GAIN_MAP[props.gain][2]}
        alt={props.gain.toString()}
        class="w-5 h-5 light:drop-shadow light:drop-shadow-color-fg-tertiary"
        loading='lazy'
      />
      <span>{GAIN_MAP[props.gain][1]}</span>
    </ToggleButton>
  )
}

export default GainButton
