import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
} from '@/components/ui/number-field'
import type { Component } from 'solid-js'

const TagIntersectionCntField: Component<{
  initCnt: number
  onChange: (cnt: number) => void
}> = (props) => {
  return (
    <NumberField
      defaultValue={props.initCnt}
      onChange={(e) => props.onChange(Number(e))}
      minValue={1}
      maxValue={5}
    >
      <NumberFieldGroup>
        <NumberFieldDecrementTrigger
          class="bg-transparent text-foreground"
          aria-label="Decrement"
        />
        <NumberFieldInput class="bg-background text-foreground" />
        <NumberFieldIncrementTrigger
          class="bg-transparent text-foreground"
          aria-label="Increment"
        />
      </NumberFieldGroup>
    </NumberField>
  )
}

export default TagIntersectionCntField
