import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/Home.vue';
import { watchEffect } from 'vue';

const SHORT_SONG_URL = [{ short: 'cls', songName: '我要為妳痴總掣' }];

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    ...SHORT_SONG_URL.map(({ short, songName }) => ({
      path: `/s/${short}`,
      redirect: { name: 'song', params: { songName } },
    })),
    {
      name: 'song',
      path: '/songs/:songName',
      props: true,
      component: () => import('../pages/Songs/Song.vue'),
      beforeEnter(to, _from, next) {
        const { songName } = to.params;

        if (typeof songName !== 'string' || !['我要為妳痴總掣'].includes(songName)) {
          return next(false);
        }

        return next();
      },
    },
    {
      path: '/:d(.*)',
      component: () => import('../pages/NotFound/NotFound.vue'),
    },
  ],
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) return savedPosition;
    return { x: 0, y: 0 };
  },
});

if (typeof ga === 'function') {
  watchEffect(() => {
    ga('set', 'page', router.currentRoute.value.path);
    ga('send', 'pageview');
  });
}
