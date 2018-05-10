<template>
  <div id="app">
        <side-bar></side-bar>
         <router-view/>
  </div>
</template>

<script>
import Sidebar from "@/components/admin/sidebar/Sidebar.vue";
export default {
  components: {
    "side-bar": Sidebar
  },
  name: "App"
};
</script>

<style>
#app {
  height: 100vh;
  display: table;
  width: 100%;
  position: relative;
}
</style>
