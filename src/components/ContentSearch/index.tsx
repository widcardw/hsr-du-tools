import EquationCard from '@/components/EquationCard'
import Button from '@/components/ui/Button'

import ToggleButton from '@/components/ui/ToggleButton'
// import { GAIN_MAP } from '@/pages/v2.7/data/constants'
// import { EQUATIONS } from '@/pages/v2.7/data/equations'
import {
  type Blessing,
  type BlessingEquation,
  BlessingEquationEr,
  BlessingRarity,
  type RelatedBlessing,
  type RelatedEquation,
} from '@/libs/du/types'
import clsx from 'clsx'
import { type Component, For, Show, createMemo, createSignal } from 'solid-js'

import '@/styles/blessing-bg.css'
import BlessingCard from '@/components/BlessingCard'
import type { GainMapType } from '@/libs/du/constants'
// import { SORTED_BLESSINGS } from '@/pages/v2.7/data/blessings'
import { LAYOUT } from '@/libs/du/layout'
import { makePersisted } from '@solid-primitives/storage'
import BlessingRarityEnableToggle from './home-comps/BlessingRarityEnableToggle'
import EquationErEnableToggle from './home-comps/EquationErEnableToggle'
import MustContainDialog from './home-comps/MustContainDialog'
import TagIntersectionCntField from './home-comps/TagIntersectionCntField'
import TagSelectDialog from './home-comps/TagSelectDialog'
import {
  blRarityFilter,
  enableBlSearch,
  enableEqSearch,
  erFilter,
  setBlRarityFilter,
  setEnableBlSearch,
  setEnableEqSearch,
  setErFilter,
} from './home-comps/data'

const Home: Component<{
  gain_map: GainMapType<number>
  sorted_blessings: Blessing[]
  equations: BlessingEquation[]
}> = (props) => {
  const MIXED_EQUATIONS = props.equations.filter(
    (i) => i.er !== BlessingEquationEr.Critical,
  )
  const [selectedGains, setSelectedGains] = createSignal<number[]>([])
  const [interCnt, setInterCnt] = createSignal(1)
  const [mustContainGains, setMustContainGains] = createSignal<number[]>([])
  const [layout, setLayout] = makePersisted(
    createSignal<keyof typeof LAYOUT>(0),
    {
      name: 'du-layout',
    },
  )

  const allGains = Object.keys(props.gain_map).map((i) => Number(i) as number)

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
      return props.sorted_blessings.filter((i) => blRarityFilter[i.Rarity])

    const sg = selectedGains()
    const mg = mustContainGains()
    const filteredBlessings: RelatedBlessing[] = []
    for (const bl of props.sorted_blessings) {
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

  const onQueriedTagClick = (gain: number, v: boolean) => {
    if (v) setSelectedGains((p) => [...p, gain])
    else {
      setSelectedGains((p) => p.filter((i) => i !== gain))
      // 将 tag 取消时，检测这个值是否也在 mustContain 中，如果在，则需要删除
      if (mustContainGains().includes(gain))
        setMustContainGains((p) => p.filter((i) => i !== gain))
    }
  }

  const [eqNoDesc, setEqNoDesc] = makePersisted(createSignal(false), {
    name: 'du-eqNoDesc',
  })
  const [blNoDesc, setBlNoDesc] = makePersisted(createSignal(false), {
    name: 'du-blNoDesc',
  })

  return (
    <>
      <div class="text-2xl text-center font-bold mt-6">差分宇宙 模拟工具</div>
      {/* 搜索按钮 */}
      <div class="grid grid-cols-3 md:grid-cols-5 gap-2 justify-center my-4">
        {/* 标签选择对话框 */}
        <TagSelectDialog
          allGains={allGains}
          initGains={selectedGains()}
          onChange={setSelectedGains}
          gain_map={props.gain_map}
        />
        {/* 关键字数量 */}
        <TagIntersectionCntField initCnt={interCnt()} onChange={setInterCnt} />

        <MustContainDialog
          initGains={selectedGains()}
          mustContainGains={mustContainGains()}
          onChange={setMustContainGains}
          gain_map={props.gain_map}
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
            'text-fg',
            'bg-bg-secondary',
            'data-[pressed]:bg-bg-secondary',
          )}
          value={layout() === 1}
          onChange={() => setLayout((p) => (p === 1 ? 0 : 1))}
        >
          {LAYOUT[layout()]}
        </ToggleButton>

        {/* 方程等级过滤 */}
        <ToggleButton
          variant="unstyled"
          class={clsx(
            'text-fg',
            'bg-bg-secondary',
            'data-[pressed]:blessing-ultimate',
          )}
          value={enableEqSearch()}
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
          variant="unstyled"
          class={clsx(
            'text-fg',
            'bg-bg-secondary',
            'data-[pressed]:blessing-desc',
          )}
          value={!eqNoDesc()}
          onChange={(v) => setEqNoDesc(!v)}
        >
          方程描述
        </ToggleButton>

        <ToggleButton
          variant="unstyled"
          class={clsx(
            'text-fg',
            'bg-bg-secondary',
            'data-[pressed]:blessing-ultimate',
          )}
          value={enableBlSearch()}
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
          variant="unstyled"
          class={clsx(
            'text-fg',
            'bg-bg-secondary',
            'data-[pressed]:blessing-desc',
          )}
          value={!blNoDesc()}
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
              variant="secondary"
              class={clsx(
                'inline-flex items-center gap-1 whitespace-nowrap mr-2 mb-2',
                mustContainGains().includes(gain) && 'blessing-gray',
              )}
            >
              <img
                src={props.gain_map[gain][2]}
                alt=""
                width="20"
                height="20"
                loading="lazy"
              />
              <span>{props.gain_map[gain][1]}</span>
              <div
                class="cursor-pointer i-carbon-close"
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
                    gain_map={props.gain_map}
                  />
                </div>
              )}
            </For>
          </div>
        </Show>
      </Show>

      {/* 搜索到的祝福 */}
      <Show when={enableBlSearch()}>
        <Show when={relatedBlessings().length > 0}>
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
                  gain_map={props.gain_map}
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
