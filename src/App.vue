<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'quasar-framework/dist/quasar.ie.polyfills'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/fontawesome'
import './styles/quasar.mat.styl'
// import './styles/quasar.ios.styl'

export default {
  name: 'app'
}
</script>

<style>
</style>
