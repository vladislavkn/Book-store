<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="InputText"
    type="password"
    placeholder="Password"
    required
    minLength="8"
    maxlength="16"
  />
</template>
<script>
export default {
  props: {
    value: String,
  },
};
</script>
