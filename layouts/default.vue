<template>
  <div>
    <TheHeader @sideNavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false"/>
    <nuxt/>
  </div>
</template>

<script lang="js">
import TheHeader from '@/components/Nav/TheHeader';
import TheSidenav from '@/components/Nav/TheSidenav';

export default{
  //middleware: 'log'
  components: {
    TheHeader, TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    }
  },
}
</script>

<style>
html{
  font-family: 'Open Sans', sans-serif;
}
body{
  margin: 0;
}
</style>
