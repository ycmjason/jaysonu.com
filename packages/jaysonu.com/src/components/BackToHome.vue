<template>
  <router-link to="/" class="back-to-home">
    <Icon name="home"></Icon>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from './Icon.vue';
export default defineComponent({
  components: { Icon },
});
</script>

<style lang="postcss" scoped>
.back-to-home {
  display: flex;
  align-items: center;

  &__image {
    width: 1.5rem;
    margin-right: 0.5rem;
  }
}
</style>
