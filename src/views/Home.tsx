import EquationCard from '@/components/du/EquationCard'
import { CarbonCloseLarge } from '@/components/icons/CarbonCloseIcon'
import { Button } from '@/components/ui/button'

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
} from '@/components/ui/number-field'

import { ToggleButton } from '@/components/ui/toggle'
import { GAIN_MAP, type GainType, PATH_MAP } from '@/libs/du/constants'
import { EQUATIONS } from '@/libs/du/equations'
import {
  BlessingEquationEr,
  BlessingRarity,
  type RelatedBlessing,
  type RelatedEquation,
} from '@/libs/du/types'
import type { DialogTriggerProps } from '@kobalte/core/dialog'
import type { DropdownMenuSubTriggerProps } from '@kobalte/core/dropdown-menu'
import clsx from 'clsx'
import {
  type Component,
  For,
  Show,
  createEffect,
  createMemo,
  createSignal,
  on,
} from 'solid-js'
import { createStore } from 'solid-js/store'

import '@/components/du/blessing-bg.css'
import BlessingCard from '@/components/du/BlessingCard'
import { SORTED_BLESSINGS } from '@/libs/du/blessings'
import { makePersisted } from '@solid-primitives/storage'

const allGains = Object.keys(GAIN_MAP).map((i) => Number(i) as GainType)

/** 方程等级过滤 */
const [erFilter, setErFilter] = makePersisted(
  createStore<{
    [key in BlessingEquationEr]?: boolean
  }>({
    [BlessingEquationEr.Gold]: true,
    [BlessingEquationEr.Purple]: true,
    [BlessingEquationEr.Blue]: true,
  }),
  { name: 'erFilter' },
)

const [blRarityFilter, setBlRarityFilter] = makePersisted(
  createStore<{
    [key in BlessingRarity]?: boolean
  }>({
    [BlessingRarity.Gold]: true,
    [BlessingRarity.Blue]: true,
    [BlessingRarity.Gray]: true,
  }),
  { name: 'blRarityFilter' },
)

const [enableEqSearch, setEnableEqSearch] = makePersisted(createSignal(true), {
  name: 'enableEqSearch',
})
const [enableBlSearch, setEnableBlSearch] = makePersisted(createSignal(false), {
  name: 'enableBlSearch',
})

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

const TagIntersectionCntField: Component<{
  initCnt: number
  onChange: (cnt: number) => void
}> = (props) => {
  return (
    <NumberField
      defaultValue={props.initCnt}
      onChange={(e) => props.onChange(Number(e))}
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
  )
}

const eqErClassMap: Record<BlessingEquationEr, [string, string]> = {
  [BlessingEquationEr.Gold]: ['blessing-gold', '金色方程'],
  [BlessingEquationEr.Purple]: ['blessing-purple', '紫色方程'],
  [BlessingEquationEr.Blue]: ['blessing-blue', '蓝色方程'],
  [BlessingEquationEr.Critical]: ['blessing-ultimate', '临界方程'],
}

const blRarityClassMap: Record<BlessingRarity, [string, string]> = {
  [BlessingRarity.Gold]: ['blessing-gold', '金色祝福'],
  [BlessingRarity.Blue]: ['blessing-blue', '蓝色祝福'],
  [BlessingRarity.Gray]: ['blessing-gray', '白色祝福'],
  [BlessingRarity.Equation]: ['blessing-ultimate', '方程'],
}

const EquationErEnableToggle: Component<{
  init: boolean
  level: BlessingEquationEr
  enabled?: boolean
  onChange: (v: boolean) => void
}> = (props) => {
  return (
    <ToggleButton
      class={clsx(
        'text-foreground',
        'bg-secondary',
        `data-[pressed]:${eqErClassMap[props.level][0]}`,
      )}
      pressed={erFilter[props.level]}
      onChange={(v) => props.onChange(v)}
      disabled={props.enabled === false}
    >
      {eqErClassMap[props.level][1]}
    </ToggleButton>
  )
}

