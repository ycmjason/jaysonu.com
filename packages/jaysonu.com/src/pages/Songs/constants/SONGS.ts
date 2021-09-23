import { stripIndent } from 'common-tags';

import clsPictureUrl from '@/pages/Songs/assets/cls/cover.jpg';
import lonelyGuysDoNotWakePictureUrl from '@/pages/Songs/assets/lonely-guys-do-not-wake/cover.jpg';
import yloPictureUrl from '@/pages/Songs/assets/ylo/cover.jpg';
import harPictureUrl from '@/pages/Songs/assets/har/cover.jpg';
import futdanPictureUrl from '@/pages/Songs/assets/futdan/cover.jpg';
import sunshinePictureUrl from '@/pages/Songs/assets/sunshine/cover.jpg';

type Song = {
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
};

const createSong = (song: Song) => song;

export const SONGS = [
  createSong({
    name: '陽光',
    nickname: 'sunshine',
    pictureUrl: sunshinePictureUrl,
    theme: {
      '--color-background': '#ADDBEB',
      '--color-foreground': '#FDBD1F',
    },
    lyrics: stripIndent`
      《陽光》
      曲/編/唱：Jayson U
      詞：Bryan U
      
      陽光　督促我起床
      說最近不要　再走堂
      陽光　若近來不忙
      趁假日跟我　逛一趟
      
      很溫暖
      不懂困倦
      傾吐
      散落片段
      
      很溫暖
      笑聲普照在
      這街角
      老舊小店
      
      陽光　請趕快起床
      逛腳踏車徑　到海傍
      陽光　即使有多忙
      有妳在　天氣最清朗
      
      很溫暖
      不懂偶遇
      只顧
      每日碰面
      
      很溫暖
      此刻方發現
      那斑駁
      已漸開遍
      
      陽光　准許妳躲藏
      放假在家過　也不妨
      陽光　今天要安躺
      懶覺睡幾個　算釋放
      `,
    embededIds: {
      youtube: 'shmMWNeD8PA',
      spotify: '1WP33ZyceCEr7xasnJU8Iv',
    },
  }),
  createSong({
    name: '點解香港有聖誕外國冇佛誕',
    nickname: 'futdan',
    pictureUrl: futdanPictureUrl,
    theme: {
      '--color-background': '#0E2455',
      '--color-foreground': 'white',
    },
    lyrics: stripIndent`
      《點解香港有聖誕外國冇佛誕》
      曲/詞/編/唱：Jayson U

      點解香港有聖誕 外國冇佛誕
      點解點解 點解點解
      點解香港有聖誕 外國冇佛誕
      我想放假

      又話要公平
      又話要公正
      咁請問下你 點樣解釋
      外國冇清明
      外國冇中秋
      外國冇端午
      外國冇重陽

      點解香港有聖誕 外國冇佛誕
      點解點解 點解點解
      點解香港有聖誕 外國冇佛誕
      我想放假

      點解我哋咁鬼尊重外國嘅假期
      但係外國一啲都唔尊重 唔俾面我哋
      又話要平等 又話要公平
      其實最唔平等就係你哋呢一班茂利
      我哋香港人放假都只不過係為咗尊重下你
      你哋skip晒我哋啲節日 我覺得極唔OK
      嗱 一係咁吖 你下年開始啦
      下年開始我就唔怪你地

      點解香港有聖誕 外國冇佛誕
      點解點解 點解點解
      點解香港有聖誕 外國冇佛誕
      我想放假

      聽日就係佛誕啦
      我好懷念佛誕有假放的日子
      如果
      如果命運俾我返返轉頭
      我會選擇將佛誕帶入英國
      我會選擇將重陽帶入英國
      我會選擇將清明帶入英國

      我想放假
      `,
    embededIds: {
      youtube: 'SUFZ-L-y11k',
      spotify: '2w90AOpKS4wWNqb1vq3QM7',
    },
  }),
  createSong({
    name: '獨木舟荒島釣蝦記',
    nickname: 'har',
    pictureUrl: harPictureUrl,
    theme: {
      '--color-background': '#0AAFBC',
      '--color-foreground': 'white',
    },
    lyrics: stripIndent`
      《獨木舟荒島釣蝦記》

      曲：Jayson U
      詞：Jayson U, Bryan U, friends on clubhouse
      編：Jayson U
      唱：Jayson U

      無聊在獨木舟
      聽海風正獨奏
      猶如尋覓綠洲
      要拋開一切紛憂

      朝住荒島撐出去
      未到就已感到疲累
      還剩一海里缺乏糧水
      唔 call 拯救隊！

      撐呀撐呀撐呀 撐呀撐呀
      撐呀撐呀撐呀 撐呀撐呀
      撐呀撐呀撐呀 撐呀撐呀
      天黑了嗎？

      撐呀撐呀撐呀 撐呀撐呀
      撐呀撐呀撐呀 撐呀撐呀
      撐呀撐呀撐呀 撐呀撐呀
      仲未到嗎？

      我想釣蝦～

      無聊在獨木舟
      聽海風正獨奏
      猶如尋覓綠洲
      要拋開一切紛憂

      朝住荒島撐出去
      未到就已感到疲累
      還剩一海里缺乏糧水
      唔 Call 拯救隊！

      撐呀撐呀撐呀 撐呀撐呀
      撐呀撐呀撐呀 撐呀撐呀
      撐呀撐呀撐呀 撐呀撐呀
      天黑了嗎？

      撐呀撐呀撐呀 撐呀撐呀
      撐呀撐呀撐呀 撐呀撐呀
      撐呀撐呀撐呀 撐呀撐呀
      終於到啦！

      我想釣蝦～

      釣呀釣呀釣呀 釣呀釣呀
      釣呀釣呀釣呀 釣呀釣呀
      釣呀釣呀釣呀 釣呀釣呀
      仲未有蝦

      釣呀釣呀釣呀 釣呀釣呀
      釣呀釣呀釣呀 釣呀釣呀
      釣呀釣呀釣呀 釣呀釣呀
      終於有蝦

      蝦蝦蝦哈哈哈
      `,
    embededIds: {
      youtube: 'Rf3mITHySUQ',
      spotify: '1aZrcn0Hqf64z3lR4k7LBS',
    },
  }),
  createSong({
    name: 'Y 路',
    nickname: 'ylo',
    pictureUrl: yloPictureUrl,
    theme: {
      '--color-background': '#14143c',
      '--color-foreground': '#f794cd',
    },
    lyrics: stripIndent`
      《Y 路》

      曲: Jayson U
      詞: Jayson U, Bryan U

      和你走過 那些路
      和你傾過的通宵
      天光 酒散了 才意識到
      其實你是最好

      和你一起感覺很好
      沒想到會給你煩惱
      分開的一剎如刀割心
      我指是心如刀割

      *數星星 它很漂亮
      看猩猩 它走向象
      巧驚驚 隻象來想撞我

      冇陰公 咁走過來
      到空中 狗亂咁吠
      喊出聲 試問誰來援救我
      凍飲加兩蚊*

      如你今晚作感冒
      頭痛咳嗽打乞嚏
      分開的一剎情開朗心
      我指是心情開朗
      `,
    embededIds: {
      youtube: '6YdZD9JmbxE',
      spotify: '7yWYoOBigkQQEgGTmrGa5d',
    },
  }),
  createSong({
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
  }),
  createSong({
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
  }),
];
