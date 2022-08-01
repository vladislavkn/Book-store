<template>
  <LayoutEmpty class="flex-col">
    <h1 class="text-3xl font-bold text-gray-800 max-w-xs text-center mb-4">
      Login
    </h1>
    <AuthForm
      :isLoading="authMixin_isLoading"
      @submit="authMixin_submit(email, password)"
      @loginWithGoogle="authMixin_loginWithGoogle"
    >
      <template v-slot:fields>
        <AuthFormEmailField v-model="email" />
        <AuthFormPasswordField
          v-model="password"
          autocomplete="current-password"
      /></template>
      <template v-slot:links>
        <router-link to="/sign-up" class="Button Button__secondary">
          Go to registration
        </router-link>
      </template>
    </AuthForm>
  </LayoutEmpty>
</template>

<script>
import AuthForm from "../components/AuthForm.vue";
import authMixin from "../../mixins/authMixin";
import AuthFormEmailField from "../components/AuthFormEmailField.vue";
import AuthFormPasswordField from "../components/AuthFormPasswordField.vue";
import LayoutEmpty from "../components/LayoutEmpty.vue";

export default {
  components: {
    AuthForm,
    AuthFormEmailField,
    AuthFormPasswordField,
    LayoutEmpty,
  },
  mixins: [authMixin({ authEventType: "loginUser" })],
  data: () => ({
    email: "",
    password: "",
  }),
};
</script>
