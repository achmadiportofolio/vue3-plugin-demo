<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { inject } from 'vue'
const logout = inject('pluginLogout')
</script>

<template>
  <my-header>
    <template #title>
        title of Header <i> testttt </i>
    </template>
    <template #author>
        implement nama Auhtor <i> testtt</i>
    </template>
  </my-header>
  <p v-font-size-dir:small>directive small font </p>
  <p v-font-size-dir:large>directive large font </p>
  <p v-font-size-dir>directive defautl font </p>
  <p  @click="logout"> logout </p>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
