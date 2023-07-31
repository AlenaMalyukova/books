<template>
  <nav class="nav">
    <router-link class="nav-link" to="/catalog">
      <img class="nav-link__img" src="@/assets/images/magic-wand.png" alt="" />
      Главная
    </router-link>
    <router-link class="nav-link" to="/favorites">
      Избранные книги
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &-link {
    padding: 0 10px;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  &-link__img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}
</style>
