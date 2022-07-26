<template>
  <div class="container">
    <Navbar />
    <div class="navbar-placeholder" />
    <div class="router-view w-screen">
      <slot />
    </div>
    <ActionSheet />
  </div>
</template>

<script>
import ActionSheet from "./ActionSheet.vue";
import Navbar from "./Navbar.vue";

export default {
  components: { ActionSheet, Navbar },
};
</script>

<style>
.navbar-placeholder {
  height: 108px;
}

.router-view {
  max-height: calc(100% - 108px);
  overflow-y: auto;
}

@media (min-width: 1024px) {
  .navbar-placeholder {
    height: 56px;
  }
  .router-view {
    max-height: calc(100% - 56px);
  }
}
</style>
