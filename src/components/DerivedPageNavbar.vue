<template>
  <nav class="flex justify-between items-center" :class="className">
    <Link :to="{ name: 'Home' }">
      <ArrowLeftIcon></ArrowLeftIcon> Go back
    </Link>
    <div class="flex gap-2">
      <slot></slot>
    </div>
  </nav>
</template>

<script>
import Link from "../ui/Link.vue";
import { ArrowLeftIcon } from "vue-feather-icons";

export default {
  components: { Link, ArrowLeftIcon },
  props: {
    className: {
      type: String,
      default: "mb-4",
    },
  },
};
</script>
