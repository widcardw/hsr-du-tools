import type { AlertDialogTriggerProps } from '@kobalte/core/alert-dialog'
import type { Component } from 'solid-js'
import { CarbonInformation } from './icons/CarbonInfo'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'
import { Button } from './ui/button'

import './footer.css'

const Footer: Component = () => {
  return (
    <footer class="w-full py-2rem text-center text-sm">
      <div class="my-2">本工具仅用于学习交流，一切以正式服上线数据为准</div>
      <AlertDialog>
        <AlertDialogTrigger
          as={(props: AlertDialogTriggerProps) => (
            <Button
              variant="ghost"
              class="text-white text-xl hover:(bg-transparent text-blue)"
              {...props}
            >
              <CarbonInformation />
            </Button>
          )}
        />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>关于</AlertDialogTitle>
            <AlertDialogDescription>
              <p>
                本网站源码可在{' '}
                <a
                  href="https://github.com/widcardw/hsr-du-tools"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{' '}
                查看，若有任何建议或问题，包括但不限于：样式问题、适配问题、Tag 校对，请于{' '}
                <a
                  href="https://github.com/widcardw/hsr-du-tools/issues"
                  target="_blank"
                  rel="noreferrer"
                >
                  issue
                </a>{' '}
                板块反馈，或发送邮件到{' '}
                <a
                  href="mailto:widcardw@foxmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  widcardw@foxmail.com
                </a>
                .
              </p>
              <p>
                使用技术栈：
                <a href="https://solidjs.com" target="_blank" rel="noreferrer">
                  Solidjs
                </a>
                ,{' '}
                <a href="https://unocss.dev" target="_blank" rel="noreferrer">
                  UnoCSS
                </a>
                ,{' '}
                <a href="https://netlify.com" target="_blank" rel="noreferrer">
                  Netlify
                </a>
                .
              </p>
              <p>特别感谢：HoYoverse, YuHengCup, Mar-7th.</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </footer>
  )
}

export default Footer
