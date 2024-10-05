import { BlessingEquationEr, BlessingRarity } from './types'

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

export { eqErClassMap, blRarityClassMap }
