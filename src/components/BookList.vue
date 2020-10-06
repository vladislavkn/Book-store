<template>
  <div>
    <BookItem
      v-for="book in books"
      :key="book.id"
      v-bind="book"
      @click="$emit('press-book', book.id)"
    />
    <div v-if="!books.length" class="pt-10 p-4 flex flex-col items-center">
      <img src="@/assets/img/books-illustration.svg" alt="books" width="128" />
      <h6 class="pt-6 text-gray-600 text-center">
        {{ $t("noBooks") }}
      </h6>
    </div>
    <AddBookButton :route="buttonRoute" />
  </div>
</template>
<script>
import BookItem from "../components/BookItem";
import AddBookButton from "../components/AddBookButton";

export default {
  name: "BookList",
  props: {
    books: {
      type: Array,
      required: true,
    },
    buttonRoute: {
      type: Object,
      default: () => ({ name: "Add-book", params: { to: "wishlist" } }),
    },
  },
  components: { BookItem, AddBookButton },
};
</script>
