export default (authEventType) => ({
  data: () => ({
    isLoading: false,
    error: "",
  }),
  methods: {
    submit({ email, password }) {
      this.isLoading = true;
      this.$store
        .dispatch(authEventType, { email, password })
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
  },
});
