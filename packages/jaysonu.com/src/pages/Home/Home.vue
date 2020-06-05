<template>
  <div class="home">
    <img alt="Jayson U" src="../../assets/jaysonu-dp.jpg" class="home__dp fade-in-top" />
    <h1>Jayson U</h1>

    <section class="home__links">
      <a v-for="({ href, icon }, i) of links" :key="i" :href="href" target="_blank" noopener noreferrer>
        <Icon :name="icon" />
      </a>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from '../../components/Icon.vue';

export default defineComponent({
  components: { Icon },
  setup() {
    return {
      links: [
        { href: 'https://www.instagram.com/the.jayson.u/', icon: 'instagram' },
        { href: 'https://www.youtube.com/channel/UCSFVGZGV7f3WicnJplfhwuA', icon: 'youtube' },
        { href: 'https://www.facebook.com/the.jayson.u/', icon: 'facebook' },
      ],
    };
  },
});
</script>

<style lang="postcss">
.home {
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 5rem 2rem 0;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__dp {
    border-radius: 100%;
    border: 0.5rem solid var(--color-border);
    width: calc(100% - 1rem);
    max-width: 500px;
    max-height: 500px;
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
