<template>
  <div class="card-book">
    <h2 class="card-book__title">{{ book.volumeInfo?.title }}</h2>
    <div class="book-info">
      <img
        class="book-info__img"
        v-if="book.volumeInfo?.imageLinks?.medium"
        :src="book.volumeInfo?.imageLinks?.medium"
        alt="image"
      />
      <img
        class="book-info__img"
        v-else
        src="@/assets/images/open-book.png"
        alt="image"
      />
      <div class="info-wrap">
        <div class="info">
          <span>Автор: </span>
          <span v-for="author in book.volumeInfo?.authors" :key="author">
            {{ author }}
          </span>
        </div>
        <div class="rating-info" v-if="book.volumeInfo?.averageRating">
          <div class="info">
            Средний рейтинг: {{ book.volumeInfo?.averageRating }}
          </div>
          <div class="info-sub">
            (Кол-во оценок: {{ book.volumeInfo?.ratingsCount }})
          </div>
        </div>
        <div class="info" v-if="book.volumeInfo?.categories">
          <span>Категории: </span>
          <span v-for="category in book.volumeInfo?.categories" :key="category">
            {{ category }}
          </span>
        </div>
        <div class="publish-info">
          <div class="info" v-if="book.volumeInfo?.publisher">
            Издатель: {{ book.volumeInfo?.publisher }}
          </div>
          <div class="info" v-if="book.volumeInfo?.publishedDate">
            Дата издания: {{ book.volumeInfo?.publishedDate }}
          </div>
        </div>
        <div class="info" v-if="book.volumeInfo?.pageCount">
          Количество страниц: {{ book.volumeInfo?.pageCount }}
        </div>
        <div class="info">
          <span v-if="book.saleInfo?.saleability === 'FOR_SALE'">
            {{ book.saleInfo?.listPrice?.amount }} руб.
          </span>
          <span class="text-danger" v-else> Не для продажи </span>
        </div>
      </div>
    </div>
    <div class="card-book__description" v-if="book.volumeInfo?.description">
      <span class="info">Описание:</span> <br />
      <span v-html="book.volumeInfo?.description"></span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card-book {
  width: 85%;
  margin-left: 170px;
  background: #222222b0;
  padding: 20px 50px;
  border-radius: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__description {
    font-size: 16px;
    text-align: left;
  }
}

.book-info {
  display: flex;
  padding-bottom: 10px;

  &__img {
    max-width: 200px;
    margin-right: 15px;
    flex-grow: 1;
    flex-shrink: 0;
  }
}

.info {
  font-size: 16px;
  padding: 5px 0;
  text-align: left;
}

.rating-info {
  display: flex;
  align-items: center;
}

.info-sub {
  font-size: 14px;
  color: #e7e7e7;
  padding-left: 50px;
}

.text-danger {
  color: #f36565ad;
}
</style>
