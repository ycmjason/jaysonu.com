<template>
  <a @click.prevent="onClick" href="">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    target: String,
  },
  setup(props) {
    return {
      onClick: () => {
        if (!props.target) return;
        history.pushState(null, '', props.target);
        document.querySelector(props.target)?.scrollIntoView({ behavior: 'smooth' });
      },
    };
  },
});
</script>
