<template>
  <section class="song fullpageish__section" :style="song.theme">
    <BackToHome class="song__back-to-home" />
    <div class="fullpageish__container">
      <img :alt="`${song.name} picture`" :src="song.pictureUrl" class="song__picture fade-in-top" />
      <h1 class="song__name">{{ song.name }}</h1>

      <div class="song__links">
        <a href="https://www.youtube.com/watch?v=9pO3JCWg264" class="song__link" target="_blank" noopener noreferrer>
          <i class="gg-film"></i>
        </a>

        <a
          href="https://open.spotify.com/track/5sqDSuaF9e33JnpYO78wIG"
          class="song__link"
          target="_blank"
          noopener
          noreferrer
        >
          <i class="gg-music-speaker"></i>
        </a>
      </div>
    </div>
  </section>
  <section
    id="lyrics-video"
    class="fullpageish__section"
    style="--color-background: var(--color-black); --color-foreground: var(--color-white);"
  >
    <div class="fullpageish__container">
      <div class="embed-container">
        <iframe src="https://www.youtube.com/embed/9pO3JCWg264" frameborder="0" allowfullscreen></iframe>
      </div>
      <h2>Lyrics Video</h2>
    </div>
  </section>
  <section id="spotify" class="spotify fullpageish__section">
    <div class="fullpageish__container">
      <iframe
        src="https://open.spotify.com/embed/track/5sqDSuaF9e33JnpYO78wIG"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <h2>Spotify</h2>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Icon from '../../components/Icon.vue';
import { SONGS } from './constants/SONGS';
import SmoothScrollLink from '../../components/SmoothScrollLink.vue';
import BackToHome from '../../components/BackToHome.vue';

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

  &__link {
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
}

.spotify {
  --color-background: var(--color-green);
  --color-foreground: var(--color-black);
}
</style>
