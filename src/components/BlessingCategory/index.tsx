import { type GainMapType, PATH_MAP } from '@/libs/du/constants'
import type { Blessing } from '@/libs/du/types'
import clsx from 'clsx'
import {
  type Component,
  For,
  Show,
  createEffect,
  createSignal,
  on,
} from 'solid-js'
import BlessingCard from '../BlessingCard'

const BlessingCategory: Component<{
  blessings: Blessing[]
  up?: boolean
  showDesc?: boolean
  withTitle?: boolean
  gain_map: GainMapType<number>
}> = (props) => {
  const [up, setUp] = createSignal(props.up ?? false)
  const [showDesc, setShowDesc] = createSignal(props.showDesc ?? true)
  createEffect(
    on(
      () => props.up,
      (v) => setUp(v ?? false),
    ),
  )
  createEffect(
    on(
      () => props.showDesc,
      (v) => setShowDesc(v ?? true),
    ),
  )
  return (
    <div class="my-6">
      <Show when={props.withTitle !== false}>
        <div class="text-2xl font-bold text-center my-4">
          {PATH_MAP[props.blessings[0].Path]}
        </div>
      </Show>
      <div
        class={clsx(
          'grid',
          'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
          'gap-2',
        )}
      >
        <For each={props.blessings}>
          {(blessing) => (
            <BlessingCard
              blessing={blessing}
              up={up()}
              noDesc={!showDesc()}
              gain_map={props.gain_map}
            />
          )}
        </For>
      </div>
    </div>
  )
}

export default BlessingCategory
