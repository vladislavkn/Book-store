<template>
  <Layout>
    <BookForm @submit="save" :submitButtonText="$t('form.add')" />
  </Layout>
</template>
<script>
import BookForm from "../components/BookForm";
import Layout from "../components/Layout.vue";

export default {
  name: "AddBook",
  components: { BookForm, Layout },
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
