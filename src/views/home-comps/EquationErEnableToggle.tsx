import { ToggleButton } from '@/components/ui/toggle'
import { eqErClassMap } from '@/libs/du/maps'
import type { BlessingEquationEr } from '@/libs/du/types'
import clsx from 'clsx'
import type { Component } from 'solid-js'
import { erFilter } from './data'

const EquationErEnableToggle: Component<{
  init: boolean
  level: BlessingEquationEr
  enabled?: boolean
  onChange: (v: boolean) => void
}> = (props) => {
  return (
    <ToggleButton
      class={clsx(
        'text-foreground',
        'bg-secondary',
        `data-[pressed]:${eqErClassMap[props.level][0]}`,
      )}
      pressed={erFilter[props.level]}
      onChange={(v) => props.onChange(v)}
      disabled={props.enabled === false}
    >
      {eqErClassMap[props.level][1]}
    </ToggleButton>
  )
}

export default EquationErEnableToggle