const BlessingRarityEnableToggle: Component<{
  init: boolean
  level: BlessingRarity
  enabled?: boolean
  onChange: (v: boolean) => void
}> = (props) => {
  return (
    <ToggleButton
      class={clsx(
        'text-foreground',
        'bg-secondary',
        `data-[pressed]:${blRarityClassMap[props.level][0]}`,
      )}
      pressed={blRarityFilter[props.level]}
      onChange={(v) => props.onChange(v)}
      disabled={props.enabled === false}
    >
      {blRarityClassMap[props.level][1]}
    </ToggleButton>
  )
}

const LAYOUT = {
  0: '松散',
  1: '紧凑',
}

const MustContainDialog: Component<{
  initGains: GainType[]
  mustContainGains: GainType[]
  onChange: (gains: GainType[]) => void
}> = (props) => {
  const [dlgOpen, setDlgOpen] = createSignal(false)
  const [selectedGains, setSelectedGains] = createSignal<GainType[]>(
    props.initGains,
  )

  const [mustContainGains, setMustContainGains] = createSignal<GainType[]>(
    props.mustContainGains,
  )

  createEffect(
    on(
      () => props.initGains,
      (v) => {
        setSelectedGains(v)
        // buff 变少了但是还在「必须包含」中，那么从「必须包含」中将这个 buff 去掉
        if (mustContainGains()?.some((i) => !v.includes(i))) {
          setMustContainGains((prev) => prev.filter((i) => v.includes(i)))
          // 这里应该不会造成无限更新
          props.onChange(mustContainGains())
        }
      },
    ),
  )

  createEffect(
    on(
      () => props.mustContainGains,
      (v) => setMustContainGains(v),
    ),
  )

  const tempAddMustContainGainChange = (gain: GainType, v: boolean) => {
    if (v) setMustContainGains((prev) => [...prev, gain])
    else setMustContainGains((prev) => prev.filter((i) => i !== gain))
  }

  const pushTempMustContainGains = () => {
    props.onChange(mustContainGains())
  }

  return (
    <Dialog
      open={dlgOpen()}
      onOpenChange={(v) => {
        setDlgOpen(v)
        if (!v) pushTempMustContainGains()
      }}
    >
      <DialogTrigger
        as={(inner_props: DialogTriggerProps) => (
          <Button
            variant="secondary"
            class={clsx(
              mustContainGains() &&
                mustContainGains().length > 0 &&
                'blessing-desc',
            )}
            {...inner_props}
          >
            必须包含
          </Button>
        )}
      />
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>标签列表</DialogTitle>
          <DialogDescription>选择必须包含的标签</DialogDescription>
        </DialogHeader>
        <Show
          when={selectedGains().length > 0}
          fallback={<div class="max-h-400px">尚未选择任何 buff，请先通过“选择标签”或点击方程和祝福下的按钮已添加 buff</div>}
        >
          <div class="max-h-400px of-y-auto">
            <For each={selectedGains()}>
              {(gain) => (
                <GainButton
                  pressed={mustContainGains().includes(gain)}
                  gain={gain}
                  onChange={(v) => tempAddMustContainGainChange(gain, v)}
                />
              )}
            </For>
          </div>
        </Show>
        <DialogFooter>
          <Button
            onClick={() => {
              pushTempMustContainGains()
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

const Home: Component = () => {
  const MIXED_EQUATIONS = EQUATIONS.filter(
    (i) => i.er !== BlessingEquationEr.Critical,
  )
  const [selectedGains, setSelectedGains] = createSignal<GainType[]>([])
  const [interCnt, setInterCnt] = createSignal(1)
  const [mustContainGains, setMustContainGains] = createSignal<GainType[]>([])
  const [layout, setLayout] = makePersisted(
    createSignal<keyof typeof LAYOUT>(0),
    {
      name: 'layout',
    },
  )

  const relatedEquations = createMemo<RelatedEquation[]>(() => {
    if (!enableEqSearch()) return []
    if (selectedGains().length === 0)
      return MIXED_EQUATIONS.filter((i) => erFilter[i.er])
    const sg = selectedGains()
    const mg = mustContainGains()
    const filteredEquations: RelatedEquation[] = []
    for (const eq of MIXED_EQUATIONS) {
      const intersection = eq.rel.filter((g) => {
        if (mg.length > 0 && mg.some((j) => !eq.rel.includes(j))) return false
        return sg.includes(g)
      })
      if (intersection.length >= interCnt()) {
        filteredEquations.push({
          ...eq,
          intersection,
        })
      }
    }
    return filteredEquations
      .filter((i) => erFilter[i.er])
      .sort((a, b) => {
        const i = (b.intersection?.length || 0) - (a.intersection?.length || 0)
        if (i !== 0) return i
        return b.er - a.er
      })
  })

  const relatedBlessings = createMemo<RelatedBlessing[]>(() => {
    if (!enableBlSearch()) return []
    if (selectedGains().length === 0)
      return SORTED_BLESSINGS.filter((i) => blRarityFilter[i.rarity])

    const sg = selectedGains()
    const mg = mustContainGains()
    const filteredBlessings: RelatedBlessing[] = []
    for (const bl of SORTED_BLESSINGS) {
      const intersection = bl.rel.filter((g) => {
        if (mg.length > 0 && mg.some((j) => !bl.rel.includes(j))) return false
        return sg.includes(g)
      })
      if (intersection.length >= interCnt()) {
        filteredBlessings.push({
          ...bl,
          intersection,
        })
      }
    }
    return filteredBlessings
  })

  const onQueriedTagClick = (gain: GainType, v: boolean) => {
    v
      ? setSelectedGains((p) => [...p, gain])
      : setSelectedGains((p) => p.filter((i) => i !== gain))
  }

  const [eqNoDesc, setEqNoDesc] = makePersisted(createSignal(false), {
    name: 'eqNoDesc',
  })
  const [blNoDesc, setBlNoDesc] = makePersisted(createSignal(false), {
    name: 'blNoDesc',
  })

  return (
    <>
      <div class="text-2xl text-center font-bold">搜索</div>
      {/* 搜索按钮 */}
      <div class="grid grid-cols-3 md:grid-cols-5 gap-2 justify-center">
        {/* 标签选择对话框 */}
        <TagSelectDialog
          initGains={selectedGains()}
          onChange={setSelectedGains}
        />
        {/* 关键字数量 */}
        <TagIntersectionCntField initCnt={interCnt()} onChange={setInterCnt} />

        <MustContainDialog
          initGains={selectedGains()}
          mustContainGains={mustContainGains()}
          onChange={setMustContainGains}
        />

        {/* 清空 */}
        <Button
          variant="destructive"
          onClick={() => {
            setSelectedGains([])
            setMustContainGains([])
          }}
        >
          清空
        </Button>
        {/* 布局 */}
        <ToggleButton
          class={clsx(
            'text-foreground',
            'bg-secondary',
            'data-[pressed]:bg-secondary',
          )}
          pressed={layout() === 1}
          onChange={() => setLayout((p) => (p === 1 ? 0 : 1))}
        >
          {LAYOUT[layout()]}
        </ToggleButton>

        {/* 方程等级过滤 */}
        <ToggleButton
          class={clsx(
            'text-foreground',
            'bg-secondary',
            'data-[pressed]:blessing-ultimate',
          )}
          pressed={enableEqSearch()}
          onChange={setEnableEqSearch}
        >
          方程搜索
        </ToggleButton>
        <EquationErEnableToggle
          init={erFilter[BlessingEquationEr.Gold]!}
          level={BlessingEquationEr.Gold}
          onChange={(v) => setErFilter(BlessingEquationEr.Gold, v)}
        />
        <EquationErEnableToggle
          init={erFilter[BlessingEquationEr.Purple]!}
          level={BlessingEquationEr.Purple}
          onChange={(v) => setErFilter(BlessingEquationEr.Purple, v)}
        />
        <EquationErEnableToggle
          init={erFilter[BlessingEquationEr.Blue]!}
          level={BlessingEquationEr.Blue}
          onChange={(v) => setErFilter(BlessingEquationEr.Blue, v)}
        />
        <ToggleButton
          class={clsx(
            'text-foreground',
            'bg-secondary',
            'data-[pressed]:blessing-desc',
          )}
          pressed={!eqNoDesc()}
          onChange={(v) => setEqNoDesc(!v)}
        >
          方程描述
        </ToggleButton>

        <ToggleButton
          class={clsx(
            'text-foreground',
            'bg-secondary',
            'data-[pressed]:blessing-ultimate',
          )}
          pressed={enableBlSearch()}
          onChange={setEnableBlSearch}
        >
          祝福搜索
        </ToggleButton>
        <BlessingRarityEnableToggle
          init={blRarityFilter[BlessingRarity.Gold]!}
          level={BlessingRarity.Gold}
          onChange={(v) => setBlRarityFilter(BlessingRarity.Gold, v)}
        />
        <BlessingRarityEnableToggle
          init={blRarityFilter[BlessingRarity.Blue]!}
          level={BlessingRarity.Blue}
          onChange={(v) => setBlRarityFilter(BlessingRarity.Blue, v)}
        />
        <BlessingRarityEnableToggle
          init={blRarityFilter[BlessingRarity.Gray]!}
          level={BlessingRarity.Gray}
          onChange={(v) => setBlRarityFilter(BlessingRarity.Gray, v)}
        />
        <ToggleButton
          class={clsx(
            'text-foreground',
            'bg-secondary',
            'data-[pressed]:blessing-desc',
          )}
          pressed={!blNoDesc()}
          onChange={(v) => setBlNoDesc(!v)}
        >
          祝福描述
        </ToggleButton>
      </div>
      {/* 所选的tag */}
      <div>
        <For each={selectedGains()}>
          {(gain) => (
            <Button
              variant={
                mustContainGains().includes(gain) ? 'default' : 'secondary'
              }
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
      <Show when={enableEqSearch()}>
        <Show
          when={relatedEquations().length > 0}
          fallback={
            <div class="text-center py-4rem text-xl">无满足条件的方程</div>
          }
        >
          <div class="text-2xl font-bold text-center my-4">方程</div>
          <div
            class={clsx(
              'grid',
              layout() === 0
                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
                : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6',
              'gap-2',
            )}
          >
            <For each={relatedEquations()}>
              {(equation) => (
                <div>
                  <EquationCard
                    equation={equation}
                    hilitedTag={equation.intersection}
                    noDesc={eqNoDesc()}
                    onTagClick={onQueriedTagClick}
                  />
                </div>
              )}
            </For>
          </div>
        </Show>
      </Show>

      {/* 搜索到的祝福 */}
      <Show when={enableBlSearch()}>
        <Show
          when={relatedBlessings().length > 0}
          fallback={
            <div class="text-center py-4rem text-xl">无满足条件的祝福</div>
          }
        >
          <div class="text-2xl font-bold text-center my-4">祝福</div>
          <div
            class={clsx(
              'grid',
              layout() === 0
                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
                : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
              'gap-2',
            )}
          >
            <For each={relatedBlessings()}>
              {(blessing) => (
                <BlessingCard
                  blessing={blessing}
                  hilitedTag={blessing.intersection}
                  noDesc={blNoDesc()}
                  onTagClick={onQueriedTagClick}
                />
              )}
            </For>
          </div>
        </Show>
      </Show>
    </>
  )
}

export default Home
