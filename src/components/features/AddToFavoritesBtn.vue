<template>
  <button class="btn">
    <img
      v-if="isActive"
      :class="['btn__icon', { active: isActive }]"
      src="@/assets/images/heart-active.png"
      alt=""
    />
    <img v-else class="btn__icon" src="@/assets/images/heart.png" alt="" />
  </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({ isActive: Boolean });
</script>

<style lang="scss" scoped>
.btn {
  background: transparent;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  vertical-align: bottom;

  &__icon {
    max-width: 20px;
  }
}
</style>
