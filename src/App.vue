<template>
  <div id="app">
    <div id="app-header">
      <main-header></main-header>
    </div>

    <div id="app-views">
      <router-view></router-view>
    </div>

    <div id="app-footer">
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
export default {

  name: 'App',

  components:{
    MainHeader,
  },
}
</script>

<style>
@import './App.css';
</style>
