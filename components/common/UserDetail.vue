<template>
  <div
    class="fixed top-0 left-0 h-screen w-screen bg-gray-200 bg-opacity-50 z-20 flex justify-center items-center"
  >
    <div
      class="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full bg-gradient-to-r from-purple-500 to-purple-400"
    >
      <div class="p-6">
        <div class="flex justify-between items-center mb-4">
          <div class="font-bold text-lg text-gray-200">{{ user.name }}</div>
          <button
            class="text-gray-200 hover:text-gray-200"
            @click="$emit('close')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9.293L3.854 3.146a.5.5 0 01.707-.707L10 7.586l5.439-5.438a.5.5 0 01.707.707L10.707 9.293l5.439 5.439a.5.5 0 01-.707.707L10 10.707l-5.439 5.439a.5.5 0 01-.707-.707l5.439-5.439z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="text-gray-200 mb-2">{{ user.email }}</div>
        <div class="text-gray-200 mb-2">{{ user.phone }}</div>
        <div class="text-gray-200">{{ user.website }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
