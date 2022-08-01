<template>
  <div class="container mx-auto px-2">
    <Navbar :isRead="showRead" @toggleRead="setShowRead($event)" />
    <div class="h-8"></div>
    <div class="OverflowWrapper">
      <table
        class="Table"
        :class="{ Table_showRead: showRead, Table_showUnread: !showRead }"
      >
        <thead class="uppercase text-xs font-bold">
          <tr>
            <td class="Table__bookColumn">Book</td>
            <td class="Table__authorColumn">Author</td>
            <td class="Table__dateColumn" v-if="showRead">Date read</td>
            <td class="Table__actionsColumn">Actions</td>
          </tr>
        </thead>
        <tr v-for="book in filteredBooks" :key="book.id" class="Table__bookRow">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td v-if="showRead">
            {{ new Date(book.dateRead).toLocaleDateString("ru-ru") }}
          </td>
          <td>
            <div class="flex flex-wrap gap-2">
              <button
                @click="handleSetBookDateRead(book.id)"
                class="ActionButton"
              >
                Set read date
              </button>
              <button @click="handleRemoveBook(book.id)" class="ActionButton">
                Remove
              </button>
              <button
                v-if="showRead"
                @click="handleRemoveDateRead(book.id)"
                class="ActionButton"
              >
                To unread
              </button>
            </div>
          </td>
        </tr>
        <tr v-if="filteredBooks.length === 0">
          <td class="py-4 text-gray-600" colspan="4">No books</td>
        </tr>
      </table>
    </div>
    <div class="h-10"></div>
    <footer
      class="border-t border-gray-400 h-10 flex items-center fixed bottom-0 left-0 w-full"
    >
      <div class="container mx-auto px-2 flex justify-end">
        <router-link to="/add" class="text-blue-600 text-lg"
          >Add new book</router-link
        >
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
  computed: mapGetters(["filteredBooks", "showRead"]),
  methods: {
    ...mapMutations(["setShowRead"]),
    ...mapActions(["setBookDateRead", "removeBook"]),
    handleSetBookDateRead(id) {
      this.setBookDateRead({ id, dateRead: Date.now() });
    },
    handleRemoveBook(id) {
      this.removeBook({ id });
    },
    handleRemoveDateRead(id) {
      this.setBookDateRead({ id, dateRead: undefined });
    },
  },
};
</script>

<style>
.OverflowWrapper {
  max-width: 100%;
  overflow-x: scroll;
}

.Table {
  min-width: 40rem;
  width: 100%;
}

table td {
  @apply align-top p-2;
}

table tr:nth-child(2n) {
  @apply bg-gray-100;
}

.Table td {
  word-wrap: break-word;
}

.Table__bookColumn {
  width: 20%;
}

.Table__actionsColumn {
  width: 20%;
}

.Table__dateColumn {
  width: 20%;
}

.Table_showRead .Table__authorColumn {
  width: 30%;
}

.Table_showUnread .Table__authorColumn {
  width: 50%;
}

.ActionButton {
  @apply bg-white py-1 px-2 text-sm shadow rounded;
}
</style>
