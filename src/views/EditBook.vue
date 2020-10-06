<template>
  <BookForm
    :initialTitle="book.title"
    :initialDescription="book.description"
    :submitButtonText="$t('form.save')"
    @submit="save"
  />
</template>
<script>
import BookForm from "../components/BookForm";

export default {
  name: "AddBook",
  components: { BookForm },
  computed: {
    book() {
      const book = this.$store.getters.getBook({
        id: this.$route.params.id,
        collection: this.$route.params.in,
      });
      return book;
    },
  },
  methods: {
    save(title, description) {
      this.$store.dispatch("updateBook", {
        newBook: { id: this.book.id, title, description },
        collection: this.$route.params.in,
      });
      this.$router.push({
        name: this.$route.params.in === "read" ? "Home" : "Wishlist",
      });
    },
  },
};
</script>
