<template>
  <div class="catalog">
    <PageHeader />
    <CatalogAllBooks />
  </div>
</template>

<script setup>
// @ is an alias to /src
import CatalogAllBooks from "@/components/CatalogAllBooks.vue";
import PageHeader from "@/components/layouts/PageHeader.vue";
</script>
