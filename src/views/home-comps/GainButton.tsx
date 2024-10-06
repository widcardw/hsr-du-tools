import { ToggleButton } from '@/components/ui/toggle'
import { GAIN_MAP, type GainType } from '@/libs/du/constants'
import { type Component, createSignal } from 'solid-js'

const GainButton: Component<{
  gain: GainType
  pressed: boolean
  onChange: (v: boolean) => void
}> = (props) => {
  const [p, setP] = createSignal(props.pressed)
  return (
    <ToggleButton
      class="text-foreground whitespace-nowrap mb-2 mr-2 inline-flex gap-1"
      pressed={p()}
      onChange={(v) => {
        setP(v)
        props.onChange(v)
      }}
    >
      <img src={GAIN_MAP[props.gain][2]} alt={props.gain.toString()} class="w-5 h-5" />
      <span>{GAIN_MAP[props.gain][1]}</span>
    </ToggleButton>
  )
}

export default GainButton
