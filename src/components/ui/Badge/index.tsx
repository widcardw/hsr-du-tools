import clsx from 'clsx'
import { mergeProps, type Component, type JSXElement } from 'solid-js'

const Badge: Component<{
  variant: 'default' | 'secondary' | 'destructive'
  class?: string
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  children?: JSXElement
}> = (props) => {
  const mergedProps = mergeProps(
    {
      class: null,
      size: 'medium',
      variant: 'default',
    },
    props,
  )

  const cls = clsx(
    'rounded-md px-6px py-2px',
    mergedProps.size === 'small' && 'text-0.6rem',
    mergedProps.size === 'medium' && 'text-0.75rem',
    mergedProps.size === 'large' && 'text-0.875rem',
    mergedProps.variant === 'default' && 'bg-fg text-bg',
    mergedProps.variant === 'secondary' && 'bg-bg-secondary text-fg',
    mergedProps.variant === 'destructive' && 'bg-bg-destructive text-white',
    mergedProps.class,
  )

  return (
    <span class={cls} onClick={mergedProps.onClick}>
      {mergedProps.children}
    </span>
  )
}

export default Badge
