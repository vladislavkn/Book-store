<template>
  <EmptyLayout class="flex-col">
    <h1 class="text-3xl font-bold text-gray-800 max-w-xs text-center mb-2">
      Book.Store Registration
    </h1>
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
        min="8"
        max="16"
        v-model="password"
      />
      <input
        class="InputText"
        type="password"
        placeholder="Repeat password"
        required
        min="8"
        max="16"
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
      <router-link to="/sing-in" class="Button Button_secondary w-full">
        Login with email & password
      </router-link>
      <button class="Button Button_secondary w-full">
        Continue with Google
      </button>
      <button class="Button Button_secondary w-full">
        Continue with email (passwordless)
      </button>
    </div>
  </EmptyLayout>
</template>

<script>
import EmptyLayout from "../components/EmptyLayout.vue";

export default {
  components: { EmptyLayout },
  data: () => ({
    email: "",
    password: "",
    passwordRepeat: "",
    error: null,
    isLoading: false,
  }),
  watch: {
    passwordRepeat(newValue) {
      this.error = newValue != this.password ? "Passwords don't match!" : null;
    },
    password(newValue) {
      this.error =
        newValue != this.passwordRepeat ? "Passwords don't match!" : null;
    },
  },
  methods: {
    async submit() {
      if (this.error) return;
      this.isLoading = true;
      this.$store
        .dispatch("registerUser", {
          email: this.email,
          password: this.password,
        })
        .then(() => this.$router.push("/"))
        .catch((error) => (this.error = error.message))
        .finally(() => (this.isLoading = false));
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
