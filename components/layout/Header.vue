<script setup>
import themeIcon from "/icons/theme.png";
import themeDark from "/icons/themeDark.png";
import modeBg from "/icons/modeBg.png";
import ellipse from "/icons/ellipse.png";
import set from "/icons/set.png";
import net from "/icons/net.png";
import notif from "/icons/notif.png";
import message from "/icons/message.png";
import bottom from "/icons/bottom.png";
</script>

<template>
  <header
    class="bg-white rounded-xl shadow-sm"
    style="padding: 30px; margin-top: 20px; margin-left: 30px"
  >
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold">Products</h1>
        <p class="text-gray-500">Manage your products</p>
      </div>

      <div class="flex items-center gap-5">
        <div class="flex items-center gap-2 border-r pr-10 border-gray-300">
          <img :src="themeIcon" alt="" class="w-5 h-5" />
          <div class="relative w-15">
            <img :src="modeBg" alt="" class="w-full h-full" />
            <img
              :src="ellipse"
              alt="Ellipse"
              class="absolute left-0 top-1/2 -translate-y-1/2 w-15 h-15"
            />
          </div>
          <img :src="themeDark" alt="" class="w-5 h-5" />
        </div>

        <div class="flex items-center gap-2 pl-5">
          <img :src="net" alt="" class="w-5 h-5 mr-5" />
          <div class="relative w-5 h-5 mr-5">
            <img :src="notif" alt="" class="w-5 h-5" />
            <span
              class="absolute -top-1 -right-1 bg-notif text-xs rounded-full w-4 h-4 flex items-center justify-center"
            >
              14
            </span>
          </div>
          <img :src="message" alt="" class="w-5 h-5 mr-5" />
          <img :src="set" alt="" class="w-5 h-5" />
        </div>

        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gray-400 rounded-full"></div>
          <div class="mr-2">
            <h1 class="text-sm font-bold">Patricia Peter</h1>
            <p class="text-gray-500">Super Admin</p>
          </div>
          <img :src="bottom" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>
