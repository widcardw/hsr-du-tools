import { createSignal, For, onMount, type Component } from 'solid-js'
import { Dialog, DialogTrigger } from '../ui/Dialog'

const VersionNavigator: Component<{ versions: Array<string> }> = (props) => {
  const [curVer, setCurVer] = createSignal('版本')
  onMount(() => {
    const path = window.location.pathname
    setCurVer(path.split('/').filter(Boolean)[0])
  })
  return (
    <Dialog
      trigger={
        <DialogTrigger class="flex items-center gap-1">
          <div class="i-carbon-version" />
          <span class="hidden sm:block">{curVer()}</span>
        </DialogTrigger>
      }
    >
      <h3 class="my-1">版本列表</h3>
      <ul class="px-4 my-1">
        <For each={props.versions}>
          {(v) => (
            <li>
              <a href={`/${v}`}>{v}</a> {curVer() === v && ' ✔'}
            </li>
          )}
        </For>
      </ul>
    </Dialog>
  )
}

export default VersionNavigator
