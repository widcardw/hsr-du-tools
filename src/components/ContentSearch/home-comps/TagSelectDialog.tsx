import type { GainMapType, GainType, Side } from '@/libs/du/constants'
import { type Component, For, createEffect, createSignal, on } from 'solid-js'
// import { allGains } from './data'
import GainButton from './GainButton'
import { Dialog, DialogTrigger } from '@/components/ui/Dialog'

const TagSelectDialog: Component<{
  allGains: number[] // GainType[]
  gain_map: GainMapType<number>
  initGains: number[]
  onChange: (gains: number[]) => void
}> = (props) => {
  const [selectedGains, setSelectedGains] = createSignal<number[]>(
    props.initGains,
  )

  createEffect(
    on(
      () => props.initGains,
      () => setSelectedGains(props.initGains),
    ),
  )

  const tempGainChange = (gain: number, v: boolean) => {
    if (v) {
      setSelectedGains((gains) => [...gains, gain])
    } else {
      setSelectedGains((gains) => gains.filter((i) => i !== gain))
    }
  }
  const pushTempGains = () => {
    props.onChange(selectedGains())
  }
  return (
    <Dialog
      // open={dlgOpen()}
      class="sm:max-w-[425px]"
      trigger={<DialogTrigger>选择标签</DialogTrigger>}
      onOpenChange={(v) => {
        // setDlgOpen(v)
        if (!v) pushTempGains()
      }}
    >
      <h3 class="text-fg">标签列表</h3>
      <div class="max-h-400px of-y-auto">
        <For each={props.allGains}>
          {(gain) => (
            <GainButton
              pressed={selectedGains().includes(gain)}
              gain={gain}
              onChange={(v) => tempGainChange(gain, v)}
              gain_map={props.gain_map}
            />
          )}
        </For>
      </div>
      {/* <menu>
        <Button
          onClick={() => {
            pushTempGains()
            setDlgOpen(false)
          }}
        >
          确定
        </Button>
      </menu> */}
    </Dialog>
  )
}

export default TagSelectDialog
