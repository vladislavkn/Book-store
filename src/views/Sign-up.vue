<template>
  <EmptyLayout class="flex-col">
    <h1 class="text-3xl font-bold text-gray-800 max-w-xs text-center mb-4">
      Create account
    </h1>
    <AuthForm
      :showPasswordRepeat="true"
      :isLoading="isLoading"
      :error="error"
      linkRoute="/sign-in"
      linkText="Login instead"
      @validationError="handleValidationError"
      @submit="submit"
      @loginWithGoogle="loginWithGoogle"
    />
  </EmptyLayout>
</template>

<script>
import EmptyLayout from "../components/EmptyLayout.vue";
import AuthForm from "../components/AuthForm.vue";

export default {
  components: { EmptyLayout, AuthForm },
  data: () => ({
    isLoading: false,
    error: "",
  }),
  methods: {
    submit() {
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
    loginWithGoogle() {
      this.isLoading = true;
      this.$store
        .dispatch("loginWithGoogle")
        .then(() => this.$router.push("/"))
        .catch((error) => (this.error = error.message))
        .finally(() => (this.isLoading = false));
    },
    handleValidationError(validationError) {
      this.error = validationError;
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
