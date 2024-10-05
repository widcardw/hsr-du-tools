import { ToggleButton } from '@/components/ui/toggle'
import { blRarityClassMap } from '@/libs/du/maps'
import type { BlessingRarity } from '@/libs/du/types'
import clsx from 'clsx'
import type { Component } from 'solid-js'
import { blRarityFilter } from './data'

const BlessingRarityEnableToggle: Component<{
  init: boolean
  level: BlessingRarity
  enabled?: boolean
  onChange: (v: boolean) => void
}> = (props) => {
  return (
    <ToggleButton
      class={clsx(
        'text-foreground',
        'bg-secondary',
        `data-[pressed]:${blRarityClassMap[props.level][0]}`,
      )}
      pressed={blRarityFilter[props.level]}
      onChange={(v) => props.onChange(v)}
      disabled={props.enabled === false}
    >
      {blRarityClassMap[props.level][1]}
    </ToggleButton>
  )
}

export default BlessingRarityEnableToggle
