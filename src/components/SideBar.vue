<template>
  <div
    class="absolute hidden top-0 h-screen z-0 sm:flex"
    :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
  >
    <aside class="bg-white mt-16 w-56">
      <ul class="pt-10">
        <li class="mt-4" v-for="(text, index) in side_texts" :key="index">
          <a
            class="flex items-center px-4 py-2 text-gray-700 rounded-md"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>

            <span class="mx-4 font-medium">{{ text }}</span>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const right = ref(false);
    const side_texts = ref(["Forums", "Donations", "Events"]);
    return { right, side_texts };
  },
});
</script>

<style></style>
