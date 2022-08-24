<template>
  <div @click="$emit('click')" class="BookCard" :class="className">
    <div class="BookCard__content">
      <Typography v-if="date" variant="caption" className="mb-1">
        {{ formattedDate }}
      </Typography>
      <Typography variant="title2">{{ title }}</Typography>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../utils/formatDate";
import Typography from "./Typography.vue";

export default {
  name: "BookCard",
  components: { Typography },
  props: {
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    formattedDate() {
      return formatDate(this.date);
    },
  },
};
</script>

<style>
.BookCard {
  @apply pl-2  duration-75 w-full;
}

.BookCard__content {
  @apply pr-2 pt-4 pb-2;
}

.BookCard:not(:last-child) .BookCard__content {
  @apply border-b border-gray-300;
}

.BookCard:active {
  @apply opacity-75;
}
</style>
