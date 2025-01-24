// import { GAIN_MAP } from '@/pages/v2.7/_data/constants'
import { type GainMapType, PATH_MAP } from '@/libs/du/constants'
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
import Badge from '../ui/Badge'

import '@/styles/scroll-bar.css'
import '@/styles/blessing-bg.css'
import '@/styles/scrollable-tags.css'

const BLESSING_BG_MAP = {
  [BlessingRarity.Gold]: 'blessing-gold',
  [BlessingRarity.Blue]: 'blessing-blue',
  [BlessingRarity.Gray]: 'blessing-gray',
  [BlessingRarity.Equation]: 'blessing-ultimate',
}

const BlessingCard: Component<{
  blessing: Blessing
  up?: boolean
  hilitedTag?: number[]
  noDesc?: boolean
  onTagClick?: (gain: number, v: boolean) => void
  gain_map: GainMapType<number>
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
        'border-1 border-solid light:border-zinc-700 dark:border-zinc-500',
        'shadow-md dark:shadow-zinc-700',
        'p-1',
        'space-y-1',
        'bg-bg',
      )}
    >
      <div
        class={clsx(
          'p-2 flex items-center justify-center',
          upgraded()
            ? `${BLESSING_BG_MAP[props.blessing.Rarity]}-up`
            : BLESSING_BG_MAP[props.blessing.Rarity],
        )}
      >
        <img
          src={`/blessing${props.blessing.Icon}`}
          alt={PATH_MAP[props.blessing.Path]}
          class={clsx('w-60%')}
          loading="lazy"
        />
      </div>
      <div
        class={clsx('font-bold text-center', 'whitespace-nowrap', 'truncate')}
        title={props.blessing.Name}
      >
        {props.blessing.Name}
      </div>
      <Show when={props.noDesc !== true}>
        <div
          class={clsx('text-sm text-center', 'h-7rem of-y-auto')}
          innerHTML={
            upgraded() ? props.blessing.Desc[1] : props.blessing.Desc[0]
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
          <For each={props.blessing.rel}>
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
      <div
        class={clsx(
          'text-0.75rem text-center select-none',
          'cursor-pointer',
          'bg-fg',
          upgraded() ? 'text-yellow-600' : 'text-bg',
        )}
        onClick={() => setUpgrade((v) => !v)}
      >
        {upgraded() ? '已强化' : '未强化'}
      </div>
    </div>
  )
}

export default BlessingCard
