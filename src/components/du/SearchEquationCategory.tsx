import type { RelatedEquation } from '@/libs/du/types'
import clsx from 'clsx'
import { type Component, For } from 'solid-js'
import EquationCard from './EquationCard'

const SearchEquationCategory: Component<{
  equations: RelatedEquation[]
}> = (props) => {
  return (
    <div class="max-w-1200px mx-auto">
      <div class="text-2xl font-bold text-center my-4">方程</div>
      <div class={clsx('grid', 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4', 'gap-2')}>
        <For each={props.equations}>
          {(equation) => (
            <div>
              <EquationCard
                equation={equation}
                hilitedTag={equation.intersection}
              />
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

export default SearchEquationCategory
