import EquationCard from '@/components/du/EquationCard'
import EquationCategory from '@/components/du/EquationCategory'
import SearchEquationCategory, {
  type RelatedEquation,
} from '@/components/du/SearchEquationCategory'
import { CarbonCloseLarge } from '@/components/icons/CarbonCloseIcon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
  NumberFieldLabel,
} from '@/components/ui/number-field'
import {
  TextField,
  TextFieldLabel,
  TextFieldRoot,
} from '@/components/ui/textfield'
import { ToggleButton } from '@/components/ui/toggle'
import { GAIN_MAP, type GainType, PATH_MAP } from '@/libs/du/constants'
import { EQUATIONS } from '@/libs/du/equations'
import type { DialogTriggerProps } from '@kobalte/core/dialog'
import clsx from 'clsx'
import { type Component, For, Show, createMemo, createSignal } from 'solid-js'

const GainButton: Component<{
  gain: GainType
  pressed: boolean
  onChange: (v: boolean) => void
}> = (props) => {
  const [p, setP] = createSignal(props.pressed)
  return (
    <ToggleButton
      class="text-foreground whitespace-nowrap mb-2 mr-2"
      pressed={p()}
      onChange={(v) => {
        setP(v)
        props.onChange(v)
      }}
    >
      {GAIN_MAP[props.gain][1]}
    </ToggleButton>
  )
}

const GainSearchArea: Component<{
  gains: GainType[]
  interCnt: number
  onAdd: (gains: GainType[]) => void
  onDelete: (gain: GainType) => void
  onClear: () => void
  onInterCountChange: (cnt: number) => void
}> = (props) => {
  const allGains = Object.keys(GAIN_MAP)
    .slice(1)
    .map((i) => Number(i) as GainType)
  const [tempSelected, setTempSelected] = createSignal<GainType[]>(props.gains)
  const [dlgOpen, setDlgOpen] = createSignal(false)
  const tempAddInDlg = (v: boolean, gain: GainType) => {
    if (v) {
      setTempSelected((p) => [...p, gain])
    } else {
      setTempSelected((p) => p.filter((i) => i !== gain))
    }
  }
  const pushTempSelected = () => {
    props.onAdd(tempSelected())
    setTempSelected([])
    setDlgOpen(false)
  }
  return (
    <>
      <div class="flex gap-2 justify-center">
        <Dialog
          open={dlgOpen()}
          onOpenChange={(v) => {
            setDlgOpen(v)
            if (!v) props.onAdd(tempSelected())
          }}
        >
          <DialogTrigger
            as={(props: DialogTriggerProps) => (
              <Button variant="secondary" {...props}>
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
                    pressed={props.gains.includes(gain)}
                    gain={gain}
                    onChange={(v) => tempAddInDlg(v, gain)}
                  />
                )}
              </For>
            </div>
            <DialogFooter>
              <Button onClick={pushTempSelected}>确定</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div>
          <NumberField
            defaultValue={props.interCnt}
            onChange={(e) => props.onInterCountChange(Number(e))}
            minValue={1}
            maxValue={5}
            class="w-6rem"
          >
            <NumberFieldGroup>
              <NumberFieldDecrementTrigger
                class="bg-transparent text-foreground"
                aria-label="Decrement"
              />
              <NumberFieldInput class="bg-background text-foreground" />
              <NumberFieldIncrementTrigger
                class="bg-transparent text-foreground"
                aria-label="Increment"
              />
            </NumberFieldGroup>
          </NumberField>
        </div>
        <Button
          class="w-6rem"
          variant="secondary"
          onClick={() => {
            props.onInterCountChange(1)
            // 这里是思维有点乱了，必须加上
            setTempSelected([])
            props.onClear()
          }}
        >
          清空
        </Button>
      </div>
      <div>
        <For each={props.gains}>
          {(gain) => (
            <Button
              variant="default"
              class="inline-flex items-center gap-1 whitespace-nowrap mr-2 mb-2"
            >
              <span>{GAIN_MAP[gain][1]}</span>
              <CarbonCloseLarge
                class="cursor-pointer inline"
                onClick={() => {
                  props.onDelete(gain)
                  // 这里是思维有点乱了，必须加上
                  setTempSelected((p) => p.filter((i) => i !== gain))
                }}
              />
            </Button>
          )}
        </For>
      </div>
    </>
  )
}

const Home: Component = () => {
  const [selectedGains, setSelectedGains] = createSignal<GainType[]>([])
  const [interCnt, setInterCnt] = createSignal(1)
  const relatedEquations = createMemo(() => {
    if (selectedGains().length === 0) return []
    const sg = selectedGains()
    const filteredEquations: RelatedEquation[] = []
    for (const eq of EQUATIONS) {
      const intersection = eq.rel.filter((g) => sg.includes(g))
      if (intersection.length >= interCnt()) {
        filteredEquations.push({
          ...eq,
          intersection,
        })
      }
    }
    return filteredEquations.sort((a, b) => {
      const i = b.intersection.length - a.intersection.length
      if (i !== 0) return i
      return b.er - a.er
    })
  })
  return (
    <div class="max-w-1200px mx-a space-y-2">
      <div class="text-xl text-center">搜索</div>
      <GainSearchArea
        gains={selectedGains()}
        interCnt={interCnt()}
        onAdd={(gains) => setSelectedGains(gains)}
        onDelete={(gain) =>
          setSelectedGains(selectedGains().filter((g) => g !== gain))
        }
        onClear={() => setSelectedGains([])}
        onInterCountChange={(cnt) => setInterCnt(cnt)}
      />
      <Show
        when={relatedEquations().length > 0}
        fallback={<div class="text-center py-4rem text-xl">暂无数据</div>}
      >
        <SearchEquationCategory equations={relatedEquations()} />
      </Show>
    </div>
  )
}

export default Home
