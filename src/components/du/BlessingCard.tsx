import { PATH_MAP } from '@/libs/du/constants'
import { type Blessing, BlessingRarity } from '@/libs/du/types'
import clsx from 'clsx'
import { type Component, createEffect, createSignal, on } from 'solid-js'

import './scroll-bar.css'
import './blessing-bg.css'

const BLESSING_BG_MAP = {
  [BlessingRarity.Gold]: 'blessing-gold',
  [BlessingRarity.Blue]: 'blessing-blue',
  [BlessingRarity.Gray]: 'blessing-gray',
  [BlessingRarity.Equation]: 'blessing-ultimate',
}

const BlessingCard: Component<{ blessing: Blessing; up?: boolean }> = (
  props,
) => {
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
      <div class={clsx('font-bold text-center')}>{props.blessing.name}</div>
      <div
        class={clsx('text-sm text-center', 'h-7rem of-y-auto')}
        innerHTML={upgraded() ? props.blessing.desc[1] : props.blessing.desc[0]}
      />
      <div
        class={clsx(
          'text-0.75rem text-center',
          'bg-foreground',
          upgraded() ? 'text-yellow-600 shadow-sm shadow-yellow-500' : 'text-background',
        )}
        onClick={() => setUpgrade((v) => !v)}
      >
        {upgraded() ? '已强化' : '未强化'}
      </div>
    </div>
  )
}

export default BlessingCard
