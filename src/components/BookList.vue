<template>
  <div>
    <BookCard
      v-for="book in books"
      :key="book.id"
      :date="book.dateRead"
      :title="book.title"
      @click="$emit('select', book.id)"
    />
  </div>
</template>

<script>
import BookCard from "../ui/BookCard.vue";

export default {
  name: "BookList",
  components: { BookCard },
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
};
</script>
