<template>
  <div class="w-full h-28 shadow-lg bg-white">
    <div
      class="w-auto h-1/2 mx-auto flex flex-row item-center justify-center border-b-4 border-red-700"
    >
      <img class="my-auto mr-64" width="153" src="./assets/Nismo.jpg" />
      <ul class="my-auto ml-64 flex flex-row text-xs text-gray-500">
        <li
          class="px-2 py-1 rounded-full border-gray-400 hover:border-gray-300 hover:text-gray-400 border-2 flex item-center justify-center mr-2"
        >
          <a href>Japanese</a>
        </li>
        <li
          class="px-2 py-1 rounded-full border-gray-400 hover:border-gray-300 hover:text-gray-400 border-2 flex item-center justify-center"
        >
          <a href>NISSAN</a>
        </li>
      </ul>
    </div>
    <div
      class="w-auto h-1/2 mx-auto flex flex-row item-center justify-center border-b-4 border-red-700"
    >
      <ul class="flex flex-row item-center justify-center h-full text-gray-700 text-sm">
        <li class="pr-3 py-3 flex flex-row items-center">
          <i class="icon material-icons">settings</i>
          <span>
            <router-link to="/news" ><b>NEWS</b></router-link>
          </span>
        </li>
        <li class="py-3 flex flex-row items-center">
          <span class="border-r-2 border-l-2 border-gray-400 my-auto px-3 text-lg">
            <span>
              <router-link to="/" ><b>HOME</b></router-link>
            </span>
          </span>
        </li>
        <li class="pl-3 py-3 flex flex-row items-center">
          <i class="icon material-icons">info</i>
          <span>
            <router-link to="/about" ><b>ABOUT</b></router-link>
          </span>
        </li>
      </ul>
    </div>
  </div>

  <router-view />
</template>
<style>
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>