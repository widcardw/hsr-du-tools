import { type BlessingEquation, BlessingEquationEr } from '@/libs/du/types'
import clsx from 'clsx'
import type { Component } from 'solid-js'

import './scroll-bar.css'
import './blessing-bg.css'

const Equation_BG_MAP = {
  [BlessingEquationEr.Gold]: 'blessing-gold',
  [BlessingEquationEr.Blue]: 'blessing-blue',
  [BlessingEquationEr.Purple]: 'blessing-purple',
  [BlessingEquationEr.Critical]: 'blessing-ultimate',
}

const EquationCard: Component<{ equation: BlessingEquation }> = (props) => {
  return (
    <div
      class={clsx(
        'border-1 border-zinc-800 dark:border-zinc-500',
        'shadow-md dark:shadow-zinc-700',
        'p-1',
        'space-y-1',
        'bg-background',
      )}
    >
      <div
        class={clsx(
          'p-2 flex items-center justify-center',
          Equation_BG_MAP[props.equation.er],
        )}
      >
        <img
          src={`/equation${props.equation.icon}`}
          alt={props.equation.name}
          class={clsx(props.equation.er === BlessingEquationEr.Critical ? 'w-40%': 'w-70%')}
        />
      </div>
      <div class={clsx('font-bold text-center')}>{props.equation.name}</div>
      <div
        class={clsx('text-sm text-center', 'h-7rem of-y-auto')}
        innerHTML={props.equation.desc}
      />
    </div>
  )
}

export default EquationCard
