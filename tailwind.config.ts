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
        'my-teal': '#94d1d1',
        'my-orange': '#fe7e53',
        'my-paper': '#faf4f0',
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
  plugins: [],
} satisfies Config;
