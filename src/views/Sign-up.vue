<template>
  <EmptyLayout class="flex-col">
    <h1 class="text-3xl font-bold text-gray-800 max-w-xs text-center mb-2">
      Book.Store Registration
    </h1>
    <form class="max-w-xs w-full mb-4 space-y-3" @submit.prevent>
      <input class="InputText" type="email" placeholder="Email" />
      <input class="InputText" type="password" placeholder="Password" />
      <input class="InputText" type="password" placeholder="Repeat password" />
      <div class="flex justify-end">
        <button class="Button Button__primary" type="submit">Complete</button>
      </div>
    </form>
    <div class="text-center mb-4 max-w-xs w-full relative">
      <div class="Divider" />
      <span class="text-gray-600 px-2 bg-white z-10 relative">Or</span>
    </div>
    <div class="max-w-xs w-full space-y-3">
      <router-link to="/sing-in" class="Button Button_secondary w-full">
        Login with email & password
      </router-link>
      <button class="Button Button_secondary w-full">
        Continue with Google
      </button>
      <button class="Button Button_secondary w-full">
        Continue with email (passwordless)
      </button>
    </div>
  </EmptyLayout>
</template>

<script>
import EmptyLayout from "../components/EmptyLayout.vue";

export default {
  components: { EmptyLayout },
};
</script>

<style>
.Divider {
  @apply h-px left-0 right-0 bg-gray-300 z-0 absolute;
  top: calc(50% - 0.5px);
}
</style>
