<template>
  <div class="card">
    <img
      class="card__img"
      :src="book.volumeInfo.imageLinks?.thumbnail"
      :alt="require('@/assets/images/open-book.png')"
    />
    <div class="info">
      <h5 class="info__title">{{ book.volumeInfo.title }}</h5>
      <p v-if="book.volumeInfo.description" class="info__description">
        {{ book.volumeInfo.description }}
      </p>
      <p v-else>Нет описания</p>
      <AddToFavoritesBtn />
    </div>
  </div>
  <!-- <router-link to="/about-the-book"></router-link> -->
</template>

<script setup>
import { defineProps } from "vue";
import AddToFavoritesBtn from "@/components/features/AddToFavoritesBtn.vue";

defineProps({
  book: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #222;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  background: #222;
  color: #fff;
  cursor: pointer;

  &:hover {
    scale: 1.01;
    box-shadow: 4px 4px 8px 0px rgba(34, 34, 34, 0.8);
    transition: 0.2s;
  }

  &__img {
    min-width: 150px;
  }
}

.info {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 20px;
  width: 100%;

  &__description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
