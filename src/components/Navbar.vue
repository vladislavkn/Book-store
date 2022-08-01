<template>
  <nav class="w-full py-2 flex items-center justify-between gap-8 sticky top-2">
    <div class="flex max-w-sm w-full bg-gray-200 rounded-md relative">
      <div
        class="absolute rounded bg-white shadow Thumb"
        :class="{ Thumb_offset: !isRead }"
      ></div>
      <div class="Switch__button" @click="$emit('toggleRead', true)">Read</div>
      <div class="Switch__button" @click="$emit('toggleRead', false)">
        Unread
      </div>
    </div>
    <div class="flex gap-4 items-center">
      <button><UserIcon class="text-gray-800" /></button>
      <button @click="switchLocale"><GlobeIcon class="text-gray-800" /></button>
    </div>
  </nav>
</template>

<script>
import { UserIcon, GlobeIcon } from "vue-feather-icons";

export default {
  components: { UserIcon, GlobeIcon },
  props: {
    isRead: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    switchLocale() {
      if (this.$i18n.locale === "ru") {
        this.$i18n.locale = "en";
        this.$store.commit("setLocale", "en");
      } else {
        this.$i18n.locale = "ru";
        this.$store.commit("setLocale", "ru");
      }
    },
  },
};
</script>

<style>
.top-2 {
  top: 0.5rem;
}

.Switch__button {
  @apply w-1/2 p-3 text-center relative z-10;
}

.Thumb {
  top: 0.5rem;
  left: 0.5rem;
  bottom: 0.5rem;
  right: calc(50% + 0.5rem);
  transition: left 0.1s, right 0.1s;
}

.Thumb_offset {
  right: 0.5rem;
  left: calc(50% + 0.5rem);
}
</style>
