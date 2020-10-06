<template>
  <div id="app" class="flex flex-col h-full">
    <Navbar />
    <div class="navbar-placeholder" />
    <router-view class="router-view w-screen" />
    <ActionSheet />
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import ActionSheet from "./components/ActionSheet";

export default {
  components: { Navbar, ActionSheet },
};
</script>
<style>
html * {
  max-height: 1000000px;
}

html {
  text-size-adjust: none;
  -ms-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
}

html,
body {
  height: 100%;
}

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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none !important;
}
</style>
