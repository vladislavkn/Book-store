<template>
  <nav class="z-10 shadow-md fixed w-screen bg-white lg:flex lg:items-center">
    <h1
      class="px-4 py-2 font-display text-center border-b border-gray-500 lg:border-b-0 lg:border-r"
    >
      Book-store
    </h1>
    <div class="px-4 py-3 flex items-center justify-between lg:flex-grow">
      <ul class="flex">
        <Link :to="{ name: 'Home' }" :text="$t('nav.books')" first />
        <Link :to="{ name: 'Wishlist' }" :text="$t('nav.wishlist')" />
      </ul>
      <button
        @click="switchLocale"
        class="px-2 py-1 shadow active:bg-gray-200 duration-300"
      >
        {{ $i18n.locale === "ru" ? "RU" : "EN" }}
      </button>
    </div>
  </nav>
</template>

<script>
import Link from "./Link";

export default {
  name: "Navbar",
  components: { Link },
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
