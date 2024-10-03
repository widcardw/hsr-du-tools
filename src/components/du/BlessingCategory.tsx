import { PATH_MAP } from '@/libs/du/constants'
import type { Blessing } from '@/libs/du/types'
import clsx from 'clsx'
import { type Component, For, createEffect, createSignal, on } from 'solid-js'
import BlessingCard from './BlessingCard'

const BlessingCategory: Component<{ blessings: Blessing[], up?: boolean }> = (props) => {
  const [up, setUp] = createSignal(props.up ?? false)
  createEffect(on(
    () => props.up,
    (v) => {
      setUp(v || false)
    }
  ))
  return (
    <div class="max-w-1200px mx-auto">
      <div class="text-2xl font-bold text-center my-4">{PATH_MAP[props.blessings[0].path]}</div>
      <div class={clsx('grid', 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6', 'gap-2')}>
        <For each={props.blessings}>
          {(blessing) => <BlessingCard blessing={blessing} up={up()} />}
        </For>
      </div>
    </div>
  )
}

export default BlessingCategory
