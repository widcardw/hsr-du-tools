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
      class="text-foreground whitespace-nowrap mb-2 mr-2"
      pressed={p()}
      onChange={(v) => {
        setP(v)
        props.onChange(v)
      }}
    >
      {GAIN_MAP[props.gain][1]}
    </ToggleButton>
  )
}

export default GainButton
