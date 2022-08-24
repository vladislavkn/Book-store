<template>
  <div class="flex flex-col gap-4" :class="className">
    <div
      v-for="(size, index) in template.split(' ')"
      :key="index"
      class="Skeleton"
      :class="`Skeleton_${size}`"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    template: {
      type: String,
      default: "sm",
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.Skeleton {
  @apply w-full bg-gray-300 animate-pulse;
}

.Skeleton_sm {
  @apply h-4 rounded;
}

.Skeleton_md {
  @apply h-8 rounded;
}

.Skeleton_lg {
  @apply h-16 rounded-md;
}
</style>
