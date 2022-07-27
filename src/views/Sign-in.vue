<template>
  <EmptyLayout class="flex-col">
    <h1 class="text-3xl font-bold text-gray-800 max-w-xs text-center mb-4">
      Login
    </h1>
    <AuthForm
      :showPasswordRepeat="false"
      :isLoading="isLoading"
      :error="error"
      linkRoute="/sign-up"
      linkText="Register instead"
      @validationError="error = $event"
      @submit="submit"
      @loginWithGoogle="loginWithGoogle"
    />
  </EmptyLayout>
</template>

<script>
import EmptyLayout from "../components/EmptyLayout.vue";
import AuthForm from "../components/AuthForm.vue";
import authMixin from "../../mixins/authMixin";

export default {
  components: { EmptyLayout, AuthForm },
  mixins: [authMixin("loginUser")],
};
</script>
