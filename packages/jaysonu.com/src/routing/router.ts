import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/Home.vue';
import { watchEffect } from 'vue';
import { SONGS } from '../pages/Songs/constants/SONGS';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    ...SONGS.map(({ nickname, name }) => ({
      path: `/s/${nickname}`,
      redirect: { name: 'song', params: { songName: name } },
    })),
    {
      name: 'song',
      path: '/songs/:songName',
      props: true,
      component: () => import('../pages/Songs/Song.vue'),
      beforeEnter(to, _from) {
        const { songName } = to.params;

        if (typeof songName !== 'string' || !SONGS.map(({ name }) => name).includes(songName)) {
          return false;
        }

        return undefined;
      },
    },
    {
      path: '/:d(.*)',
      component: () => import('../pages/NotFound/NotFound.vue'),
    },
  ],
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
});

if (typeof ga === 'function') {
  watchEffect(() => {
    ga('set', 'page', router.currentRoute.value.path);
    ga('send', 'pageview');
  });
}
