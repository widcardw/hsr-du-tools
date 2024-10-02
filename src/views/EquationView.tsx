import EquationCategory from '@/components/du/EquationCategory'
import { EQUATIONS } from '@/libs/du/equations'
import { sortAndSplitEquations } from '@/libs/search/sort'
import { For, type Component } from 'solid-js'

const EquationView: Component = () => {
  return (
    <For each={sortAndSplitEquations(EQUATIONS)}>
      {(it) => <EquationCategory equations={it} />}
    </For>
  )
}

export default EquationView
