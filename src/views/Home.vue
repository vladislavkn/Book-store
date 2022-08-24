<template>
  <div class="mx-auto max-w-sm">
    <div class="px-2 py-4 flex gap-2">
      <div class="max-w-xs w-full">
        <Toggle
          left="Read"
          right="Unread"
          :value="showRead ? 'Read' : 'Unread'"
          @input="setShowRead($event === 'Read')"
        ></Toggle>
      </div>
      <router-link :to="{ name: 'Profile' }">
        <Button variant="icon"><UserIcon></UserIcon></Button>
      </router-link>
      <router-link :to="{ name: 'Add' }">
        <Button variant="icon"><PlusIcon></PlusIcon></Button>
      </router-link>
    </div>
    <BookList :books="filteredBooks" @select="handleSelectBook"></BookList>
    <div v-if="filteredBooks.length === 0" class="px-2 py-4">
      <Skeleton v-if="!getLoaded" template="lg lg lg"></Skeleton>
      <Typography v-else>No books to show</Typography>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Toggle from "../ui/Toggle.vue";
import Button from "../ui/Button.vue";
import { UserIcon, PlusIcon } from "vue-feather-icons";
import BookList from "../components/BookList.vue";
import Skeleton from "../ui/Skeleton.vue";
import Typography from "../ui/Typography.vue";

export default {
  components: {
    Toggle,
    Button,
    UserIcon,
    PlusIcon,
    BookList,
    Skeleton,
    Typography,
  },
  computed: mapGetters(["filteredBooks", "showRead", "getLoaded"]),
  methods: {
    ...mapMutations(["setShowRead"]),
    handleSelectBook(id) {
      this.$router.push({ name: "Book", params: { id } });
    },
  },
  mounted() {
    this.$store.dispatch("fetchUserBooks");
  },
};
</script>
