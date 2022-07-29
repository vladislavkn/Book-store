<template>
  <LayoutEmpty>
    <div class="max-w-xs space-y-6">
      <nav class="space-y-3">
        <router-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </router-link>
        <h1 class="text-3xl font-bold text-gray-800 mb-4">
          Add new book to collection
        </h1>
      </nav>
      <form @submit.prevent class="space-y-4">
        <input type="text" class="InputText" placeholder="Book title" />
        <fieldset class="flex relative">
          <div
            class="w-1/2 absolute top-0 bottom-0 rounded border border-gray-600 duration-150 left-0"
            :class="{ 'left-1/2': isRead }"
          ></div>
          <label class="px-4 py-2 text-center flex-grow">
            Not read yet
            <input
              type="radio"
              class="hidden"
              name="isRead"
              :checked="!isRead"
              @change="isRead = false"
            />
          </label>
          <label class="px-4 py-2 text-center flex-grow">
            Already Read
            <input
              type="radio"
              class="hidden"
              name="isRead"
              :checked="isRead"
              @change="isRead = true"
            />
          </label>
        </fieldset>
        <div class="flex justify-end">
          <button type="submit" class="Button Button__primary">Add</button>
        </div>
      </form>
    </div>
  </LayoutEmpty>
</template>

<script>
import LayoutEmpty from "../components/LayoutEmpty.vue";

export default {
  name: "AddBook",
  components: { LayoutEmpty },
  data: () => ({
    title: "",
    author: "",
    id: "",
    isRead: false,
  }),
};
</script>

<style>
.left-1\/2 {
  left: 50%;
}
</style>
