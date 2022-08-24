<template>
  <form @submit.prevent="$emit('submit', { email, password })">
    <Input
      v-model="email"
      type="email"
      placeholder="Email"
      className="mb-2"
      required
    ></Input>
    <Input
      v-model="password"
      type="password"
      placeholder="Password"
      className="mb-4"
      required
    ></Input>
    <Button type="submit">Submit</Button>
  </form>
</template>

<script>
import Input from "../ui/Input.vue";
import Button from "../ui/Button.vue";

export default {
  components: { Input, Button },
  data: () => ({
    email: "",
    password: "",
  }),
};
</script>
