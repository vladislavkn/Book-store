<template>
  <form @submit.prevent="submit" class="space-y-4">
    <label class="InputText flex">
      <input
        class="flex-grow"
        type="text"
        placeholder="Book title"
        @input="handleSearchInput"
        list="suggestions"
        :value="search"
      />
      <div class="Loader" v-if="isLoading"></div>
    </label>
    <datalist id="suggestions">
      <option
        v-for="suggestion in suggestions"
        :key="suggestion.id"
        :value="suggestion.title"
      ></option>
    </datalist>
    <fieldset class="flex relative">
      <div
        class="w-1/2 absolute top-0 bottom-0 rounded duration-150 left-0 border border-teal-600 bg-teal-100"
        :class="{ 'left-1/2': isRead }"
      ></div>
      <label class="px-4 py-2 text-center flex-grow relative z-10">
        Not read yet
        <input
          type="radio"
          class="hidden"
          name="isRead"
          :checked="!isRead"
          @change="isRead = false"
        />
      </label>
      <label class="px-4 py-2 text-center flex-grow relative z-10">
        Already Read
        <input
          type="radio"
          class="hidden"
          name="isRead"
          :checked="isRead"
          @change="isRead = true"
        />
      </label>
    </fieldset>
    <div class="flex justify-between items-center">
      <slot name="message" />
      <button
        type="submit"
        class="Button Button__primary"
        :disabled="!canSubmit"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    isRead: false,
  }),
  props: {
    search: {
      type: String,
      required: true,
    },
    suggestions: {
      type: Array,
      required: true,
    },
    canSubmit: {
      type: Boolean,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleSearchInput($event) {
      this.$emit("search", $event.target.value);
    },
    submit() {
      if (!this.canSubmit) return;
      this.$emit("submit", {
        search: this.search,
        isRead: this.isRead,
      });
    },
  },
};
</script>

<style>
.left-1\/2 {
  left: 50%;
}
.Loader {
  @apply border-2 border-gray-400 rounded-full;
  border-top: 2px solid #2d3748;
  width: 1.5rem;
  height: 1.5rem;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
