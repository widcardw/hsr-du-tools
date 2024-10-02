import { makePersisted } from '@solid-primitives/storage'
import { createStore } from 'solid-js/store'
import type { GainType, Path } from './du/constants'

const [searchState, setSearchState] = makePersisted(
  createStore<{
    gainParams: GainType[]
    pathParams: Path[]
  }>({
    gainParams: [],
    pathParams: [],
  }),
  {
    name: 'search-state',
    storage: localStorage,
  },
)

export { searchState, setSearchState }
