export default ({ authEventType }) => ({
  data: () => ({
    authMixin_isLoading: false,
    authMixin_error: "",
  }),
  methods: {
    authMixin_submit(email, password) {
      console.log(email, password);
      this.authMixin_isLoading = true;
      this.$store
        .dispatch(authEventType, { email, password })
        .then(() => this.$router.push("/"))
        .catch((error) => (this.authMixin_error = error.message))
        .finally(() => (this.authMixin_isLoading = false));
    },
    authMixin_loginWithGoogle() {
      this.authMixin_isLoading = true;
      this.$store
        .dispatch("loginWithGoogle")
        .then(() => this.$router.push("/"))
        .catch((error) => (this.authMixin_error = error.message))
        .finally(() => (this.authMixin_isLoading = false));
    },
  },
});
