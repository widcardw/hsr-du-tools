import { CURIO_TYPE_TO_DESC } from '@/libs/du/curio-utils'
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
        {CURIO_TYPE_TO_DESC[props.type]}
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
