import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{html,ts,md,analog,ag}'],
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    extend: {
      colors: {
        'my-purple': '#71357c',
        'my-purple-light': '#dedff2',
        'my-teal': '#94d1d1',
        'my-teal-light': '#d1ebea',
        'my-orange': '#fe7e53',
        'my-orange-light': '#f6ebd6',
        'my-paper': '#faf4f0',
        'my-bg-light': '#f8f8f8',
        'my-text-light': '#0e0e0e',
      },
      backgroundImage: {
        premium: "url('/premium.webp')",
      },
    },
  },
  safelist: [
    'bg-image-premium',
    {
      pattern: /^bg-my-/,
    },
  ],
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
} satisfies Config;
