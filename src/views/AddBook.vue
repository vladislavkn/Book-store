<template>
  <BookForm @submit="save" :submitButtonText="$t('form.add')" />
</template>
<script>
import BookForm from "../components/BookForm";

export default {
  name: "AddBook",
  components: { BookForm },
  methods: {
    save(title, description) {
      this.$store.dispatch("addBook", {
        collection: this.$route.params.to,
        title,
        description,
      });
      this.$router.push({
        name: this.$route.params.to === "read" ? "Home" : "Wishlist",
      });
    },
  },
};
</script>
