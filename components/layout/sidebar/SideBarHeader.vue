<script setup>
import hamburgerMenu from "/icons/hamburgerMenu.png";
</script>

<template>
  <div class="flex justify-between items-center border-b-1 p-6 border-gray-200">
    <div>
      <div>
        <div class="flex">
          <div>logo</div>
          <div>
            <div class="font-bold text-xl">master</div>
            <div class="text-header-text-2 uppercase font-bold text-xl">
              pos
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img :src="hamburgerMenu" />
    </div>
  </div>
</template>
