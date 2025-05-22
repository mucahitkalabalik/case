<script setup>
import { ref } from "vue";
import Routes from "~/utils/navigation";

function getIcon(name) {
  return `/links/${name}.png`;
}

const openMenus = ref({ Products: true });

function toggleMenu(name) {
  openMenus.value[name] = !openMenus.value[name];
}
</script>

<template>
  <nav class="bg-white flex flex-col px-2 md:px-6 border-gray-200  transition-all duration-300">
    <ul>
      <li v-for="route in Routes" :key="route.title" class="mb-6">
        <h3 class="py-2 font-semibold text-gray-300 hidden md:block">{{ route.title }}</h3>
        <ul>
          <li
            v-for="link in route.links"
            :key="link.name"
            class="my-2 flex flex-col gap-1 cursor-pointer rounded-md"
            :class="link.children ? 'bg-gray-100 ' : ''"
          >
            <div
              class="flex items-center p-1 gap-2 w-full rounded-md"
              @click="link.children && toggleMenu(link.name)"
              :class="link.children ? 'bg-active' : ''"
            >
              <nuxt-link
                :to="link.path || '/'"
                class="flex items-center gap-2 flex-grow p-1"
              >
              <div class="flex items-center gap-2 flex-grow">

                <img :src="getIcon(link.icon)" alt="" class="w-6 h-6" />
                <span
                class="hidden md:inline text-gray-500"
                :class="link.children ? 'md:text-white' : ''"
                >
                {{ link.name }} 
              </span>
            </div>

                <span class="hidden md:inline bg-notif rounded-full p-1 font-semibold" v-if="link.counter">
                  {{ link.counter }}
                </span>
              </nuxt-link>
              <button v-if="link.children" class="text-gray-400 hidden md:inline">
                <svg
                  :class="{ 'rotate-270': openMenus[link.name] }"
                  class="w-4 h-4 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
            <ul
              v-if="link.children && openMenus[link.name]"
              class="mt-1 rounded-md p-1 hidden md:block"
            >
              <li
                v-for="child in link.children"
                :key="child.name"
                class="py-2 text-gray-400 cursor-pointer"
                :class="child.name === 'All Products' ? '!text-active' : ''"
              >
                <nuxt-link
                  :to="child.path || '/'"
                  class="flex items-center gap-2"
                >
                  <img :src="getIcon(child.icon)" alt="" class="w-6 h-6" />
                  <span class="hidden md:inline">{{ child.name }}</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
