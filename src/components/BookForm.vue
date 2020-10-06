<template>
  <form
    @submit.prevent="submit"
    class="flex flex-col flex-grow p-4 lg:mx-auto lg:w-1/3"
  >
    <input
      v-model="title"
      type="text"
      class="w-full p-3 text-xl text-gray-700 border-b border-transparent font-body font-semibold"
      :class="{ 'border-red-500 bg-red-100': error }"
      :placeholder="$t('form.title')"
    />
    <input
      v-model="description"
      class="w-full p-3 text-gray-700 text-lg font-body resize-none"
      :placeholder="$t('form.description')"
    />
    <div class="flex flex-grow lg:flex-grow-0 lg:h-8"></div>
    <button
      class="w-full p-3 bg-gray-600 active:bg-gray-700 text-white text-sm uppercase rounded duration-300"
    >
      {{ submitButtonText }}
    </button>
  </form>
</template>
<script>
export default {
  name: "BookForm",
  props: {
    initialTitle: {
      type: String,
      default: "",
    },
    initialDescription: {
      type: String,
      default: "",
    },
    submitButtonText: {
      type: String,
    },
  },
  data: () => ({
    title: "",
    description: "",
    error: false,
  }),
  watch: {
    title(value) {
      this.error = value.length ? false : true;
    },
  },
  mounted() {
    this.title = this.initialTitle;
    this.description = this.initialDescription;
  },
  methods: {
    submit() {
      if (this.title.length) {
        this.$emit("submit", this.title, this.description);
        this.title = "";
        this.description = "";
      }
    },
  },
};
</script>
