import clsPictureUrl from '../assets/cls/cover.jpg';
import { stripIndent } from 'common-tags';

export const SONGS = [
  {
    name: '我要為妳痴總掣',
    pictureUrl: clsPictureUrl,
    theme: {
      '--color-background': 'var(--color-yellow)',
      '--color-foreground': 'var(--color-black)',
    },
    lyrics: stripIndent`
      《我要為妳痴總掣》

      曲：Jayson U
      詞：Bryan U

      搞／搞新意
      從此／學寫歌作詩
      喂　可／不可以
      拜師／學整餅摺紙

      為妳／乜嘢總掣都癡
      我／乜Q把戲都知
      (佢)／曉寫曉唱曉跳　費盡心思
      狂填病假紙
      唔做正經事

      耶　講／講鍾意
      能寫滿／能寫滿　廿八頁信紙
      聽／聽不厭
      妳鍾意／就不斷不斷不斷　唱足一輩子

      如我／可以識妳早啲
      會／返去出世嗰時
      再去／搵妳識妳追妳　費盡心思
      狂填入數紙
      連密碼告知
      `,
  },
] as {
  name: string;
  pictureUrl: string;
  theme: {
    '--color-background': string;
    '--color-foreground': string;
  };
  lyrics: string;
}[];
