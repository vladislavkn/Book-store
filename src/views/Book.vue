<template>
  <div class="px-2 py-4 max-w-sm mx-auto">
    <DerivedPageNavbar>
      <Button @click="handleToggleEditMode" variant="icon">
        <SaveIcon v-if="isEditMode"></SaveIcon>
        <EditIcon v-else></EditIcon>
      </Button>
      <Button @click="handleRemoveBook" variant="icon">
        <TrashIcon></TrashIcon>
      </Button>
    </DerivedPageNavbar>
    <template v-if="book">
      <Typography variant="title1" className="mb-4">
        {{ book.title }}
      </Typography>
      <Typography variant="caption" className="mb-1">Date read</Typography>
      <div class="mb-4">
        <div v-if="isEditMode" class="flex gap-2">
          <Input
            placeholder="Date read"
            type="date"
            v-model="updatedDate"
          ></Input>
          <Button @click="handleClearDate" variant="secondary">Очистить</Button>
        </div>

        <Typography v-else variant="body">
          {{ formattedDate }}
        </Typography>
      </div>
      <Typography variant="caption" className="mb-1">Author</Typography>
      <Typography variant="body" className="mb-4">{{ book.author }}</Typography>
      <Typography variant="caption" className="mb-1">Status</Typography>
      <Typography variant="body">
        {{ book.isRead ? "Read" : "Not read yet" }}
      </Typography>
    </template>
    <Skeleton v-else template="lg md md"></Skeleton>
  </div>
</template>
<script>
import Typography from "../ui/Typography.vue";
import { TrashIcon, EditIcon, SaveIcon } from "vue-feather-icons";
import Input from "../ui/Input.vue";
import DerivedPageNavbar from "../components/DerivedPageNavbar.vue";
import { formatDateForInput, formatDate } from "../utils/formatDate";
import Button from "../ui/Button.vue";
import Skeleton from "../ui/Skeleton.vue";

export default {
  components: {
    Typography,
    Button,
    TrashIcon,
    EditIcon,
    SaveIcon,
    Input,
    DerivedPageNavbar,
    Skeleton,
  },
  data: () => ({
    isEditMode: false,
    updatedDate: "",
  }),
  computed: {
    formattedDate() {
      return formatDate(this.book?.dateRead);
    },
    book() {
      const bookId = this.$route.params.id;
      return this.$store.getters.getBookById(bookId);
    },
  },
  methods: {
    async handleRemoveBook() {
      const id = this.$route.params.id;
      await this.$store.dispatch("removeBook", { id });
      this.$router.push({ name: "Home" });
    },
    handleClearDate() {
      this.updatedDate = "";
      this.handleToggleEditMode();
    },
    handleToggleEditMode() {
      if (!this.book) return;

      this.isEditMode = !this.isEditMode;
      if (this.isEditMode) {
        this.updatedDate = formatDateForInput(this.book.dateRead);
      } else {
        this.$store.dispatch("setBookDateRead", {
          id: this.book.id,
          dateRead: this.updatedDate,
        });
      }
    },
  },
  async mounted() {
    const id = this.$route.params.id;
    await this.$store.dispatch("fetchBookById", { id });
  },
};
</script>
