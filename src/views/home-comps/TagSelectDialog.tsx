import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Dialog } from '@/components/ui/dialog'
import type { GainType } from '@/libs/du/constants'
import type { DialogTriggerProps } from '@kobalte/core/dialog'
import { type Component, For, createEffect, createSignal, on } from 'solid-js'
import { allGains } from './data'
import GainButton from './GainButton'

const TagSelectDialog: Component<{
  initGains: GainType[]
  onChange: (gains: GainType[]) => void
}> = (props) => {
  const [dlgOpen, setDlgOpen] = createSignal(false)
  const [selectedGains, setSelectedGains] = createSignal<GainType[]>(
    props.initGains,
  )

  createEffect(
    on(
      () => props.initGains,
      () => setSelectedGains(props.initGains),
    ),
  )

  const tempGainChange = (gain: GainType, v: boolean) => {
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
      open={dlgOpen()}
      onOpenChange={(v) => {
        setDlgOpen(v)
        if (!v) pushTempGains()
      }}
    >
      <DialogTrigger
        as={(inner_props: DialogTriggerProps) => (
          <Button variant="secondary" {...inner_props}>
            选择标签
          </Button>
        )}
      />
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>标签列表</DialogTitle>
        </DialogHeader>
        <div class="max-h-400px of-y-auto">
          <For each={allGains}>
            {(gain) => (
              <GainButton
                pressed={selectedGains().includes(gain)}
                gain={gain}
                onChange={(v) => tempGainChange(gain, v)}
              />
            )}
          </For>
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              pushTempGains()
              setDlgOpen(false)
            }}
          >
            确定
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TagSelectDialog
