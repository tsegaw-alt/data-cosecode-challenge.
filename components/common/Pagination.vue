<template>
  <div class="flex justify-center mt-4">
    <button
      v-if="currentPage > 1"
      class="px-3 py-1 bg-white text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-200 mr-2"
      @click="onPageChange(currentPage - 1)"
    >
      Prev
    </button>
    <div class="flex">
      <button
        v-for="page in displayedPages"
        :key="page"
        class="px-3 py-1 font-semibold rounded-md shadow-md hover:bg-gray-200 mx-1"
        :class="{
          'bg-gradient-to-r from-purple-500 to-purple-200 text-white':
            currentPage === page,
          'bg-white text-gray-800': currentPage !== page,
        }"
        @click="onPageChange(page)"
      >
        {{ page }}
      </button>
    </div>
    <button
      v-if="currentPage < totalPages"
      class="px-3 py-1 bg-white text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-200 ml-2"
      @click="onPageChange(currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  onPageChange: { type: Function, required: true },
});

// This computed property calculates the list of page numbers to display
const displayedPages = computed(() => {
  const { currentPage, totalPages } = props;
  const pageNumbers = [];
  let startPage = Math.max(currentPage - 2, 1);
  let endPage = Math.min(currentPage + 2, totalPages);
  if (startPage === 1) {
    endPage = Math.min(endPage + 2, totalPages);
  }
  if (endPage === totalPages) {
    startPage = Math.max(startPage - 2, 1);
  }
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
});
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
