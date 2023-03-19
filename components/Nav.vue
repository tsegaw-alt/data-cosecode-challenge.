<template>
  <nav class="flex justify-between items-center bg-white shadow-lg py-6 px-8 mb-8">
    <div>
      <router-link to="/" class="text-gray-800 font-bold text-2xl hover:text-gray-900 border-none ">
  DataCose Vue Challenge
</router-link>

    </div>
    <div class="flex items-center">
      <router-link
        to="/posts"
        class="text-gray-700 font-medium mr-8 hover:text-gray-900 hover:border-b-2 hover:border-gray-900 transition duration-200"
        active-class="border-b-2 border-gray-900"
      >
        Posts
      </router-link>
      <router-link
        to="/todos"
        class="text-gray-700 font-medium hover:text-gray-900 hover:border-b-2 hover:border-gray-900 transition duration-200"
        active-class="border-b-2 border-gray-900"
      >
        Todos
      </router-link>
    </div>
  </nav>
</template>
