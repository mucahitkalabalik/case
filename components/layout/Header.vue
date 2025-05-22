<template>
  <header
    class="bg-white shadow-sm rounded-none md:rounded-xl h-[72px] md:h-auto p-2 md:p-[18px] mt-0 md:mt-[10px] ml-0 md:ml-[30px]"
  >
    <div class="flex justify-between items-center h-full">
      <div class="hidden lg:block">
        <h1 class="text-2xl font-bold">Products</h1>
        <p class="text-gray-500">Manage your products</p>
      </div>
      <div class="flex items-center h-full w-full md:hidden px-2">
        <div class="md:hidden sm:hidden">
          <img src="/logo.png" alt="Logo" class="w-10 h-10" />
        </div>
        <div class="flex items-center gap-2 ml-auto">
          <div
            class="w-10 h-10 bg-gray-400 rounded-full avatar hidden md:block"
          ></div>
          <div class="mr-2 hidden md:block">
            <h1 class="text-sm font-bold">Patricia Peter</h1>
            <p class="text-gray-500">Super Admin</p>
          </div>
          <img src="/icons/Hamburgermenu.png" alt="menu" class="w-8 h-8" />
        </div>
      </div>
      <div class="hidden md:flex items-center gap-5">
        <div
          class="flex items-center justify-center gap-2 border-r pr-10 border-gray-300"
        >
          <img src="/icons/theme.png" alt="" class="w-5 h-5  hidden lg:block"  />

          <img src="/icons/switchOption.png" alt="" class="h-15 mr-3  hidden lg:block" />

          <img src="/icons/themeDark.png" alt="" class="w-5 h-5  hidden lg:block" />
        </div>
        <div class="flex items-center gap-2 pl-5">
          <img src="/icons/net.png" alt="" class="w-5 h-5 mr-5 " />
          <div class="relative mr-5  hidden lg:block">
            <img src="/icons/notif.png" alt="" class="min-w-5 min-h-5" />
            <span
              class="absolute -top-1 -right-1 bg-notif text-xs rounded-full w-4 h-4 flex items-center justify-center"
            >
              14
            </span>
          </div>
          <img src="/icons/message.png" alt="" class="w-5 h-5 mr-5  " />
          <img src="/icons/set.png" alt="" class="w-5 h-5  " />
        </div>
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gray-400 rounded-full avatar "></div>
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
