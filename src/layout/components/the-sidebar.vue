<template>
  <div class="sidebar">
    <the-menu :collapse="isCollapse" />
    <collapse
      :isActive="isCollapse"
      @toggleClick="isCollapse = !isCollapse"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, inject} from 'vue';
import Collapse from './collapse.vue';
import TheMenu from './the-menu.vue';

const defaultCollapse = inject('collapse', false);
const isCollapse = ref(defaultCollapse);

</script>

<style lang="scss">
.sidebar {
  position: relative;
  box-shadow: 0 0 1px var(--color-border);
}
</style>
