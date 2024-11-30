import clsx from 'clsx'
import { BlessingEquationEr, type BlessingEquation } from '@/libs/du/types'
import { For, Show, type Component } from 'solid-js'
import {
  GAIN_MAP,
  PATH_ICON_MAP,
  type GainType,
  type Path,
} from '@/libs/du/constants'
import Badge from '../ui/Badge'

import '@/styles/blessing-bg.css'
import '@/styles/scrollable-tags.css'
import '@/styles/eq-shadow.css'
import '@/styles/scroll-bar.css'

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
        'border-1 border-solid border-zinc-800 dark:border-zinc-500',
        'shadow-md dark:shadow-zinc-700',
        'p-1',
        'space-y-1',
        'bg-bg',
      )}
    >
      {/* 方程图像 */}
      <div
        class={clsx(
          'p-2 relative',
          Equation_BG_MAP[props.equation.er],
          'h-8rem sm:h-6rem md:h-8rem',
        )}
      >
        {/* 旧版 */}
        {/* <img
            src={`/equation${props.equation.icon}`}
            alt={props.equation.name}
            class={clsx(
              // props.equation.er === BlessingEquationEr.Critical
              //   ? 'w-41.5%'
              //   : 'w-70%',
              'h-4rem sm:h-6rem md:h-8rem',
              'mx-a block',
              `${Equation_BG_MAP[props.equation.er]}-img`
            )}
          /> */}
        <img
          src={`/eq-simp/l${props.equation.path}.webp`}
          alt={props.equation.name}
          class={clsx(
            'w-70%',
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            `${Equation_BG_MAP[props.equation.er]}-img`,
          )}
        />
        <Show when={props.equation.er !== BlessingEquationEr.Critical}>
          <img
            src={`/eq-simp/r${Object.keys(props.equation.need)
              .map((i) => Number(i))
              .find((i) => i !== props.equation.path)}.webp`}
            alt={props.equation.name}
            class={clsx(
              'w-70%',
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              `${Equation_BG_MAP[props.equation.er]}-img`,
            )}
          />
        </Show>
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
          each={Object.entries(props.equation.need).sort((_, b) =>
            Number(b[0]) === props.equation.path ? 1 : -1,
          )}
        >
          {(it) => (
            <>
              <img
                src={`/path${PATH_ICON_MAP[Number(it[0]) as Path]}`}
                alt={it[0]}
                class="w-6 h-6 light:invert"
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
