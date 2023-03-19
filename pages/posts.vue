<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mt-8">Posts</h1>
    <PostsTable :search-term="searchTerm" />
  </div>
</template>
<script setup>
import PostsTable from "../components/posts/PostsTable.vue";
import { ref } from "vue";

const searchTerm = ref("");
</script>
