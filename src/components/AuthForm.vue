<template>
  <div class="max-w-xs w-full">
    <form class="max-w-xs w-full mb-4 space-y-3" @submit.prevent="submit">
      <input
        class="InputText"
        type="email"
        placeholder="Email"
        required
        v-model="email"
      />
      <input
        class="InputText"
        type="password"
        placeholder="Password"
        required
        minLength="8"
        maxlength="16"
        v-model="password"
      />
      <input
        v-if="showPasswordRepeat"
        class="InputText"
        type="password"
        placeholder="Repeat password"
        required
        minLength="8"
        maxlength="16"
        v-model="passwordRepeat"
      />
      <div class="flex items-center justify-between">
        <div class="text-sm text-red-400 mr-2">
          {{ error }}
        </div>
        <button
          class="Button Button__primary"
          type="submit"
          :disabled="!!error || isLoading"
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
      <router-link :to="linkRoute" class="Button Button_secondary w-full">
        {{ linkText }}
      </router-link>
      <button class="Button Button_secondary w-full" @click="loginWithGoogle">
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
  data: () => ({
    email: "",
    password: "",
    passwordRepeat: "",
  }),
  watch: {
    passwordRepeat(newValue) {
      const errorMessage =
        newValue != this.password ? "Passwords don't match!" : "";
      if (this.showPasswordRepeat) this.$emit("validationError", errorMessage);
    },
    password(newValue) {
      const errorMessage =
        newValue != this.passwordRepeat ? "Passwords don't match!" : "";
      if (this.showPasswordRepeat) this.$emit("validationError", errorMessage);
    },
  },
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    showPasswordRepeat: {
      type: Boolean,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
    linkRoute: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      required: true,
    },
  },
  methods: {
    submit() {
      if (this.error) return;
      this.$emit("submit", {
        email: this.email,
        password: this.password,
      });
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
