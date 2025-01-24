import BlessingCategory from './index'

import { type Component, For, createSignal } from 'solid-js'
import ToggleButton from '@/components/ui/ToggleButton'
import type { Blessing } from '@/libs/du/types'
import type { GainMapType, Side } from '@/libs/du/constants'

const BlessingView: Component<{
  blessingCategory: Blessing[][]
  gain_map: GainMapType<number>
}> = (props) => {
  const [up, setUp] = createSignal(false)
  return (
    <>
      <ToggleButton value={up()} onChange={setUp} class="block mx-a">
        强化所有祝福
      </ToggleButton>
      <For each={props.blessingCategory}>
        {(it) => (
          <BlessingCategory
            blessings={it}
            up={up()}
            gain_map={props.gain_map}
          />
        )}
      </For>
    </>
  )
}

export default BlessingView
