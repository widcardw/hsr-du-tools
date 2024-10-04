import { type Component, For, type JSX } from 'solid-js'
import './App.css'
import { A, type RouteSectionProps } from '@solidjs/router'
import Footer from './components/Footer'
import ColorModer from './components/dark-theme/ColorModeProvider'
import ModeToggle from './components/dark-theme/toggle-mode'
import { Button } from './components/ui/button'

const App: Component<RouteSectionProps> = (props) => {
  return (
    <ColorModer>
      <nav class="w-full flex justify-center my-2 gap-2">
        <Button variant="secondary" as={A} href="/">
          主页
        </Button>
        <Button variant="secondary" as={A} href="/blessings">
          祝福
        </Button>
        <Button variant="secondary" as={A} href="/equations">
          方程
        </Button>
        <ModeToggle />
      </nav>
      <main class="px-1 sm:px-2 max-w-1200px mx-a space-y-2">{props.children}</main>
      <Footer />
    </ColorModer>
  )
}

export default App
