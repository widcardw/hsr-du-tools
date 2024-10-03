import BlessingCategory from '@/components/du/BlessingCategory'
import { ToggleButton } from '@/components/ui/toggle'
import { BLESSINGS } from '@/libs/du/blessings'
import { sortAndSplitBlessings } from '@/libs/search/sort'
import { type Component, For, createSignal } from 'solid-js'

const BlessingView: Component = () => {
  const [up, setUp] = createSignal(false)
  return (
    <div class="text-center">
      <ToggleButton class="text-foreground" pressed={up()} onChange={setUp}>
        强化所有祝福
      </ToggleButton>
      <For each={sortAndSplitBlessings(BLESSINGS)}>
        {(it) => <BlessingCategory blessings={it} up={up()} />}
      </For>
    </div>
  )
}

export default BlessingView
