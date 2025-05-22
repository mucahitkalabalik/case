<script setup>
// İMPORTLAR YOK
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
          <img src="/icons/theme.png" alt="" class="w-5 h-5" />
          <div class="relative w-15">
            <img src="/icons/modeBg.png" alt="" class="w-full h-full" />
            <img
              src="/icons/ellipse.png"
              alt="Ellipse"
              class="absolute left-0 top-1/2 -translate-y-1/2 w-15 h-15"
            />
          </div>
          <img src="/icons/themeDark.png" alt="" class="w-5 h-5" />
        </div>

        <div class="flex items-center gap-2 pl-5">
          <img src="/icons/net.png" alt="" class="w-5 h-5 mr-5" />
          <div class="relative w-5 h-5 mr-5">
            <img src="/icons/notif.png" alt="" class="w-5 h-5" />
            <span
              class="absolute -top-1 -right-1 bg-notif text-xs rounded-full w-4 h-4 flex items-center justify-center"
            >
              14
            </span>
          </div>
          <img src="/icons/message.png" alt="" class="w-5 h-5 mr-5" />
          <img src="/icons/set.png" alt="" class="w-5 h-5" />
        </div>

        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gray-400 rounded-full"></div>
          <div class="mr-2">
            <h1 class="text-sm font-bold">Patricia Peter</h1>
            <p class="text-gray-500">Super Admin</p>
          </div>
          <img src="/icons/bottom.png" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>
