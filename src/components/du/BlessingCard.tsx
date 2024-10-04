import { GAIN_MAP, type GainType, PATH_MAP } from '@/libs/du/constants'
import { type Blessing, BlessingRarity } from '@/libs/du/types'
import clsx from 'clsx'
import {
  type Component,
  For,
  Show,
  createEffect,
  createSignal,
  on,
} from 'solid-js'
import { Badge } from '../ui/badge'

import './scroll-bar.css'
import './blessing-bg.css'
import './scrollable-tags.css'

const BLESSING_BG_MAP = {
  [BlessingRarity.Gold]: 'blessing-gold',
  [BlessingRarity.Blue]: 'blessing-blue',
  [BlessingRarity.Gray]: 'blessing-gray',
  [BlessingRarity.Equation]: 'blessing-ultimate',
}

const BlessingCard: Component<{
  blessing: Blessing
  up?: boolean
  hilitedTag?: GainType[]
  noDesc?: boolean
  onTagClick?: (gain: GainType, v: boolean) => void
}> = (props) => {
  const [upgraded, setUpgrade] = createSignal(false)
  createEffect(
    on(
      () => props.up,
      () => setUpgrade(!!props.up),
    ),
  )
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
          BLESSING_BG_MAP[props.blessing.rarity],
        )}
      >
        <img
          src={`/blessing${props.blessing.icon}`}
          alt={PATH_MAP[props.blessing.path]}
          class={clsx('w-60%')}
        />
      </div>
      <div class={clsx('font-bold text-center', 'whitespace-nowrap', 'truncate')} title={props.blessing.name}>
        {props.blessing.name}
      </div>
      <Show when={props.noDesc !== true}>
        <div
          class={clsx('text-sm text-center', 'h-7rem of-y-auto')}
          innerHTML={
            upgraded() ? props.blessing.desc[1] : props.blessing.desc[0]
          }
        />
      </Show>

      {/* 相关 buff tag */}
      <div class="tag-outer">
        <div
          class={clsx(
            'space-x-1 of-x-auto whitespace-nowrap text-center',
            'no-scroll-bar tag-container',
          )}
        >
          <For each={Array.from(props.blessing.rel)}>
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
      <div
        class={clsx(
          'text-0.75rem text-center',
          'bg-foreground',
          upgraded()
            ? 'text-yellow-600 shadow-sm shadow-yellow-500'
            : 'text-background',
        )}
        onClick={() => setUpgrade((v) => !v)}
      >
        {upgraded() ? '已强化' : '未强化'}
      </div>
    </div>
  )
}

export default BlessingCard
