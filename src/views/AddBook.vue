<template>
  <LayoutEmpty>
    <div class="max-w-xs space-y-6">
      <nav class="space-y-3">
        <router-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </router-link>
        <h1 class="text-3xl font-bold text-gray-800 mb-4">
          Add new book to collection
        </h1>
      </nav>
      <form @submit.prevent class="space-y-4">
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
          <div class="text-xs text-gray-600">
            <span v-if="bookNotSelected && suggestions.length"
              >Select title from suggested to continue</span
            >
            <span class="text-red-400" v-if="search && !suggestions.length"
              >Could not find books</span
            >
          </div>
          <button
            type="submit"
            class="Button Button__primary"
            :disabled="bookNotSelected"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  </LayoutEmpty>
</template>

<script>
import LayoutEmpty from "../components/LayoutEmpty.vue";
import { searchBookByTitle } from "../services/booksApi";
import debounced from "../utils/debounced";

export default {
  name: "AddBook",
  components: { LayoutEmpty },
  data: () => ({
    search: "",
    isRead: false,
    suggestions: [],
    isLoading: false,
  }),
  computed: {
    bookNotSelected() {
      const isBookSelected = ~this.suggestions.findIndex(
        (book) => book.title === this.search
      );
      return !isBookSelected;
    },
  },
  methods: {
    handleSearchInput($event) {
      this.search = $event.target.value;
      if (this.search && this.bookNotSelected) {
        this.isLoading = true;
        this.fetchSuggestions(this.search, (suggestions) => {
          this.suggestions = suggestions;
          this.isLoading = false;
        });
      }
    },
    fetchSuggestions: debounced(
      (search, setSuggestions) =>
        searchBookByTitle(search).then(setSuggestions),
      500
    ),
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
