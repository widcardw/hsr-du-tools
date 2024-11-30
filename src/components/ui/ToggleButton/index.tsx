import clsx from 'clsx'
import {
  createSignal,
  type Component,
  type JSX,
  mergeProps,
  createEffect,
  on,
} from 'solid-js'
import './index.css'

const ToggleButton: Component<{
  value?: boolean
  onChange?: (value: boolean) => void
  children?: JSX.Element
  class?: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'destructive' | 'unstyled'
  disabled?: boolean
}> = (props) => {
  const mp = mergeProps(
    {
      value: false,
      class: '',
      size: 'medium',
      variant: 'secondary',
      disabled: false,
    },
    props,
  )
  const [value, setValue] = createSignal<boolean>(mp.value)

  createEffect(
    on(
      () => props.value,
      (v) => setValue(v || false),
    ),
  )

  const handleChange = (e: Event) => {
    if (mp.disabled) return
    const target = e.target as HTMLInputElement
    setValue(target.checked)
    props.onChange?.(target.checked)
  }

  const cls = clsx(
    'toggle-button',
    'inline-flex items-center justify-center',
    'border-none outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
    mp.size === 'small' && 'text-sm px-2 py-1 rounded',
    mp.size === 'medium' && 'text-base px-4 py-2 rounded-md',
    mp.size === 'large' && 'text-lg px-6 py-3 rounded-lg',
    mp.variant === 'primary' &&
      'bg-fg text-bg checked:bg-fg-secondary hover:bg-fg-secondary',
    mp.variant === 'secondary' &&
      'bg-bg-secondary text-fg hover:bg-bg-tertiary checked:bg-bg-tertiary',
    mp.variant === 'destructive' &&
      'bg-bg-destructive text-white hover:bg-bg-destructivehover checked:bg-bg-destructivehover',
    'op-85 transition-opacity',
    'hover:op-100',
    mp.class,
  )

  return (
    <label class={cls} data-variant={mp.variant} data-pressed={value()}>
      <input
        class="hidden"
        type="checkbox"
        checked={value()}
        onChange={handleChange}
      />
      {mp.children}
    </label>
  )
}

export default ToggleButton
