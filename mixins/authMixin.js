export default ({ authEventType }) => ({
  data: () => ({
    authMixin_isLoading: false,
  }),
  methods: {
    authMixin_submit(email, password) {
      this.authMixin_isLoading = true;
      this.$store
        .dispatch(authEventType, { email, password })
        .then(() => this.$router.push("/"))
        .catch((error) => {
          this.$toast.open({
            message: error?.message ?? "Somethig went wrong",
            type: "error",
          });
        })
        .finally(() => (this.authMixin_isLoading = false));
    },
    authMixin_loginWithGoogle() {
      this.authMixin_isLoading = true;
      this.$store
        .dispatch("loginWithGoogle")
        .then(() => this.$router.push("/"))
        .catch((error) => {
          this.$toast.open({
            message: error?.message ?? "Somethig went wrong",
            type: "error",
          });
        })
        .finally(() => (this.authMixin_isLoading = false));
    },
  },
});
