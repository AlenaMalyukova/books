<template>
  <button class="btn" @click="toggleFavorites(book, id)">
    <img
      v-if="isFavorite(book)"
      :class="['btn__icon', { active: isFavorite }]"
      src="@/assets/images/heart-active.png"
      alt=""
    />
    <img v-else class="btn__icon" src="@/assets/images/heart.png" alt="" />
  </button>
</template>

<script setup>
import { defineProps, computed } from "vue";
import store from "@/store";

defineProps({ book: Object });

const favoriteBooks = computed(() => store.getters.favoriteBooks);

// eslint-disable-next-line
const isFavorite = (book) => !!favoriteBooks.value.find((el) => el.id === book.id);

const toggleFavorites = (book) => {
  if (isFavorite(book)) {
    store.commit("deleteFavoritesBook", book);
  } else {
    store.commit("addTofavorites", book);
  }
};
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
