<template>
  <div>
    {{ manager.efAccountId }}
    <button type="button" v-on:click="changeEmail(manager.efAccountId)">
      Change Email
    </button>
    <button type="button" v-on:click="deleteManager(manager.efAccountId)">
      Delete Manager
    </button>
  </div>
</template>

<script>
import store from "../Store/store.js";
export default {
  name: "Manager",
  props:{
      manager: Object,
  },
  store,
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
