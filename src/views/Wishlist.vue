<template>
  <Layout>
    <BookList
      :books="wishlist"
      :buttonRoute="{ name: 'Add-book', params: { to: 'wishlist' } }"
      @press-book="showActionSheetForBook"
    />
  </Layout>
</template>

<script>
import EventBus from "../utils/EventBus.js";
import BookList from "../components/BookList";
import { mapState } from "vuex";
import Layout from "../components/Layout.vue";

export default {
  components: {
    BookList,
    Layout,
  },
  computed: mapState(["wishlist"]),
  methods: {
    showActionSheetForBook(id) {
      EventBus.$emit("actionSheet.show", {
        [this.$t("actions.moveToRead")]: () =>
          this.$store.dispatch("moveBook", {
            from: "wishlist",
            to: "read",
            id,
          }),
        [this.$t("actions.edit")]: () =>
          this.$router.push({
            name: "Edit-book",
            params: {
              id,
              in: "wishlist",
            },
          }),
        [this.$t("actions.delete")]: () =>
          this.$store.commit("removeBook", { collection: "wishlist", id }),
      });
    },
  },
};
</script>
