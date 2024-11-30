import type { BlessingExtra, GainType, Path } from './constants'

enum BuffType {
  Blessing = 1,
  Equation = 2,
  Curio = 3,
}

/** 祝福类型 */
enum BlessingRarity {
  Equation = 4,
  Gold = 3,
  Blue = 2,
  Gray = 1,
}

enum BlessingEquationEr {
  Gold = 8,
  Purple = 6,
  Blue = 4,
  /** 临界方程 */
  Critical = 16,
}

enum CurioType {
  Gray = 1,
  Blue = 2,
  Gold = 3,
  Negative = 4,
  Weighted = 5,
}

interface Buff {
  type: BuffType
}

interface Blessing extends Buff {
  _id: number
  type: BuffType.Blessing
  /** 祝福等级 */
  rarity: BlessingRarity
  icon: string
  name: string
  /** 命途 */
  path: Path
  /** 祝福效果（强化前/强化后） */
  desc: [string, string]
  effects: Array<BlessingExtra>
  /** （手动）相关增益 */
  rel: GainType[]
}

interface BlessingEquation extends Buff {
  _id: number
  path: Path
  type: BuffType.Equation
  rarity: BlessingRarity
  icon?: string
  name: string
  desc: string
  effects: Array<BlessingExtra>
  /** （手动）相关增益 */
  rel: GainType[]
  /** 方程等级 */
  er: BlessingEquationEr
  /** 方程所需祝福数量 */
  need: {
    [k in Path]?: number
  }
}

type RelatedEquation = BlessingEquation & {
  intersection?: GainType[]
}

type RelatedBlessing = Blessing & {
  intersection?: GainType[]
}

interface Curio {
  _id: number
  name: string
  desc: string
  icon: string
  ver: string
  type: CurioType
}

export { BuffType, BlessingRarity, BlessingEquationEr, CurioType }

export type { BlessingEquation, Blessing, Buff, RelatedEquation, RelatedBlessing, Curio }
