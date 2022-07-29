<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="InputText"
    type="email"
    placeholder="Email"
    autocomplete="email"
    required
  />
</template>
<script>
export default {
  props: {
    value: String,
  },
};
</script>
