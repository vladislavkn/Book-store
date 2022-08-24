<template>
  <button
    @click="$emit('click')"
    :type="type"
    class="Button"
    :class="[
      {
        Button_primary: variant === 'primary',
        Button_secondary: variant === 'secondary',
        Button_icon: variant === 'icon',
      },
      className,
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    type: {
      type: String,
      default: "button",
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.Button {
  @apply px-4 py-2 text-sm font-bold rounded flex items-center justify-center gap-2 outline-none;
}

.Button:active:not(:disabled) {
  @apply opacity-75;
}

.Button_primary {
  @apply border border-gray-900 bg-gray-900 text-gray-200;
}

.Button_primary:disabled {
  @apply bg-gray-600 border-gray-600 text-gray-100;
}

.Button_secondary {
  @apply border border-gray-600 text-gray-800;
}

.Button_secondary:disabled {
  @apply border-gray-400 text-gray-600;
}

.Button_icon {
  @apply text-gray-900 bg-gray-200 rounded-lg;
}

.Button_icon:disabled {
  @apply text-gray-600 bg-gray-200;
}
</style>
