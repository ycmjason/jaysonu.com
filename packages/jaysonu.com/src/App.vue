<template>
  <router-view></router-view>
  <footer class="footer fullpageish__section">
    <div class="fullpageish__container">
      2020 &copy; Jayson U
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {},
});
</script>

<style lang="postcss" scoped>
.footer {
  --color-background: var(--color-black);
  --color-foreground: var(--color-white);
}
</style>
