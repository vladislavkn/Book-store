<template>
  <BookList
    :books="read"
    :buttonRoute="{ name: 'Add-book', params: { to: 'read' } }"
    @press-book="showActionSheetForBook"
  />
</template>

<script>
import EventBus from "../utils/EventBus.js";
import BookList from "../components/BookList";
import { mapState } from "vuex";

export default {
  name: "Books",
  components: { BookList },
  computed: mapState(["read"]),
  methods: {
    showActionSheetForBook(id) {
      EventBus.$emit("actionSheet.show", {
        [this.$t("actions.moveToWishlist")]: () =>
          this.$store.dispatch("moveBook", {
            from: "read",
            to: "wishlist",
            id,
          }),
        [this.$t("actions.edit")]: () =>
          this.$router.push({
            name: "Edit-book",
            params: {
              id,
              in: "read",
            },
          }),
        [this.$t("actions.delete")]: () =>
          this.$store.commit("removeBook", { collection: "read", id }),
      });
    },
    switchToWishList() {
      alert("swipe");
      this.$router.push("/wish-list");
    },
  },
};
</script>
