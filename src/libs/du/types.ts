import type { BlessingExtra } from './constants'
import type { Path } from './constants'

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
  Type: BuffType
}

interface Blessing extends Buff {
  _id: number
  Type: BuffType.Blessing
  /** 祝福等级 */
  Rarity: BlessingRarity
  Icon: string
  Name: string
  /** 命途 */
  Path: Path
  /** 祝福效果（强化前/强化后） */
  Desc: [string, string]
  Effects: Array<number>
  /** （手动）相关增益 */
  rel: number[] // GainType[]
}

interface BlessingEquation extends Buff {
  _id: number
  Path: Path
  Type: BuffType.Equation
  Rarity: BlessingRarity
  Icon?: string
  Name: string
  Desc: string
  Effects: Array<number>
  /** （手动）相关增益 */
  rel: number[]
  /** 方程等级 */
  er: BlessingEquationEr
  /** 方程所需祝福数量 */
  Need: {
    [k in Path]?: number
  }
}

type RelatedEquation = BlessingEquation & {
  intersection?: number[]
}

type RelatedBlessing = Blessing & {
  intersection?: number[]
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

export type {
  BlessingEquation,
  Blessing,
  Buff,
  RelatedEquation,
  RelatedBlessing,
  Curio,
}
