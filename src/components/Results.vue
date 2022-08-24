<template>
  <div class="Results">
    <template v-if="!loading">
      <template v-if="values.length > 0">
        <div
          v-for="value in values"
          :key="value"
          @click="$emit('select', value)"
          class="Results__item"
        >
          {{ value }}
          <ArrowRightIcon class="Results__icon" size="20"></ArrowRightIcon>
        </div>
      </template>
      <template v-else>
        <div class="Results__notFound">
          <Typography>Nothing was found</Typography>
        </div>
      </template>
    </template>
    <template v-else>
      <Skeleton className="p-4" template="sm sm sm"></Skeleton>
    </template>
  </div>
</template>
<script>
import { ArrowRightIcon } from "vue-feather-icons";
import Typography from "../ui/Typography.vue";
import Skeleton from "../ui/Skeleton.vue";

export default {
  components: { ArrowRightIcon, Typography, Skeleton },
  props: {
    values: {
      type: Array,
      default: () => ["", "", ""],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.Results {
  @apply bg-white shadow border border-gray-300 rounded-lg overflow-hidden w-full;
}

.Results__item {
  @apply px-4 py-2 text-gray-700 flex justify-between;
}

.Results__item:active {
  @apply opacity-75;
}

.Results__item:not(:last-child) {
  @apply border-b border-gray-300;
}

.Results__icon {
  min-width: 20px;
}

.Results__notFound {
  @apply p-4;
}
</style>
