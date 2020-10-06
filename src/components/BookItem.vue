<template>
  <div
    @click="$emit('click')"
    class="p-4 border-b border-gray-200 hover:bg-gray-100"
  >
    <h6 class="text-lg font-semibold font-body">{{ title }}</h6>
    <p
      v-if="description && description.length"
      class="mt-2 text-sm font-body text-gray-700 leading-5"
    >
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: {
    title: String,
    description: String,
  },
};
</script>
