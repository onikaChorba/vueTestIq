<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
const showMenu = ref(true);
const navBarShow = ref(true)
</script>

<template>
  <header>
      <button class="closeButton" @click="showMenu = !showMenu">
        <img v-if="showMenu" src="@/components/icons/menu.png" alt="menu" class="headerIcon"/>
        <img v-else src="@/components/icons/icon-5.png" alt="close" class="headerIcon"/>
      </button>
      <nav class="navBar">
        <RouterLink to="/" class="navLink">Главная</RouterLink>
        <RouterLink to="/about" class="navLink">Информация о тесте</RouterLink>
        <RouterLink to="/test" class="navLink">пройти тест</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  min-height: 100vh;
  background: #181818;
  display: block;
  flex-direction: column;
}
.closeButton{
  width: 28px;
  height: 28px;
  margin-top: 13px;
}
.headerIcon{
  width: 28px;
  height: 28px;
}
.navBar {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  padding-top: 110px;
  padding-left: 23px;
}
.navLink{
  color: white;
  padding-bottom: 27px;
}
.navLink:hover{
  color: #F4CE0C;
}
nav a.router-link-exact-active {
  color: #F4CE0C;
}

</style>
