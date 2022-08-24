<template>
  <div class="px-2 py-4 space-y-8 mx-auto max-w-sm">
    <Typography variant="title1" className="mb-8">Sign up</Typography>
    <SignUpForm @submit="submit"></SignUpForm>
    <div>
      <Button
        @click="authMixin_loginWithGoogle"
        variant="secondary"
        className="mb-2 w-full"
      >
        <ExternalLinkIcon></ExternalLinkIcon>Continue with Google
      </Button>
      <Link to="/sign-in" class="w-full"> Log in instead </Link>
    </div>
  </div>
</template>

<script>
import authMixin from "../../mixins/authMixin";
import SignUpForm from "../components/SignUpForm.vue";
import Typography from "../ui/Typography.vue";
import Button from "../ui/Button.vue";
import Link from "../ui/Link.vue";
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  components: {
    SignUpForm,
    Typography,
    Button,
    Link,
    ExternalLinkIcon,
  },
  mixins: [authMixin({ authEventType: "registerUser" })],
  methods: {
    submit({ email, password, passwordRepeat }) {
      if (password === passwordRepeat) {
        this.authMixin_submit({ email, password });
      } else {
        this.$toast.open({
          message: "Passwords do not match",
          type: "error",
        });
      }
    },
  },
};
</script>
