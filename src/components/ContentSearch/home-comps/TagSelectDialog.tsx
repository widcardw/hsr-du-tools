import { Dialog, DialogTrigger } from '@/components/ui/Dialog'
import InputField from '@/components/ui/InputField'
import type { GainMapType } from '@/libs/du/constants'
import {
  type Component,
  For,
  createEffect,
  createMemo,
  createSignal,
  on,
} from 'solid-js'
// import { allGains } from './data'
import GainButton from './GainButton'

const TagSelectDialog: Component<{
  allGains: number[] // GainType[]
  gain_map: GainMapType<number>
  initGains: number[]
  onChange: (gains: number[]) => void
}> = (props) => {
  const [selectedGains, setSelectedGains] = createSignal<number[]>(
    props.initGains,
  )

  const [searchingValue, setSearchingValue] = createSignal('')

  let _debounce: number | null = null
  const onSearchingChange = (v: string) => {
    if (_debounce) clearTimeout(_debounce)
    _debounce = setTimeout(() => {
      setSearchingValue(v)
    }, 800)
  }

  const filteredAllGains = createMemo(() => {
    if (searchingValue().trim() === '') return props.allGains
    return props.allGains.filter((i) => {
      return props.gain_map[i][1].includes(searchingValue().trim())
    })
  })

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
      class="sm:max-w-[425px] w-[425px] h-[500px] space-y-2"
      trigger={<DialogTrigger>选择标签</DialogTrigger>}
      onOpenChange={(v) => {
        // setDlgOpen(v)
        if (!v) pushTempGains()
      }}
    >
      <h3 class="text-fg mb-0">标签列表</h3>
      <InputField
        defaultValue={searchingValue()}
        onChange={onSearchingChange}
        size="small"
        clearable
      />
      <div class="of-y-auto">
        <For each={filteredAllGains()}>
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
