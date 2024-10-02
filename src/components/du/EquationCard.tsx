import { type BlessingEquation, BlessingEquationEr } from '@/libs/du/types'
import clsx from 'clsx'
import { type Component, For } from 'solid-js'

import './scroll-bar.css'
import './blessing-bg.css'
import { GAIN_MAP, type GainType, PATH_ICON_MAP, type Path } from '@/libs/du/constants'
import { Badge } from '../ui/badge'

const Equation_BG_MAP = {
  [BlessingEquationEr.Gold]: 'blessing-gold',
  [BlessingEquationEr.Blue]: 'blessing-blue',
  [BlessingEquationEr.Purple]: 'blessing-purple',
  [BlessingEquationEr.Critical]: 'blessing-ultimate',
}

const EquationCard: Component<{ equation: BlessingEquation, hilitedTag?: Set<GainType> }> = (props) => {
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
      <div class={clsx('p-2', Equation_BG_MAP[props.equation.er])}>
        <img
          src={`/equation${props.equation.icon}`}
          alt={props.equation.name}
          class={clsx(
            props.equation.er === BlessingEquationEr.Critical
              ? 'w-40%'
              : 'w-70%',
            'mx-a block',
          )}
        />
      </div>
      <div class={clsx('font-bold text-center')}>{props.equation.name}</div>
      <div class="flex justify-center gap-1 items-center">
        <For
          each={Object.entries(props.equation.need).sort((a, b) => b[1] - a[1])}
        >
          {(it) => (
            <>
              <img
                src={`/path${PATH_ICON_MAP[Number(it[0]) as Path]}`}
                alt={it[0]}
                class="w-6 h-6"
              />
              <span>{it[1]}</span>
            </>
          )}
        </For>
      </div>
      <div
        class={clsx('text-sm text-center', 'h-7rem of-y-auto')}
        innerHTML={props.equation.desc}
      />
      <div class="space-x-1 space-y-1 text-center">
        <For each={Array.from(props.equation.rel)}>
          {(it) => <Badge variant={props.hilitedTag?.has(it) ? 'default' : 'secondary'} class="whitespace-nowrap">{GAIN_MAP[it][1]}</Badge>}
        </For>
      </div>
    </div>
  )
}

export default EquationCard
