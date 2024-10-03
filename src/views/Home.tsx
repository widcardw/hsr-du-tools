import EquationCard from '@/components/du/EquationCard'
import { CarbonCloseLarge } from '@/components/icons/CarbonCloseIcon'
import { Button } from '@/components/ui/button'
import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from '@/components/ui/checkbox'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
} from '@/components/ui/number-field'

import { ToggleButton } from '@/components/ui/toggle'
import { GAIN_MAP, type GainType, PATH_MAP } from '@/libs/du/constants'
import { EQUATIONS } from '@/libs/du/equations'
import { BlessingEquationEr, type RelatedEquation } from '@/libs/du/types'
import type { DialogTriggerProps } from '@kobalte/core/dialog'
import type { DropdownMenuSubTriggerProps } from '@kobalte/core/dropdown-menu'
import clsx from 'clsx'
import { type Component, For, Show, createMemo, createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'

import '@/components/du/blessing-bg.css'

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

const Home: Component = () => {
  const MIXED_EQUATIONS = EQUATIONS.filter(
    (i) => i.er !== BlessingEquationEr.Critical,
  )
  const [selectedGains, setSelectedGains] = createSignal<GainType[]>([])
  const [interCnt, setInterCnt] = createSignal(1)
  const [dlgOpen, setDlgOpen] = createSignal(false)
  /** 方程等级过滤 */
  const [erFilter, setErFilter] = createStore<{
    [key in BlessingEquationEr]?: boolean
  }>({
    [BlessingEquationEr.Gold]: true,
    [BlessingEquationEr.Purple]: true,
    [BlessingEquationEr.Blue]: true,
  })

  const allGains = Object.keys(GAIN_MAP)
    .slice(1)
    .map((i) => Number(i) as GainType)

  const [tempAddGains, setTempAddGains] = createSignal<GainType[]>([])
  const tempGainChange = (gain: GainType, v: boolean) => {
    v
      ? setTempAddGains((p) => [...p, gain])
      : setTempAddGains((p) => p.filter((i) => i !== gain))
  }

  const pushTempGains = () => {
    setSelectedGains(tempAddGains())
  }

  const relatedEquations = createMemo<RelatedEquation[]>(() => {
    if (selectedGains().length === 0)
      return MIXED_EQUATIONS.filter((i) => {
        return erFilter[i.er]
      })
    const sg = selectedGains()
    const filteredEquations: RelatedEquation[] = []
    for (const eq of MIXED_EQUATIONS) {
      const intersection = eq.rel.filter((g) => sg.includes(g))
      if (intersection.length >= interCnt()) {
        filteredEquations.push({
          ...eq,
          intersection,
        })
      }
    }
    return filteredEquations
      .filter((i) => {
        console.log(i.name, i.er, erFilter[i.er])
        return erFilter[i.er]
      })
      .sort((a, b) => {
        const i = (b.intersection?.length || 0) - (a.intersection?.length || 0)
        if (i !== 0) return i
        return b.er - a.er
      })
  })

  const onQueriedTagClick = (gain: GainType, v: boolean) => {
    console.log(GAIN_MAP[gain][1], v)
    v
      ? setSelectedGains((p) => [...p, gain])
      : setSelectedGains((p) => p.filter((i) => i !== gain))
  }

  return (
    <div class="max-w-1200px mx-a space-y-2">
      <div class="text-2xl text-center font-bold">搜索</div>
      {/* 搜索按钮 */}
      <div class="grid grid-cols-3 gap-2 justify-center">
        {/* 标签选择对话框 */}
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
        {/* 关键字数量 */}
        <NumberField
          defaultValue={interCnt()}
          onChange={(e) => setInterCnt(Number(e))}
          minValue={1}
          maxValue={5}
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
        {/* 清空 */}
        <Button variant="destructive" onClick={() => setSelectedGains([])}>
          清空
        </Button>
        {/* 方程等级过滤 */}
        <ToggleButton
          class={clsx(
            'text-foreground',
            'bg-secondary',
            'data-[pressed]:blessing-gold',
          )}
          pressed={erFilter[BlessingEquationEr.Gold]}
          onChange={(v) => setErFilter(BlessingEquationEr.Gold, v)}
        >
          金色方程
        </ToggleButton>
        <ToggleButton
          class={clsx(
            'text-foreground',
            'bg-secondary',
            'data-[pressed]:blessing-purple',
          )}
          pressed={erFilter[BlessingEquationEr.Purple]}
          onChange={(v) => setErFilter(BlessingEquationEr.Purple, v)}
        >
          紫色方程
        </ToggleButton>
        <ToggleButton
          class={clsx(
            'text-foreground',
            'bg-secondary',
            'data-[pressed]:blessing-blue',
          )}
          pressed={erFilter[BlessingEquationEr.Blue]}
          onChange={(v) => setErFilter(BlessingEquationEr.Blue, v)}
        >
          蓝色方程
        </ToggleButton>
      </div>
      {/* 所选的tag */}
      <div>
        <For each={selectedGains()}>
          {(gain) => (
            <Button
              variant="default"
              class="inline-flex items-center gap-1 whitespace-nowrap mr-2 mb-2"
            >
              <span>{GAIN_MAP[gain][1]}</span>
              <CarbonCloseLarge
                class="cursor-pointer inline"
                onClick={() =>
                  setSelectedGains((p) => p.filter((i) => i !== gain))
                }
              />
            </Button>
          )}
        </For>
      </div>

      {/* 搜索到的方程 */}
      <Show
        when={relatedEquations().length > 0}
        fallback={<div class="text-center py-4rem text-xl">暂无数据</div>}
      >
        <div class="text-2xl font-bold text-center my-4">方程</div>
        <div
          class={clsx(
            'grid',
            'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
            'gap-2',
          )}
        >
          <For each={relatedEquations()}>
            {(equation) => (
              <div>
                <EquationCard
                  equation={equation}
                  hilitedTag={equation.intersection}
                  onTagClick={onQueriedTagClick}
                />
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}

export default Home
