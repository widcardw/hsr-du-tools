import type { Component, JSXElement } from 'solid-js'
import { Suspense } from 'solid-js'
import { ColorModeProvider, ColorModeScript } from '@kobalte/core'
import { MetaProvider } from '@solidjs/meta'

const ColorModer: Component<{
  children: JSXElement
}> = (props) => {
  return (
    <MetaProvider>
      <Suspense>
        <ColorModeScript />
        <ColorModeProvider>{props.children}</ColorModeProvider>
      </Suspense>
    </MetaProvider>
  )
}

export default ColorModer
