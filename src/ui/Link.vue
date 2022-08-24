<template>
  <a v-if="global" :href="to" class="Link Link_global" :class="className">
    <slot></slot>
  </a>
  <router-link v-else :to="to" class="Link" :class="className">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "Link",
  props: {
    global: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.Link {
  @apply text-blue-600 flex items-center justify-center gap-1;
}

.Link_global {
  @apply underline;
}
</style>
