<template>
  <div class="catalog">
    <h1>Все книги о Гарри Поттере</h1>
    <div class="cards">
      <CardBook v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import store from "@/store";
import CardBook from "@/components/CardBook.vue";

const loadBooks = async () => {
  await store.dispatch("loadAllBooks");
};

onMounted(async () => {
  await loadBooks();
});

const books = ref(store.getters.allBooks);
</script>

<style scoped>
.cards {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
</style>
