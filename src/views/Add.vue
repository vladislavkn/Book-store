<template>
  <div class="px-2 py-4 max-w-sm mx-auto">
    <DerivedPageNavbar></DerivedPageNavbar>
    <Typography variant="title1" className="mb-8">
      Add new book to collection
    </Typography>
    <Input
      :value="search"
      @input="handleSearchInput"
      className="mb-4"
      placeholder="Type book title..."
      autoFocus
    ></Input>
    <Typography variant="caption" className="mb-2">Add to list</Typography>
    <Toggle
      left="read"
      right="Not read yet"
      v-model="destinationList"
      className="mb-4"
    ></Toggle>
    <Typography variant="caption" className="mb-2">Suggestions</Typography>
    <Results
      :values="suggestionTitles"
      :loading="isLoading"
      @select="submit"
    ></Results>
  </div>
</template>

<script>
import { searchBookByTitle } from "../services/booksApi";
import debounced from "../utils/debounced";
import Typography from "../ui/Typography.vue";
import Input from "../ui/Input.vue";
import Results from "../components/Results.vue";
import Toggle from "../ui/Toggle.vue";
import DerivedPageNavbar from "../components/DerivedPageNavbar.vue";

export default {
  name: "AddBook",
  components: {
    Typography,
    Input,
    Results,
    Toggle,
    DerivedPageNavbar,
  },
  data: () => ({
    search: "",
    suggestions: [],
    isLoading: false,
    destinationList: "read",
  }),
  computed: {
    suggestionTitles() {
      return this.suggestions.map((s) => s.title);
    },
  },
  methods: {
    async submit(bookTitle) {
      const book = this.suggestions.find((s) => s.title === bookTitle);
      await this.$store.dispatch("addBook", {
        isRead: this.destinationList === "read",
        ...book,
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
