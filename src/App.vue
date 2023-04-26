<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, computed } from "vue";
const showMenu = ref(false);
const headerClass = computed(() => ({
  header: showMenu.value,
  headerTwo: !showMenu.value,
}));
const navBarClass = computed(() => ({
  navBar: showMenu.value,
  navBarTwo: !showMenu.value,
}));
const menuButtonClass = computed(() => ({
  menuButton: showMenu.value,
  menuButtonTwo: !showMenu.value,
}));
function changeHeaderStyle() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  <header :class="headerClass">
    <div :class="menuButtonClass">
      <button @click="changeHeaderStyle">
        <img
          v-if="showMenu"
          src="@/components/icons/icon-5.png"
          alt="close"
          class="close"
        />
        <img v-else src="@/components/icons/menu.png" alt="menu" class="menu" />
      </button>
    </div>
    <nav :class="navBarClass">
      <RouterLink to="/" class="navLink">Главная</RouterLink>
      <RouterLink to="/about" class="navLink">Информация о тесте</RouterLink>
      <RouterLink to="/test" class="navLink">пройти тест</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
.header {
  width: 100%;
  min-height: 100vh;
  background: #181818;
  display: block;
  flex-direction: column;
}
.headerTwo {
  height: 46px;
  background: #181818;
}
.menuButton {
  display: flex;
  justify-content: end;
}
.menuButtonTwo {
  justify-content: start;
}
.menu {
  width: 24px;
  margin-left: 13px;
  margin-top: 13px;
}
.close {
  margin-top: 13px;
  margin-right: 13px;
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
.navBarTwo {
  display: none;
}
.navLink {
  color: white;
  padding-bottom: 27px;
}
.navLink:hover {
  color: #f4ce0c;
}
nav a.router-link-exact-active {
  color: #f4ce0c;
}
</style>
