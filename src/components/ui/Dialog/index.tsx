import {
  type Accessor,
  type Component,
  type JSX,
  type Setter,
  createContext,
  createEffect,
  createSignal,
  mergeProps,
  on,
  useContext,
} from 'solid-js'

import './index.css'
import clsx from 'clsx'

const DialogContext = createContext<[Accessor<boolean>, Setter<boolean>]>([
  () => false,
  () => void 0,
])

const Dialog: Component<{
  defaultOpen?: boolean
  children?: JSX.Element
  trigger: JSX.Element
  class?: string
  onOpenChange?: (open: boolean) => void
}> = (props) => {
  const openSignal = createSignal(props.defaultOpen ?? false)

  const [dialogRef, setDialogRef] = createSignal<HTMLDialogElement>()

  function closeOnClickOutSide(ev: MouseEvent) {
    const dialogElement = dialogRef()
    if (dialogElement && ev.target === dialogElement) {
      dialogElement.close()
      openSignal[1](false)
    }
  }

  createEffect(
    on(openSignal[0], (o) => {
      props.onOpenChange?.(o)
      if (o) {
        dialogRef()?.showModal()
      } else {
        dialogRef()?.close()
      }
    }),
  )

  return (
    <DialogContext.Provider value={openSignal}>
      {props.trigger}
      <dialog
        ref={(r) => setDialogRef(r)}
        onClick={closeOnClickOutSide}
        class={props.class}
      >
        {props.children}
      </dialog>
    </DialogContext.Provider>
  )
}

const DialogTrigger: Component<{
  onClick?: (ev: MouseEvent) => void
  children?: JSX.Element
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'ghost' | 'unstyled'
  class?: string
  size?: 'small' | 'medium' | 'large'
}> = (props) => {
  const mp = mergeProps(
    { disabled: false, class: '', variant: 'secondary', size: 'medium' },
    props,
  )
  const cls = clsx(
    mp.class,
    'dialogTrigger',
    mp.variant === 'primary' && 'bg-fg text-bg hover:bg-fg-secondary',
    mp.variant === 'secondary' &&
      'bg-bg-secondary text-fg hover:bg-bg-tertiary',
    mp.variant === 'ghost' && 'bg-transparent text-fg hover:bg-bg-secondary',
    mp.size === 'small' && 'px-2 py-1 text-sm rounded',
    mp.size === 'medium' && 'px-4 py-2 text-base rounded-md',
    mp.size === 'large' && 'px-6 py-3 text-lg rounded-lg',
  )
  const openSignal = useContext(DialogContext)
  return (
    <button
      class={cls}
      disabled={mp.disabled}
      onClick={(ev) => {
        openSignal?.[1](true)
        props.onClick?.(ev)
      }}
    >
      {props.children}
    </button>
  )
}

export { Dialog, DialogTrigger }
