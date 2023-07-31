<template>
  <div class="favorites">
    <PageSidebar />
    <h1>Избранные книги</h1>
    <div class="cards">
      <CardBook v-for="book in favoriteBooks" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script setup>
import store from "@/store";
import { onMounted, ref } from "vue";
import CardBook from "@/components/CardBook.vue";
import PageSidebar from "@/components/layouts/PageSidebar.vue";

onMounted(async () => {
  await favoriteBooks;
});

const favoriteBooks = ref(store.getters.favoriteBooks);

console.log(favoriteBooks);
</script>

<style lang="scss" scoped>
.favorites {
  position: relative;
}
.cards {
  width: 85%;
  margin-left: 200px;
  position: absolute;
  top: 70px;
  right: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
</style>
