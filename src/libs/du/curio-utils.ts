import { CurioType, type Curio } from './types'

const curio_type_to_desc = {
  [CurioType.Gray]: '一星奇物',
  [CurioType.Blue]: '二星奇物',
  [CurioType.Gold]: '三星奇物',
  [CurioType.Weighted]: '加权奇物',
  [CurioType.Negative]: '负面奇物',
}

function partitionAllCurios(curios: Curio[]): Curio[][] {
  const res: Record<CurioType, Curio[]> = {
    [CurioType.Weighted]: [],
    [CurioType.Gold]: [],
    [CurioType.Blue]: [],
    [CurioType.Gray]: [],
    [CurioType.Negative]: [],
  }

  for (const curio of curios) {
    res[curio.type].push(curio)
  }

  return [
    res[CurioType.Weighted],
    res[CurioType.Gold],
    res[CurioType.Blue],
    res[CurioType.Gray],
    res[CurioType.Negative],
  ]
}

export { curio_type_to_desc as CURIO_TYPE_TO_DESC, partitionAllCurios }
