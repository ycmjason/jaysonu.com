<template>
  <div class="home">
    <Profile />
    <Song v-for="song of songs" :key="song.name" :song="song" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Profile from '@/pages/Home/Profile.vue';
import Song from '@/pages/Home/Song.vue';
import { SONGS } from '@/pages/Songs/constants/SONGS';

export default defineComponent({
  components: { Profile, Song },
  setup() {
    return {
      songs: SONGS,
    };
  },
});
</script>

<style lang="postcss">
.home {
}
</style>
