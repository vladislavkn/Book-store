<template>
  <LayoutEmpty class="flex-col">
    <h1 class="text-3xl font-bold text-gray-800 max-w-xs text-center mb-4">
      Create account
    </h1>
    <AuthForm
      :isLoading="authMixin_isLoading"
      :error="error"
      @submit="authMixin_submit(email, password)"
      @loginWithGoogle="authMixin_loginWithGoogle"
    >
      <template v-slot:fields>
        <AuthFormEmailField v-model="email" />
        <AuthFormPasswordField v-model="password" />
        <AuthFormPasswordField
          placeholder="Password repeat"
          v-model="passwordRepeat"
        />
      </template>
      <template v-slot:links>
        <router-link to="/sign-in" class="Button Button__secondary">
          Go to login
        </router-link>
      </template>
    </AuthForm>
  </LayoutEmpty>
</template>

<script>
import LayoutEmpty from "../components/LayoutEmpty.vue";
import AuthForm from "../components/AuthForm.vue";
import authMixin from "../../mixins/authMixin";
import AuthFormEmailField from "../components/AuthFormEmailField.vue";
import AuthFormPasswordField from "../components/AuthFormPasswordField.vue";

export default {
  components: {
    LayoutEmpty,
    AuthForm,
    AuthFormEmailField,
    AuthFormPasswordField,
  },
  mixins: [authMixin({ authEventType: "registerUser" })],
  data: () => ({
    email: "",
    password: "",
    passwordRepeat: "",
    error: "",
  }),
  watch: {
    passwordRepeat() {
      this.error =
        this.password !== this.passwordRepeat ? "Passwords do not match" : "";
    },
  },
};
</script>
