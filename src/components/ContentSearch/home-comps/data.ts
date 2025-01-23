import { GAIN_MAP } from '@/pages/v2.7/data/constants'
import { BlessingEquationEr, BlessingRarity } from '@/libs/du/types'
import { makePersisted } from '@solid-primitives/storage'
import { createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'
import type { GainType } from '@/libs/du/constants'

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
  { name: 'du-erFilter' },
)

const [blRarityFilter, setBlRarityFilter] = makePersisted(
  createStore<{
    [key in BlessingRarity]?: boolean
  }>({
    [BlessingRarity.Gold]: true,
    [BlessingRarity.Blue]: true,
    [BlessingRarity.Gray]: true,
  }),
  { name: 'du-blRarityFilter' },
)

const [enableEqSearch, setEnableEqSearch] = makePersisted(createSignal(true), {
  name: 'du-enableEqSearch',
})
const [enableBlSearch, setEnableBlSearch] = makePersisted(createSignal(false), {
  name: 'du-enableBlSearch',
})

export {
  allGains,
  erFilter,
  setErFilter,
  blRarityFilter,
  setBlRarityFilter,
  enableEqSearch,
  setEnableEqSearch,
  enableBlSearch,
  setEnableBlSearch,
}
