import { type Component, Show, createSignal, mergeProps } from 'solid-js'

import './index.css'
import clsx from 'clsx'

const InputField: Component<{
  defaultValue?: string
  onChange?: (value: string) => void
  disabled?: boolean
  class?: string
  size?: 'small' | 'medium' | 'large'
  clearable?: boolean
}> = (props) => {
  const mp = mergeProps(
    {
      defaultValue: '',
      disabled: false,
      onChange: () => {},
      class: '',
      size: 'medium',
      clearable: false,
    },
    props,
  )

  const [inputRef, setInputRef] = createSignal<HTMLInputElement>()

  const [value, setValue] = createSignal(mp.defaultValue)
  const cls = clsx(
    'input-field',
    'text-fg',
    mp.size === 'small' && 'text-sm py-1 rounded',
    mp.size === 'medium' && 'text-base py-2 rounded-md',
    mp.size === 'large' && 'text-lg py-3 rounded-lg',
    mp.class,
  )

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const newValue = String(target.value)
    mp.onChange(newValue)
  }
  return (
    <div>
      <input
        ref={(r) => setInputRef(r)}
        class={cls}
        value={value()}
        onInput={handleChange}
        disabled={mp.disabled}
      />
      <Show when={mp.clearable}>
        <div
          class={clsx(
            'px-2',
            'inline-flex',
            'cursor-pointer',
            'hover:text-bg-destructive',
          )}
          onClick={() => {
            setValue('')
            mp.onChange('')
            const r = inputRef()
            if (r) r.value = ''
          }}
        >
          X
        </div>
      </Show>
    </div>
  )
}

export default InputField
