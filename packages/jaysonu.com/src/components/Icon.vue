<template>
  <div class="icon">
    <i :class="`gg-${name}`"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },
});
</script>

<style lang="postcss">
.icon {
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
