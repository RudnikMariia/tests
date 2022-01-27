<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import MainLayout from "@/layout/MainLayout";

export default {
  name: 'App',
  components: {
    MainLayout
  },
  computed: {
    ...mapGetters(['test'])
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
