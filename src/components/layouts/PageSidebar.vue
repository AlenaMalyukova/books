<template>
  <div :class="isMenuVisible ? 'sidebar' : 'sidebar sidebar_hidden'">
    <img
      class="sidebar__img"
      @click="openMenu"
      src="../../assets/images/castle.png"
      alt="menu"
    />
    <div :class="isMenuVisible ? 'menu menu_visible' : 'menu'">
      <button class="link" @click="$router.go(-1)">
        <img class="link__img" src="../../assets/images/amulet.png" alt="" />
        Назад
      </button>
      <router-link class="link" to="/catalog">
        <img class="link__img" src="../../assets/images/hat.png" alt="" />
        Главная
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuVisible = ref(false);

const openMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 0 20px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  background-color: transparent;
  position: fixed;

  &_hidden {
    width: max-content;
  }

  &__img {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
  }
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: -500px;
  transition: 0.5s;
  height: 100vh;

  &_visible {
    margin-left: 0;
    transition: 0.5s;
  }
}

.link {
  background: transparent;
  color: #fff;
  display: flex;
  align-items: flex-end;
  font-size: 20px;
  border: none;
  text-decoration: none;
  padding-bottom: 15px;
  padding-left: 0;
  cursor: pointer;

  :last-child {
    padding-bottom: 0;
  }

  &__img {
    width: 30px;
    height: 30px;
    padding-right: 15px;
  }
}
</style>
