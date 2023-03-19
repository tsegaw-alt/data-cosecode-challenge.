<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mt-8">Todos</h1>
    <TodoTable :search-term="searchTerm" />
  </div>
</template>
<script setup>
import TodoTable from "../components/todos/TodoTable.vue";
import { ref } from "vue";

const searchTerm = ref("");
</script>
