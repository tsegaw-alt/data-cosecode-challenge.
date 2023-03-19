<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">
      Welcome to DataCose Frontend Developer Code Challenge!
    </h1>
    <div class="text-lg text-gray-600 mb-8 text-center max-w-md">
      <p class="mb-4">
        This is a simple app built with Vue.js and the JSONPlaceholder API. You
        can browse through the list of todos and posts, filter them by title,
        and click on a todo or post to view more details about the user who
        created it.
      </p>
      <h2 class="mb-4 text-purple-600 font-bold text-2xl">
        Use the buttons below to navigate the app:
      </h2>
    </div>
    <div class="flex flex-row justify-center mb-8">
      <router-link
        to="/posts"
        class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full mr-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        View Posts
      </router-link>
      <router-link
        to="/todos"
        class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        View Todos
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style>
.h-screen {
  height: 80vh;
}

.max-w-md {
  max-width: 40rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #4b5563;
}

router-link {
  transition: all 0.3s ease-in-out;
}

router-link:hover {
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
