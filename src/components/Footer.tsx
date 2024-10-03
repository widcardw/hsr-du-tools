import type { Component } from 'solid-js'
import { CarbonLogoGithub } from './icons/CarbonGithub'

const Footer: Component = () => {
  return (
    <footer class="w-full py-2rem text-center">
      <div class="my-2">本工具仅用于学习交流，一切以正式服上线数据为准</div>
      <a href="https://github.com/widcardw/hsr-du-tools" target="_blank" rel="noreferrer" class="text-xl">
        <CarbonLogoGithub />
      </a>
    </footer>
  )
}

export default Footer
