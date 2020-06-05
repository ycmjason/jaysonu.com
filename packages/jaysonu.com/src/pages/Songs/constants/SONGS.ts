import clsPictureUrl from '../assets/cls/cover.jpg';

export const SONGS = [
  {
    name: '我要為妳痴總掣',
    pictureUrl: clsPictureUrl,
    theme: {
      '--color-background': 'var(--color-yellow)',
      '--color-foreground': 'var(--color-black)',
    },
  },
] as {
  name: string;
  pictureUrl: string;
  theme: {
    '--color-background': string;
    '--color-foreground': string;
  };
}[];
