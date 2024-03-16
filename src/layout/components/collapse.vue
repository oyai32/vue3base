<template>
  <div class="collapse-container">
    <el-icon class="icon curp" :size="20" :style="{ transform: isActive ? 'none' : 'rotateY(180deg)' }" @click="toggleClick"><Expand /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { Expand } from '@element-plus/icons-vue';

interface Props {
  isActive: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
});

const emit = defineEmits<{
  (e: "toggleClick"): void;
}>();

const toggleClick = () => {
  emit("toggleClick");
};
</script>

<style lang="scss" scoped>
.collapse-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  box-shadow: 0 0 6px -3px var(--el-color-primary);
  display: flex;
  align-items: center;
}
.icon{
  margin-left:20px;
}
</style>
