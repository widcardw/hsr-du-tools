import BlessingCategory from '@/components/du/BlessingCategory'
import { BLESSINGS } from '@/libs/du/blessings'
import { sortAndSplitBlessings } from '@/libs/search/sort'
import { type Component, For } from 'solid-js'

const BlessingView: Component = () => {
  return (
    <For each={sortAndSplitBlessings(BLESSINGS)}>
      {(it) => <BlessingCategory blessings={it} />}
    </For>
  )
}

export default BlessingView
