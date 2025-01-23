import { type GainType, PATH_MAP, type Side } from '@/libs/du/constants'
import type { BlessingEquation } from '@/libs/du/types'
import clsx from 'clsx'
import { type Component, For, Show } from 'solid-js'
import EquationCard from '../EquationCard'

const EquationCategory: Component<{
  equations: BlessingEquation[]
  withTitle?: boolean
  gain_map: Record<GainType, [Side, string, string]>
}> = (props) => {
  return (
    <Show
      when={props.equations.length > 0}
      fallback={<div class="text-center">暂无数据</div>}
    >
      <div class="max-w-1200px mx-auto">
        <Show when={props.withTitle !== false}>
          <div class="text-2xl font-bold text-center my-4">
            {PATH_MAP[props.equations[0].path]}
          </div>
        </Show>
        <div
          class={clsx(
            'grid',
            'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
            'gap-2',
          )}
        >
          <For each={props.equations}>
            {(equation) => (
              <EquationCard equation={equation} gain_map={props.gain_map} />
            )}
          </For>
        </div>
      </div>
    </Show>
  )
}

export default EquationCategory
