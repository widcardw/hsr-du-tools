import type { Blessing, BlessingEquation } from '../du/types'

function sortAllBlessings(blessings: Blessing[]) {
  return blessings.sort((a, b) => {
    const pathCompare = a.Path - b.Path
    if (pathCompare !== 0) return pathCompare

    return b.Rarity - a.Rarity
  })
}

function sortAndSplitBlessings(blessings: Blessing[]) {
  const sorted = sortAllBlessings(blessings)
  const slices: Blessing[][] = []
  let cachedPath = sorted[0].Path
  let start = 0
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i].Path !== cachedPath) {
      slices.push(sorted.slice(start, i))
      start = i
      cachedPath = sorted[i].Path
    }
  }
  // add last slice
  slices.push(sorted.slice(start, sorted.length))
  return slices
}

function sortBlessingsByRarity(blessings: Blessing[]) {
  return blessings.sort((a, b) => {
    return b.Rarity - a.Rarity
  })
}

function sortAllEquations(equations: BlessingEquation[]) {
  return equations.sort((a, b) => {
    const pathCompare = a.Path - b.Path
    if (pathCompare !== 0) return pathCompare

    return b.er - a.er
  })
}

function sortAndSplitEquations(equations: BlessingEquation[]) {
  const sorted = sortAllEquations(equations)
  const slices: BlessingEquation[][] = []
  let cachedPath = sorted[0].Path
  let start = 0
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i].Path !== cachedPath) {
      slices.push(sorted.slice(start, i))
      start = i
      cachedPath = sorted[i].Path
    }
  }
  slices.push(sorted.slice(start, sorted.length))
  return slices
}

function sortEquationsByEr(equations: BlessingEquation[]) {
  return equations.sort((a, b) => {
    return b.er - a.er
  })
}

export {
  sortAllBlessings,
  sortBlessingsByRarity,
  sortAndSplitBlessings,
  sortAllEquations,
  sortEquationsByEr,
  sortAndSplitEquations,
}
