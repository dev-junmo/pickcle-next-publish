import localFont from 'next/font/local';

export const fontNotoSansKr = localFont({
  src: [
    {
      path: './assets/black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './assets/bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './assets/medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/light.otf',
      weight: '300',
      style: 'normal',
    },
  ],
});
