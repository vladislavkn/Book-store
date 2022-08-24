<template>
  <input
    :type="type"
    :value="value"
    :placeholder="placeholder"
    :class="`Input ${className}`"
    @input="$emit('input', $event.target.value)"
  />
</template>
<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
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
.Input {
  @apply px-4 py-2 border border-gray-600 rounded w-full block;
}
</style>
