<template>
  <router-view />
</template>

<style>
body {
  background: rgb(44, 43, 43);
  margin: 0;
  padding: 0;
  transition: 0.5s;
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
