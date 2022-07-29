<template>
  <EmptyLayout class="flex-col">
    <h1 class="text-3xl font-bold text-gray-800 max-w-xs text-center mb-4">
      Login
    </h1>
    <AuthForm
      :isLoading="authMixin_isLoading"
      :error="authMixin_error"
      @submit="authMixin_submit"
      @loginWithGoogle="authMixin_loginWithGoogle"
    >
      <template v-slot:fields>
        <AuthFormEmailField v-model="email" />
        <AuthFormPasswordField v-model="password"
      /></template>
      <template v-slot:links>
        <router-link to="/sign-up" class="Button Button__secondary">
          Go to registration
        </router-link>
      </template>
    </AuthForm>
  </EmptyLayout>
</template>

<script>
import EmptyLayout from "../components/EmptyLayout.vue";
import AuthForm from "../components/AuthForm.vue";
import authMixin from "../../mixins/authMixin";
import AuthFormEmailField from "../components/AuthFormEmailField.vue";
import AuthFormPasswordField from "../components/AuthFormPasswordField.vue";

export default {
  components: {
    EmptyLayout,
    AuthForm,
    AuthFormEmailField,
    AuthFormPasswordField,
  },
  mixins: [authMixin({ authEventType: "loginUser" })],
  data: () => ({
    email: "",
    password: "",
  }),
};
</script>
