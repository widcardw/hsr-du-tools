import EquationCard from '@/components/du/EquationCard'
import EquationCategory from '@/components/du/EquationCategory'
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
import { TextField, TextFieldRoot } from '@/components/ui/textfield'
import { GAIN_MAP, type GainType, PATH_MAP } from '@/libs/du/constants'
import { EQUATIONS } from '@/libs/du/equations'
import clsx from 'clsx'
import { type Component, For, Show, createMemo, createSignal } from 'solid-js'

const GainSearchArea: Component<{
  gains: GainType[]
  onAdd: (gain: GainType) => void
  onDelete: (gain: GainType) => void
  onClear: () => void
}> = (props) => {
  const [inputValue, setInputValue] = createSignal('')
  return (
    <>
      <div class="flex">
        <Command value={inputValue()} onValueChange={setInputValue}>
          <CommandInput placeholder="搜索标签" />
          <CommandList>
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
        <Button class="w-6rem" variant="secondary" onClick={props.onClear}>
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
  const relatedEquations = createMemo(() => {
    if (selectedGains().length === 0) return []
    const selectedSet = new Set(selectedGains())
    return EQUATIONS.map((i) => ({
      ...i,
      intersection: i.rel.intersection(selectedSet),
    }))
      .filter((i) => i.intersection.size > 0)
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
        onAdd={(gain) => setSelectedGains([...selectedGains(), gain])}
        onDelete={(gain) =>
          setSelectedGains(selectedGains().filter((g) => g !== gain))
        }
        onClear={() => setSelectedGains([])}
      />
      <Show
        when={relatedEquations().length > 0}
        fallback={<div class="text-center">暂无数据</div>}
      >
        <div class="max-w-1200px mx-auto">
          <div class="text-2xl font-bold text-center my-4">
            {PATH_MAP[relatedEquations()[0].path]}
          </div>
          <div class={clsx('grid', 'grid-cols-3 md:grid-cols-4', 'gap-2')}>
            <For each={relatedEquations()}>
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
      </Show>
    </div>
  )
}

export default Home
