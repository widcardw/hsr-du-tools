import EquationCard from '@/components/du/EquationCard'
import EquationCategory from '@/components/du/EquationCategory'
import SearchEquationCategory from '@/components/du/SearchEquationCategory'
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
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
  NumberFieldLabel,
} from '@/components/ui/number-field'
import { TextField, TextFieldRoot } from '@/components/ui/textfield'
import { GAIN_MAP, type GainType, PATH_MAP } from '@/libs/du/constants'
import { EQUATIONS } from '@/libs/du/equations'
import clsx from 'clsx'
import { type Component, For, Show, createMemo, createSignal } from 'solid-js'

const GainSearchArea: Component<{
  gains: GainType[]
  interCnt: number
  onAdd: (gain: GainType) => void
  onDelete: (gain: GainType) => void
  onClear: () => void
  onInterCountChange: (cnt: number) => void
}> = (props) => {
  const [inputValue, setInputValue] = createSignal('')
  const [inputRef, setInputRef] = createSignal<HTMLInputElement | null>(null)
  return (
    <>
      <div class="flex gap-2">
        <Command
          value={inputValue()}
          onValueChange={(v) => setInputValue(v)}
          class="rounded"
        >
          <CommandInput placeholder="搜索标签" class="text-foreground" ref={r => setInputRef(r)} />
          <CommandList class="max-h-200px">
            <CommandEmpty>未找到结果</CommandEmpty>
            <CommandGroup>
              <For
                each={Array.from(
                  new Set(
                    Object.keys(GAIN_MAP)
                      .slice(1)
                      .map((i) => Number(i) as GainType),
                  ).difference(new Set(props.gains)),
                )}
              >
                {(gain) => (
                  <CommandItem onSelect={() => props.onAdd(gain)}>
                    {GAIN_MAP[gain][1]}
                  </CommandItem>
                )}
              </For>
            </CommandGroup>
          </CommandList>
        </Command>
        <div>
          <NumberField
            defaultValue={props.interCnt}
            onChange={(e) => props.onInterCountChange(Number(e))}
            minValue={1}
            maxValue={5}
            class="w-8rem"
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
            setInputValue('')
            const r = inputRef()
            if (r) r.value = '' // 这里不会触发 onValueChange
            props.onInterCountChange(1)
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
              variant="secondary"
              class="inline-flex items-center gap-1 whitespace-nowrap mr-2 mb-2"
            >
              <span>{GAIN_MAP[gain][1]}</span>
              <CarbonCloseLarge
                class="cursor-pointer inline"
                onClick={() => props.onDelete(gain)}
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
    const selectedSet = new Set(selectedGains())
    return EQUATIONS.map((i) => ({
      ...i,
      intersection: i.rel.intersection(selectedSet),
    }))
      .filter((i) => i.intersection.size >= interCnt())
      .sort((a, b) => {
        const insDiff = b.intersection.size - a.intersection.size
        if (insDiff !== 0) return insDiff
        const erDiff = b.er - a.er
        if (erDiff !== 0) return erDiff
        return 0
      })
  })
  return (
    <div class="max-w-1200px mx-a space-y-2">
      <GainSearchArea
        gains={selectedGains()}
        interCnt={interCnt()}
        onAdd={(gain) => setSelectedGains([...selectedGains(), gain])}
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
