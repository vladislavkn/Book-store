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
      <AddBookForm
        :suggestions="suggestions"
        :canSubmit="!!selectedBook"
        :isLoading="isLoading"
        :search="search"
        @search="handleSearchInput"
        @submit="submit"
      >
        <template v-slot:message>
          <div class="text-xs text-gray-600">
            <span v-if="isLoading">Loading...</span>
            <span class="text-red-400" v-else-if="booksNotFound"
              >Could not find books</span
            >
            <span v-else-if="!selectedBook"
              >Select title from suggested to continue</span
            >
          </div>
        </template>
      </AddBookForm>
    </div>
  </LayoutEmpty>
</template>

<script>
import LayoutEmpty from "../components/LayoutEmpty.vue";
import { searchBookByTitle } from "../services/booksApi";
import debounced from "../utils/debounced";
import AddBookForm from "../components/AddBookForm.vue";

export default {
  name: "AddBook",
  components: { LayoutEmpty, AddBookForm },
  data: () => ({
    search: "",
    suggestions: [],
    isLoading: false,
  }),
  computed: {
    booksNotFound() {
      return this.suggestions.length === 0 && !this.isLoading && this.search;
    },
    selectedBook() {
      return this.suggestions.find((book) => book.title === this.search);
    },
  },
  methods: {
    submit({ isRead }) {
      this.$store.dispatch("addBookFromForm", {
        isRead,
        ...this.selectedBook,
      });
      this.$router.push("/");
    },
    handleSearchInput(search) {
      this.search = search;
      if (this.search && !this.selectedBook) {
        this.isLoading = true;
        this.fetchSuggestions(this.search)
          .then((suggestions) => {
            this.suggestions = suggestions;
          })
          .catch((error) => {
            this.$toast.open({
              message: error?.message ?? "Something went wrong",
              type: error,
            });
          })
          .finally(() => {
            this.isLoading = false;
          });
      }
    },
    fetchSuggestions: debounced(searchBookByTitle, 500),
  },
};
</script>
