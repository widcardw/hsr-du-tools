import type { Blessing, BlessingEquation } from '../du/types'

function sortAllBlessings(blessings: Blessing[]) {
  return blessings.sort((a, b) => {
    const pathCompare = a.path - b.path
    if (pathCompare !== 0) return pathCompare

    return b.rarity - a.rarity
  })
}

function sortAndSplitBlessings(blessings: Blessing[]) {
  const sorted = sortAllBlessings(blessings)
  const slices: Blessing[][] = []
  let cachedPath = sorted[0].path
  let start = 0
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i].path !== cachedPath) {
      slices.push(sorted.slice(start, i))
      start = i
      cachedPath = sorted[i].path
    }
  }
  // add last slice
  slices.push(sorted.slice(start, sorted.length))
  return slices
}

function sortBlessingsByRarity(blessings: Blessing[]) {
  return blessings.sort((a, b) => {
    return b.rarity - a.rarity
  })
}

function sortAllEquations(equations: BlessingEquation[]) {
  return equations.sort((a, b) => {
    const pathCompare = a.path - b.path
    if (pathCompare !== 0) return pathCompare

    return b.er - a.er
  })
}

function sortAndSplitEquations(equations: BlessingEquation[]) {
  const sorted = sortAllEquations(equations)
  const slices: BlessingEquation[][] = []
  let cachedPath = sorted[0].path
  let start = 0
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i].path !== cachedPath) {
      slices.push(sorted.slice(start, i))
      start = i
      cachedPath = sorted[i].path
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
