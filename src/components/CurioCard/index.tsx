import { type Curio, CurioType } from '@/libs/du/types'
import clsx from 'clsx'
import type { Component } from 'solid-js'

import '@/styles/scroll-bar.css'
import '@/styles/blessing-bg.css'
import '@/styles/scrollable-tags.css'
import '@/styles/eq-shadow.css'

const CURIO_BG_MAP = {
  [CurioType.Blue]: 'blessing-blue',
  [CurioType.Gray]: 'blessing-gray',
  [CurioType.Gold]: 'blessing-gold',
  [CurioType.Weighted]: 'blessing-ultimate',
  [CurioType.Negative]: 'blessing-negative',
}

const CurioCard: Component<{
  curio: Curio
}> = (props) => {
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
          CURIO_BG_MAP[props.curio.Type],
          'h-[100px]',
        )}
      >
        <img
          src={`/curio/${props.curio.Icon}.webp`}
          alt={props.curio.Name}
          class={clsx('w-60%', `${CURIO_BG_MAP[props.curio.Type]}-img`)}
          loading="lazy"
        />
      </div>
      <div
        class={clsx('font-bold text-center', 'whitespace-nowrap', 'truncate')}
        title={props.curio.Name}
      >
        {props.curio.Name}
      </div>
      <div
        class={clsx('text-sm text-center', 'h-7rem of-y-auto')}
        innerHTML={props.curio.Desc}
      />
    </div>
  )
}

export default CurioCard
