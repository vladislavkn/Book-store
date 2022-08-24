<template>
  <div class="px-2 py-4 space-y-8 mx-auto max-w-sm">
    <Typography variant="title1" className="mb-8">Sign in</Typography>
    <SignInForm @submit="authMixin_submit"></SignInForm>
    <div>
      <Button
        @click="authMixin_loginWithGoogle"
        variant="secondary"
        className="mb-2 w-full"
      >
        <ExternalLinkIcon></ExternalLinkIcon>Continue with Google
      </Button>
      <Link to="/sign-up" class="w-full"> Create account instead </Link>
    </div>
  </div>
</template>

<script>
import authMixin from "../../mixins/authMixin";

import SignInForm from "../components/SignInForm.vue";
import Typography from "../ui/Typography.vue";
import Link from "../ui/Link.vue";
import Button from "../ui/Button.vue";
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  components: {
    SignInForm,
    Typography,
    Link,
    Button,
    ExternalLinkIcon,
  },
  mixins: [authMixin({ authEventType: "loginUser" })],
};
</script>
