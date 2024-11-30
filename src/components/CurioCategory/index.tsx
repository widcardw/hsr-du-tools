import { curio_type_to_desc } from '@/libs/du/curios'
import type { Curio, CurioType } from '@/libs/du/types'
import clsx from 'clsx'
import { For, type Component } from 'solid-js'
import CurioCard from '../CurioCard'

const CurioCategory: Component<{
  type: CurioType
  curios: Curio[]
}> = (props) => {
  return (
    <div class="my-6">
      <div class="text-2xl font-bold text-center my-4">
        {curio_type_to_desc[props.type]}
      </div>
      <div
        class={clsx(
          'grid',
          'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6',
          'gap-2',
        )}
      >
        <For each={props.curios}>
          {(blessing) => <CurioCard curio={blessing} />}
        </For>
      </div>
    </div>
  )
}

export default CurioCategory
