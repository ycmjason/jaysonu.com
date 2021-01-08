import clsPictureUrl from '../assets/cls/cover.jpg';
import lonelyGuysDoNotWakePictureUrl from '../assets/lonely-guys-do-not-wake/cover.jpg';
import { stripIndent } from 'common-tags';

export const SONGS: {
  name: string;
  nickname?: string;
  pictureUrl: string;
  theme: {
    '--color-background': string;
    '--color-foreground': string;
  };
  lyrics: string;
  embededIds: {
    youtube: string;
    spotify?: string;
  };
}[] = [
  {
    name: '孤單的人睡不醒',
    nickname: 'lgcnw', // lonely guys cannot wake
    pictureUrl: lonelyGuysDoNotWakePictureUrl,
    theme: {
      '--color-background': 'var(--color-lonely-guys-do-not-wake-bg)',
      '--color-foreground': 'var(--color-lonely-guys-do-not-wake-theme)',
    },
    lyrics: stripIndent`
      《孤單的人睡不醒》

      曲：Jayson U
      詞：Bryan U

      渴睡到睡房草林密佈
      稀客的客廳蚊蟲共舞
      住進青苔
      塵埃覆蓋
      頑石也漸老
      掀不開被鋪
      書薄中捕捉失傳字母
      衣帽間冒險未怕跌倒
      長藤壁紙環抱
      埋頭污糟廢土
      門前積水
      雪霜能自掃

      棲息於這
      一房半廳
      生根於這
      單身被席

      沒苦需吐
      無福要造
      無心可痛
      是我驕傲
      `,
    embededIds: {
      youtube: 'BSAD4dvOUyM',
      spotify: '6yMxyuuZry50R4qsKlKZnD',
    },
  },
  {
    name: '我要為妳痴總掣',
    nickname: 'cls',
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
    embededIds: {
      youtube: '9pO3JCWg264',
      spotify: '5sqDSuaF9e33JnpYO78wIG',
    },
  },
];
