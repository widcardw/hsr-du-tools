import { type BlessingEquation, BlessingEquationEr } from '@/libs/du/types'
import clsx from 'clsx'
import { type Component, For, Show } from 'solid-js'

import './scroll-bar.css'
import './blessing-bg.css'
import './scrollable-tags.css'
import './eq-shadow.css'

import {
  GAIN_MAP,
  type GainType,
  PATH_ICON_MAP,
  type Path,
} from '@/libs/du/constants'
import { Badge } from '../ui/badge'

const Equation_BG_MAP = {
  [BlessingEquationEr.Gold]: 'blessing-gold',
  [BlessingEquationEr.Blue]: 'blessing-blue',
  [BlessingEquationEr.Purple]: 'blessing-purple',
  [BlessingEquationEr.Critical]: 'blessing-ultimate',
}

const EquationCard: Component<{
  equation: BlessingEquation
  hilitedTag?: GainType[]
  noDesc?: boolean
  onTagClick?: (gain: GainType, v: boolean) => void
}> = (props) => {
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
      {/* 方程图像 */}
      <div class={clsx('p-2', Equation_BG_MAP[props.equation.er])}>
        <img
          src={`/equation${props.equation.icon}`}
          alt={props.equation.name}
          class={clsx(
            props.equation.er === BlessingEquationEr.Critical
              ? 'w-40%'
              : 'w-70%',
            'mx-a block',
            `${Equation_BG_MAP[props.equation.er]}-img`
          )}
        />
      </div>
      {/* 方程名称 */}
      <div
        class={clsx('font-bold text-center', 'whitespace-nowrap', 'truncate')}
      >
        {props.equation.name}
      </div>
      {/* 所需祝福数量 */}
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
      {/* 方程描述 */}
      <Show when={props.noDesc !== true}>
        <div
          class={clsx('text-sm text-center', 'h-7rem of-y-auto')}
          innerHTML={props.equation.desc}
        />
      </Show>

      {/* 相关 buff */}
      <div class="tag-outer">
        <div
          class={clsx(
            'space-x-1 of-x-auto whitespace-nowrap text-center',
            'no-scroll-bar tag-container',
          )}
        >
          <For each={Array.from(props.equation.rel)}>
            {(it) => {
              const hilited = props.hilitedTag?.includes(it)
              return (
                <Badge
                  variant={hilited ? 'default' : 'secondary'}
                  class={clsx(
                    'whitespace-nowrap',
                    props.onTagClick && 'cursor-pointer',
                  )}
                  onClick={() => props.onTagClick?.(it, !hilited)}
                >
                  {GAIN_MAP[it][1]}
                </Badge>
              )
            }}
          </For>
        </div>
      </div>
    </div>
  )
}

export default EquationCard
