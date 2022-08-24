<template>
  <div class="Toggle" :class="className">
    <div
      class="Toggle__thumb"
      :class="{ Toggle__thumb_right: value === right }"
    >
      <div class="Toggle__thumbHighlight"></div>
    </div>
    <div @click="$emit('input', left)" class="Toggle__item Toggle__left">
      {{ left }}
    </div>
    <div @click="$emit('input', right)" class="Toggle__item Toggle__right">
      {{ right }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Toggle",
  props: {
    value: {
      type: String,
      reqired: true,
    },
    left: {
      type: String,
      required: true,
    },
    right: {
      type: String,
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
.Toggle {
  @apply border border-gray-600 rounded relative flex w-full;
}

.Toggle__thumb {
  @apply absolute top-0 bottom-0 left-0 w-1/2 duration-75 p-1;
}

.Toggle__thumbHighlight {
  @apply w-full h-full bg-gray-300 rounded;
}

.Toggle__thumb_right {
  left: 50%;
}

.Toggle__item {
  @apply px-1 py-2 relative z-10 text-center w-1/2 select-none cursor-pointer;
}
</style>
