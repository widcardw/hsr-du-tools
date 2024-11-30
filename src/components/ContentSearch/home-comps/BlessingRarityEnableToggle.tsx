import ToggleButton from '@/components/ui/ToggleButton'
import { blRarityClassMap } from '@/libs/du/maps'
import type { BlessingRarity } from '@/libs/du/types'
import clsx from 'clsx'
import type { Component } from 'solid-js'
import { blRarityFilter } from './data'

const BlessingRarityEnableToggle: Component<{
  init: boolean
  level: BlessingRarity
  enabled?: boolean
  parentActivated?: boolean
  onChange: (v: boolean) => void
}> = (props) => {
  return (
    <ToggleButton
      variant="unstyled"
      class={clsx(
        'text-fg',
        'bg-bg-secondary',
        `data-[pressed]:${blRarityClassMap[props.level][0]}`,
      )}
      value={blRarityFilter[props.level]}
      onChange={(v) => props.onChange(v)}
      disabled={props.enabled === false}
    >
      {blRarityClassMap[props.level][1]}
    </ToggleButton>
  )
}

export default BlessingRarityEnableToggle
