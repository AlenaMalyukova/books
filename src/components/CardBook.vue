<template>
  <div class="card-wrapper">
    <router-link class="link" :to="'/book/' + book.id">
      <div class="card">
        <img
          v-if="book.volumeInfo.imageLinks?.thumbnail"
          class="card__img"
          :src="book.volumeInfo.imageLinks?.thumbnail"
          alt=""
        />
        <img
          v-else
          class="card__img"
          src="@/assets/images/open-book.png"
          alt=""
        />
        <div class="info">
          <h5 class="info__title">{{ book.volumeInfo.title }}</h5>
          <p v-if="book.volumeInfo.description" class="info__description">
            {{ book.volumeInfo.description }}
          </p>
          <p v-else>Нет описания</p>
        </div>
      </div>
    </router-link>
    <div class="like">
      <AddToFavoritesBtn
        :isActive="isFavorite(book)"
        @click="toggleFavorites(book, id)"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import store from "@/store";
import AddToFavoritesBtn from "@/components/features/AddToFavoritesBtn.vue";

defineProps({
  book: {
    type: Object,
    required: true,
  },
});

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
.card-wrapper {
  position: relative;
}
.card {
  border: 1px solid #222;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  background: #222;
  cursor: pointer;

  &:hover {
    scale: 1.01;
    box-shadow: 4px 4px 8px 0px rgba(34, 34, 34, 0.8);
    transition: 0.2s;
  }

  &__img {
    min-width: 150px;
    max-width: 150px;
    height: 200px;
  }
}

.link {
  text-decoration: none;
  color: #fff;
}
.info {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 20px;
  width: 100%;

  &__title {
    max-width: 90%;
  }

  &__description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.like {
  position: absolute;
  z-index: 2;
  top: 29px;
  right: 15px;
}
</style>
