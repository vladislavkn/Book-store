export default {
  data: () => ({
    isLoading: false,
    error: "",
  }),
  methods: {
    submit() {
      this.isLoading = true;
      this.$store
        .dispatch("loginUser", {
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
  },
};
