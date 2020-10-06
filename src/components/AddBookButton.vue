<template>
  <div class="fixed right-6 bottom-6 shadow-material rounded-full">
    <button
      class="w-13 h-13 block bg-gray-600 active:bg-gray-700 duration-300 rounded-full text-white text-2xl"
      @click="openLink"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "AddBookButton",
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openLink() {
      this.$router.push(this.route);
    },
  },
};
</script>
