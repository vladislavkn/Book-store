<template>
  <div
    @click="hide"
    class="bg-veil fixed top-0 right-0 left-0 bottom-0 z-20"
    :class="{ hidden: state === 'disabled' }"
  >
    <div
      class="bg-white shadow-mdt fixed bottom-0 left-0 right-0 transition duration-200"
      :class="{
        disactivating: state === 'disactivating',
        active: state === 'active',
      }"
    >
      <h6 class="px-4 pt-4 text-gray-500 text-sm">
        {{ $t("actions.title") }}
      </h6>
      <button
        class="block w-full text-left p-4 border-b border-gray-200 active:bg-gray-100"
        v-for="(handler, key) in actions"
        :key="key"
        @click="handler"
      >
        {{ key }}
      </button>
      <button
        class="block w-full text-left p-4 text-red-400 active:bg-gray-100"
        @click="hide"
      >
        {{ $t("actions.dismiss") }}
      </button>
    </div>
  </div>
</template>

<script>
import EventBus from "../utils/EventBus.js";

export default {
  name: "ActionSheet",
  data: () => ({
    // Array typeof { title: handler() }
    actions: {},
    // State can be 'disabled', 'active' or 'disactivating'
    state: "disabled",
  }),
  created() {
    EventBus.$on("actionSheet.show", this.show);
    EventBus.$on("actionSheet.hide", this.hide);
  },
  methods: {
    show(actions) {
      this.actions = actions;
      this.state = "active";
    },
    hide() {
      this.state = "disactivating";
      setTimeout(() => {
        this.state = "disabled";
      }, 200);
    },
  },
};
</script>

<style scoped>
.disactivating {
  transform: translateY(100%);
}

.active {
  animation: 0.2s ease-in show;
}

@keyframes show {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
