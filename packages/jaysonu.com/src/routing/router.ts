import { watchEffect } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home/Home.vue';
import { SONGS } from '@/pages/Songs/constants/SONGS';
import { urlify } from '@/utils/route';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    ...SONGS.map(({ nickname, name }) => ({
      path: `/s/${nickname}`,
      redirect: { name: 'song', params: { songUrlifiedName: urlify(name) } },
    })),
    {
      name: 'song',
      path: '/songs/:songUrlifiedName',
      props: true,
      component: () => import('../pages/Songs/Song.vue'),
      beforeEnter(to, _from) {
        const { songUrlifiedName } = to.params;

        if (typeof songUrlifiedName !== 'string' || !SONGS.map(({ name }) => urlify(name)).includes(songUrlifiedName)) {
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
