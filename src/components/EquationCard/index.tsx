import clsx from 'clsx'
import { BlessingEquationEr, type BlessingEquation } from '@/libs/du/types'
import { For, Show, type Component } from 'solid-js'
// import { GAIN_MAP } from '@/pages/v2.7/_data/constants'
import type { GainMapType } from '@/libs/du/constants'
import { type Path, PATH_ICON_MAP } from '@/libs/du/constants'
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
  hilitedTag?: number[]
  noDesc?: boolean
  onTagClick?: (gain: number, v: boolean) => void
  gain_map: GainMapType<number>
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
          `${Equation_BG_MAP[props.equation.er]}-up`,
          'h-8rem sm:h-6rem md:h-8rem',
        )}
      >
        <Show
          when={props.equation.er !== BlessingEquationEr.Critical}
          fallback={
            <img
              src={`/hoshinokami/${props.equation.Path}.webp`}
              alt={props.equation.Name}
              class={clsx(
                'w-70%',
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                `${Equation_BG_MAP[props.equation.er]}-img`,
              )}
              loading="lazy"
            />
          }
        >
          <img
            src={`/eq-simp/l${props.equation.Path}.webp`}
            alt={props.equation.Name}
            class={clsx(
              'w-70%',
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              `${Equation_BG_MAP[props.equation.er]}-img`,
            )}
            loading="lazy"
          />
          <img
            src={`/eq-simp/r${Object.keys(props.equation.Need)
              .map((i) => Number(i))
              .find((i) => i !== props.equation.Path)}.webp`}
            alt={props.equation.Name}
            class={clsx(
              'w-70%',
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              `${Equation_BG_MAP[props.equation.er]}-img`,
            )}
            loading="lazy"
          />
        </Show>
      </div>
      {/* 方程名称 */}
      <div
        class={clsx('font-bold text-center', 'whitespace-nowrap', 'truncate')}
      >
        {props.equation.Name}
      </div>
      {/* 所需祝福数量 */}
      <div class="flex justify-center gap-1 items-center">
        <For
          each={Object.entries(props.equation.Need).sort((_, b) =>
            Number(b[0]) === props.equation.Path ? 1 : -1,
          )}
        >
          {(it) => (
            <>
              <img
                src={`/path${PATH_ICON_MAP[Number(it[0]) as Path]}`}
                alt={it[0]}
                loading="lazy"
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
          innerHTML={props.equation.Desc}
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
                  {props.gain_map[it][1]}
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
