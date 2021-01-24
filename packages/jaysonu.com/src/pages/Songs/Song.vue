<template>
  <section class="song fullpageish__section" :style="song.theme">
    <BackToHome class="song__back-to-home" />
    <div class="fullpageish__container fullpageish__container">
      <img :alt="`${song.name} picture`" :src="song.pictureUrl" class="song__picture" />
      <h1 class="song__name">{{ song.name }}</h1>

      <div class="song__links">
        <a
          :href="`https://www.youtube.com/watch?v=${song.embededIds.youtube}`"
          class="song__link"
          target="_blank"
          noopener
          noreferrer
        >
          <Icon name="film" />
        </a>

        <a
          v-if="song.embededIds.spotify"
          :href="`https://open.spotify.com/track/${song.embededIds.spotify}`"
          class="song__link"
          target="_blank"
          noopener
          noreferrer
        >
          <Icon name="headset" />
        </a>
      </div>
    </div>
  </section>
  <section class="lyrics fullpageish__section">
    <div class="fullpageish__container">
      <h2>Lyrics</h2>
      <pre class="lyrics__lyric">{{ song.lyrics }}</pre>
    </div>
  </section>
  <section
    id="lyrics-video"
    class="fullpageish__section"
    style="--color-background: var(--color-dark-grey); --color-foreground: var(--color-white)"
  >
    <div class="fullpageish__container">
      <h2>Music Video</h2>
      <div class="embed-container">
        <iframe
          :src="`https://www.youtube.com/embed/${song.embededIds.youtube}`"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
  <section id="spotify" class="spotify fullpageish__section" v-if="song.embededIds.spotify">
    <div class="fullpageish__container">
      <h2>Spotify</h2>
      <iframe
        :src="`https://open.spotify.com/embed/track/${song.embededIds.spotify}`"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import Icon from '@/components/Icon.vue';
import { SONGS } from '@/pages/Songs/constants/SONGS';
import SmoothScrollLink from '@/components/SmoothScrollLink.vue';
import BackToHome from '@/components/BackToHome.vue';

export default defineComponent({
  components: { Icon, SmoothScrollLink, BackToHome },

  props: {
    songName: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const song = computed(() => SONGS.find(({ name }) => name === props.songName));
    return {
      song,
    };
  },
});
</script>

<style lang="postcss" scoped>
.song {
  position: relative;

  &__back-to-home {
    --g: 0.5rem;
    position: absolute;
    top: var(--g);
    right: var(--g);
  }

  &__picture {
    border: 0.5rem solid currentColor;
    width: calc(100% - 1rem);
    max-width: 16rem;
    max-height: 16rem;
    display: block;
    margin: 0 auto;
  }

  &__name {
    font-size: 1.5rem;
  }

  &__links {
    display: flex;
    align-items: center;
  }
}

.lyrics {
  --color-background: var(--color-white);
  --color-foreground: var(--color-blue);

  &__lyric {
    box-sizing: border-box;
    border: 0.5rem solid var(--color-foreground);
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 20rem;
    max-width: 100%;
  }
}

.spotify {
  --color-background: var(--color-green);
  --color-foreground: var(--color-black);
}
</style>
