<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/favorites">Избранные книги</router-link>
  </nav>
  <router-view />
</template>

<style>
body {
  background: rgb(44, 43, 43);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #284d72;
}

nav a.router-link-exact-active {
  color: #4258b9;
}
</style>
