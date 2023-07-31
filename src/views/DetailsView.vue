<template>
  <div class="details">
    <div class="background" />
    <div class="content">
      <PageSidebar />
      <CardDetailBook :book="book" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { getAgent } from "@/api";
import PageSidebar from "@/components/layouts/PageSidebar.vue";
import CardDetailBook from "@/components/CardDetailBook.vue";

const route = useRoute();

const bookId = route.params.id;

const agent = getAgent();

const book = ref({});

onMounted(async () => {
  try {
    book.value = await agent.getBookById(bookId);
  } catch (err) {
    console.log(err);
  }
});
</script>

<style lang="scss" scoped>
.details {
  position: relative;
  padding: 50px 0;
  box-sizing: border-box;
  min-height: 100vh;
}

.background {
  background-image: url("../assets/images/detail-page-bg.jpg");
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
}

.content {
  position: relative;
  z-index: 5;
}
</style>
