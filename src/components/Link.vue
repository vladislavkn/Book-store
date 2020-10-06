<template>
  <router-link :to="to" v-slot="{ href, navigate, isExactActive }">
    <li
      :class="[
        isExactActive ? 'text-black' : 'text-gray-600',
        first && 'mr-4',
        'font-body font-semibold',
      ]"
    >
      <a :href="href" @click="navigate">
        {{ text }}
      </a>
    </li>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      required: true,
    },
    first: Boolean,
    text: String,
  },
};
</script>
