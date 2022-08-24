<template>
  <div class="px-2 py-4 max-w-sm mx-auto">
    <DerivedPageNavbar>
      <Button @click="handleLogout" variant="icon">
        <LogOutIcon></LogOutIcon>
      </Button>
    </DerivedPageNavbar>
    <Typography variant="title1" className="mb-2">{{
      getUser.displayName || getUser.email
    }}</Typography>
    <Typography variant="body">{{ getUser.email }}</Typography>
  </div>
</template>

<script>
import { LogOutIcon } from "vue-feather-icons";
import Typography from "../ui/Typography.vue";
import { mapGetters } from "vuex";
import Button from "../ui/Button.vue";
import DerivedPageNavbar from "../components/DerivedPageNavbar.vue";
export default {
  components: {
    LogOutIcon,
    Typography,
    Button,
    DerivedPageNavbar,
  },
  computed: mapGetters(["getUser"]),
  methods: {
    handleLogout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Sign-in" });
    },
  },
};
</script>
