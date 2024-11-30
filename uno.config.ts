import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      fg: {
        DEFAULT: 'var(--fg)',
        secondary: 'var(--fg-secondary)',
        primary: 'var(--primary)',
        tertiary: 'var(--fg-tertiary)',
      },
      bg: {
        DEFAULT: 'var(--bg)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--bg-tertiary)',
        destructive: 'var(--destructive)',
        destructivehover: 'var(--destructive-hover)',
      },
    },
  },
})
