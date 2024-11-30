import { createSignal, mergeProps, type Component } from 'solid-js'

import './index.css'
import clsx from 'clsx'

const NumberField: Component<{
  defaultValue?: number
  onChange?: (value: number) => void
  disabled?: boolean
  maxValue?: number
  minValue?: number
  class?: string
  size?: 'small' | 'medium' | 'large',
}> = (props) => {
  const mp = mergeProps(
    {
      defaultValue: 0,
      disabled: false,
      maxValue: Number.MAX_SAFE_INTEGER,
      minValue: Number.MIN_SAFE_INTEGER,
      onChange: () => {},
      class: '',
      size: 'medium'
    },
    props,
  )

  const [value, setValue] = createSignal(mp.defaultValue)
  const cls = clsx('number-field',
    mp.size === 'small' && 'text-sm py-1 rounded',
    mp.size === 'medium' && 'text-base py-2 rounded-md',
    mp.size === 'large' && 'text-lg py-3 rounded-lg',
    'text-center',
    mp.class,
  )

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const newValue = Number(target.value)
    if (newValue >= mp.minValue && newValue <= mp.maxValue) {
      setValue(newValue)
      mp.onChange(newValue)
    }
  }
  return (
    <input
      class={cls}
      type="number"
      value={value()}
      onInput={handleChange}
      disabled={mp.disabled}
      min={mp.minValue}
      max={mp.maxValue}
    />
  )
}

export default NumberField
