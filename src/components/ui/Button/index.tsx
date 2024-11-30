import type { JSX } from 'astro/jsx-runtime'
import clsx from 'clsx'
import { mergeProps, type Component } from 'solid-js'

const Button: Component<{
  variant?: 'primary' | 'ghost' | 'secondary' | 'destructive'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  children?: JSX.Element
  class?: string
  disabled?: boolean
}> = (props) => {
    const mp = mergeProps({
        variant: 'secondary',
        size: 'medium',
        disabled: false,
    }, props)
    const cls = clsx(
        'px-4 py-2 rounded-md border-none outline-none cursor-pointer',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'inline-flex items-center justify-center',
        mp.variant === 'primary' && 'bg-fg text-bg hover:bg-fg-secondary',
        mp.variant === 'ghost' && 'bg-transparent text-fg hover:bg-fg-secondary',
        mp.variant === 'secondary' && 'bg-bg-secondary text-fg hover:bg-bg-tertiary',
        mp.variant === 'destructive' && 'bg-bg-destructive text-white hover:bg-bg-destructivehover',
        mp.size === 'small' && 'text-sm',
        mp.size === 'medium' && 'text-base',
        mp.size === 'large' && 'text-lg',
        mp.class
    )
  return <button class={cls} onClick={props.onClick}>{props.children}</button>
}

export default Button
