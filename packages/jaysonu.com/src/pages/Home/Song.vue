<template>
  <div class="song fullpageish__section" :style="song.theme">
    <div class="fullpageish__container">
      <Transition appear appear-active-class="fade-in-top">
        <router-link :to="songLink">
          <img :alt="`${song.name} picture`" :src="song.pictureUrl" class="song__picture" />
        </router-link>
      </Transition>
      <h2 class="song__name">{{ song.name }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Icon from '@/components/Icon.vue';

export interface SongData {
  name: string;
  pictureUrl: string;
  theme: {
    '--color-background': string;
    '--color-foreground': string;
  };
}

export default defineComponent({
  props: {
    song: {
      type: Object as () => SongData,
      required: true,
    },
  },

  components: { Icon },

  setup(props) {
    return {
      songLink: `/songs/${props.song.name}`,
    };
  },
});
</script>

<style lang="postcss" scoped>
.song {
  &__picture {
    border: 0.5rem solid currentColor;
    width: calc(100% - 1rem);
    max-width: 16rem;
    max-height: 16rem;
    display: block;
    margin: 0 auto;
    box-shadow: var(--shadow-shallow);
    transition: var(--transition-duration) ease;
    transition-property: color, box-shadow, transform;
    &:hover {
      box-shadow: var(--shadow-deep);
    }
  }

  &__name {
    margin-bottom: 0;
    font-size: 1.5rem;
  }
}
</style>
