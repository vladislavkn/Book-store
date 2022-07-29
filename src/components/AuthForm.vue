<template>
  <div class="max-w-xs w-full">
    <form class="max-w-xs w-full mb-4 space-y-3" @submit.prevent="submit">
      <slot name="fields" />
      <div class="flex items-center justify-between">
        <div class="text-sm text-red-400 mr-2">
          {{ error }}
        </div>
        <button
          class="Button Button__primary"
          type="submit"
          :disabled="!isSubmitAvailable"
        >
          {{ isLoading ? "Loading" : "Complete" }}
        </button>
      </div>
    </form>
    <div class="text-center mb-4 max-w-xs w-full relative">
      <div class="Divider" />
      <span class="text-gray-600 px-2 bg-white z-10 relative">Or</span>
    </div>
    <div class="max-w-xs w-full space-y-3">
      <slot name="links" />
      <button class="Button Button__secondary w-full" @click="loginWithGoogle">
        <img
          class="h-6 w-6"
          src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
          alt="Google logo"
        />
        Continue with Google
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    error: {
      type: String,
      required: true,
    },
  },
  computed: {
    isSubmitAvailable() {
      return !this.error && !this.isLoading;
    },
  },
  methods: {
    submit() {
      // TODO: add toast warning
      if (this.isSubmitAvailable) {
        this.$emit("submit");
      }
    },
    loginWithGoogle() {
      this.$emit("loginWithGoogle");
    },
  },
};
</script>

<style>
.Divider {
  @apply h-px left-0 right-0 bg-gray-300 z-0 absolute;
  top: calc(50% - 0.5px);
}
</style>
