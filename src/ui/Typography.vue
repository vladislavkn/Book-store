<script>
const tagMap = {
  caption: "span",
  body: "p",
  title1: "h1",
  title2: "h2",
};

export default {
  name: "Typography",
  props: {
    variant: {
      type: String,
      default: "body",
    },
    as: {
      type: String,
    },
    className: {
      type: String,
      default: "",
    },
  },
  render(h) {
    const tag = this.as ?? tagMap[this.variant];
    const className = [
      "Typography",
      `Typography_${this.variant}`,
      this.className,
    ].join(" ");
    return h(tag, { class: className }, this.$slots.default);
  },
};
</script>

<style>
.Typography {
  @apply block;
}

.Typography_title1 {
  @apply text-3xl font-bold text-gray-900 leading-tight;
}

.Typography_title2 {
  @apply text-xl font-semibold text-gray-800 leading-tight;
}

.Typography_body {
  @apply text-base font-normal text-gray-700 leading-normal;
}

.Typography_caption {
  @apply text-xs uppercase font-normal text-gray-600 leading-none;
}
</style>
