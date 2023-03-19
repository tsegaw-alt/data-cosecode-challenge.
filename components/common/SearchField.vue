<template>
  <div class="relative">
    <input
      class="bg-white border border-gray-300 rounded-md py-2 px-3 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
      type="text"
      placeholder="Search by title"
      :value="searchTerm"
      @input="$emit('update:searchTerm', $event.target.value)"
    />
    <button class="absolute top-0 right-0 h-full px-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M13.43 14.57a8 8 0 111.414-1.414l3.003 3.003a1 1 0 11-1.414 1.414l-3.003-3.003zM8 14a6 6 0 100-12 6 6 0 000 12z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  searchTerm: String,
});
</script>
