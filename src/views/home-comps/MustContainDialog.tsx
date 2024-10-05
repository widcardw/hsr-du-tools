import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { GainType } from '@/libs/du/constants'
import type { DialogTriggerProps } from '@kobalte/core/dialog'
import clsx from 'clsx'
import {
  type Component,
  For,
  Show,
  createEffect,
  createSignal,
  on,
} from 'solid-js'
import GainButton from './GainButton'

const MustContainDialog: Component<{
  initGains: GainType[]
  mustContainGains: GainType[]
  onChange: (gains: GainType[]) => void
}> = (props) => {
  const [dlgOpen, setDlgOpen] = createSignal(false)
  const [selectedGains, setSelectedGains] = createSignal<GainType[]>(
    props.initGains,
  )

  const [mustContainGains, setMustContainGains] = createSignal<GainType[]>(
    props.mustContainGains,
  )

  createEffect(
    on(
      () => props.initGains,
      (v) => {
        setSelectedGains(v)
        // buff 变少了但是还在「必须包含」中，那么从「必须包含」中将这个 buff 去掉
        if (mustContainGains()?.some((i) => !v.includes(i))) {
          setMustContainGains((prev) => prev.filter((i) => v.includes(i)))
          // 这里应该不会造成无限更新
          props.onChange(mustContainGains())
        }
      },
    ),
  )

  createEffect(
    on(
      () => props.mustContainGains,
      (v) => setMustContainGains(v),
    ),
  )

  const tempAddMustContainGainChange = (gain: GainType, v: boolean) => {
    if (v) setMustContainGains((prev) => [...prev, gain])
    else setMustContainGains((prev) => prev.filter((i) => i !== gain))
  }

  const pushTempMustContainGains = () => {
    props.onChange(mustContainGains())
  }

  return (
    <Dialog
      open={dlgOpen()}
      onOpenChange={(v) => {
        setDlgOpen(v)
        if (!v) pushTempMustContainGains()
      }}
    >
      <DialogTrigger
        as={(inner_props: DialogTriggerProps) => (
          <Button
            variant="secondary"
            class={clsx(
              mustContainGains() &&
                mustContainGains().length > 0 &&
                'blessing-desc',
            )}
            {...inner_props}
          >
            必须包含
          </Button>
        )}
      />
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>标签列表</DialogTitle>
          <DialogDescription>选择必须包含的标签</DialogDescription>
        </DialogHeader>
        <Show
          when={selectedGains().length > 0}
          fallback={
            <div class="max-h-400px">
              尚未选择任何
              buff，请先通过“选择标签”或点击方程和祝福下的按钮已添加 buff
            </div>
          }
        >
          <div class="max-h-400px of-y-auto">
            <For each={selectedGains()}>
              {(gain) => (
                <GainButton
                  pressed={mustContainGains().includes(gain)}
                  gain={gain}
                  onChange={(v) => tempAddMustContainGainChange(gain, v)}
                />
              )}
            </For>
          </div>
        </Show>
        <DialogFooter>
          <Button
            onClick={() => {
              pushTempMustContainGains()
              setDlgOpen(false)
            }}
          >
            确定
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default MustContainDialog
