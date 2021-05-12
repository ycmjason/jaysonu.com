<template>
  <div class="profile fullpageish__section fullpageish__section--full-page">
    <div class="fullpageish__container">
      <img alt="Jayson U" src="./assets/jaysonu-dp.jpg" class="profile__dp" />
      <h1>Jayson U</h1>

      <section class="profile__links">
        <a v-for="({ href, icon }, i) of links" :key="i" :href="href" target="_blank" noopener noreferrer>
          <Icon :name="icon" />
        </a>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Icon from '@/components/Icon.vue';

export default defineComponent({
  components: { Icon },
  setup() {
    return {
      links: [
        { href: 'https://open.spotify.com/artist/13JcQ0BxNGeGznz44NpWeU?si=4Jw58FLvTyCz5jCGTI68jQ', icon: 'headset' },
        { href: 'https://www.instagram.com/the.jayson.u/', icon: 'instagram' },
        { href: 'https://www.youtube.com/channel/UCSFVGZGV7f3WicnJplfhwuA', icon: 'youtube' },
        { href: 'https://www.facebook.com/the.jayson.u/', icon: 'facebook' },
      ],
    };
  },
});
</script>

<style lang="postcss" scoped>
.profile {
  --color-background: var(--color-black);
  --color-foreground: var(--color-white);

  &__dp {
    border-radius: 100%;
    border: 0.5rem solid var(--color-foreground);
    width: calc(100% - 1rem);
    max-width: 16rem;
    max-height: 16rem;
    display: block;
    margin: 0 auto;
  }

  &__links {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      margin-right: 0.5rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
</style>
