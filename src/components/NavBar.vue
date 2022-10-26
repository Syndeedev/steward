<template>
  <div class="bg-white fixed top-0 w-full z-10 shadow">
    <nav
      class="flex max-w-screen-2xl m-auto items-center justify-between flex-wrap bg-teal p-4 sm:py-5 sm:px-10"
    >
      <router-link
        to="/"
        class="hidden sm:flex items-center flex-no-shrink text-black mr-6"
      >
        <img src="@/assets/steward_icon_black.svg" alt="" />
        <span class="font-semibold text-xl text-black tracking-tight ml-2">{{
          school_name
        }}</span>
      </router-link>
      <div class="hidden items-center sm:flex">
        <!-- Tab -->
        <div>
          <ul
            class="flex mb-0 list-none flex-wrap flex-row border rounded-full border-gray-100"
          >
            <li class="flex-auto text-center cursor-pointer">
              <a
                class="text-xs font-bold px-3 py-1 block leading-normal"
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  'text-steward-gray': openTab !== 1,
                  'text-white bg-steward-green shadow-lg rounded-full':
                    openTab === 1,
                }"
              >
                <i class="fas fa-space-shuttle text-base mr-1"></i> Admin View
              </a>
            </li>
            <li class="flex-auto text-center cursor-pointer">
              <a
                class="text-xs font-bold px-3 py-1 block leading-normal"
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  'text-steward-gray': openTab !== 2,
                  'text-white bg-steward-green shadow-lg rounded-full':
                    openTab === 2,
                }"
              >
                <i class="fas fa-cog text-base mr-1"></i> User View
              </a>
            </li>
          </ul>
        </div>

        <!-- Profile dropdown -->
        <div class="flex items-center justify-start ml-4">
          <img src="@/assets/user_image.svg" alt="" />
          <div class="text-start ml-1">
            <div class="text-sm text-black font-semibold">Olivia Rhye</div>
            <div class="text-xs">Community Admin</div>
          </div>
          <svg
            class="ml-4"
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9201 0.949951L10.4001 7.46995C9.63008 8.23995 8.37008 8.23995 7.60008 7.46995L1.08008 0.949951"
              stroke="#667085"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <!-- Mobile view -->
      <div class="flex sm:hidden items-center">
        <button
          @click="toggleNav"
          class="flex p-2 items-center rounded text-gray-700"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7H21"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 12H21"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 17H21"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div class="font-semibold text-sm xs:text-xl text-black">
          Donations & payment
        </div>
      </div>
      <div class="block sm:hidden">
        <img src="@/assets/user_image.svg" alt="" />
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    school_name: {
      type: String,
      required: true,
    },
  },
  setup() {
    const openTab = ref(1);
    let showMenu = ref(false);
    let show = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    const toggleTabs = (tabNumber: number) => (openTab.value = tabNumber);
    return { showMenu, show, toggleNav, openTab, toggleTabs };
  },
});
</script>

<style></style>
