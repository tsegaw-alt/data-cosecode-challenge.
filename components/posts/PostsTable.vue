<template>
  <div class="bg-gray-100 py-10 px-4">
    <div class="max-w-7xl mx-auto">
      <div v-if="loading.value">
        <Spinner />
      </div>
      <div v-else class="my-4">
        <SearchField
          :search-term="searchTerm"
          @update:search-term="updateSearchTerm"
        />
      </div>
      <div class="overflow-x-auto">
        <div class="shadow-lg rounded-lg overflow-hidden">
          <table class="w-full table-fixed border-collapse">
            <thead
              class="bg-gradient-to-r from-purple-500 to-purple-600 text-white uppercase text-sm"
            >
              <tr>
                <th class="py-3 px-4 text-left border-b border-gray-200">
                  Title
                </th>
                <th class="py-3 px-4 text-left border-b border-gray-200">
                  Body
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="post in filteredPosts"
                :key="post.id"
                @click="showUserCard(post.userId)"
                class="cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <td class="py-3 px-4 border-b border-gray-200">
                  {{ post.title }}
                </td>
                <td class="py-3 px-4 border-b border-gray-200">
                  {{ post.body }}
                </td>
              </tr>
              <tr v-if="filteredPosts.length === 0">
                <td class="px-4 py-2" colspan="2">No matching results found</td>
              </tr>
            </tbody>
          </table>
          <Pagination
            :current-page="currentPage"
            :total-pages="totalPages"
            :on-page-change="changePage"
            class="flex justify-center mt-4"
          />
        </div>
        <UserDetail
          v-if="selectedUserId"
          :user="user"
          @close="selectedUserId = null"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { getPosts, getUser } from "../../api/posts";
import SearchField from "../common/SearchField.vue";
import { filterPosts } from "../../utils/filterPosts";
import Pagination from "../common/Pagination.vue";
import Spinner from "../common/LoadingSpinner.vue";
import UserDetail from "../common/UserDetail.vue";

const posts = ref([]);
const selectedUserId = ref(null);
const searchTerm = ref("");
const postsPerPage = ref(5);
const currentPage = ref(1);
const user = ref({});
const loading = ref(true);

const filteredPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * postsPerPage.value;
  const endIndex = startIndex + postsPerPage.value;
  return filterPosts(posts.value, searchTerm.value).slice(startIndex, endIndex);
});

const totalPages = computed(() =>
  Math.ceil(
    filterPosts(posts.value, searchTerm.value).length / postsPerPage.value
  )
);

const updateSearchTerm = (term) => {
  searchTerm.value = term;
};

const changePage = (page) => {
  currentPage.value = page;
};
const showUserCard = async (userId) => {
  selectedUserId.value = userId;
};

onMounted(async () => {
  try {
    posts.value = await getPosts();
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
});

const postsFetchUser = async (userId) => {
  try {
    user.value = await getUser(userId);
  } catch (error) {
    console.error(error);
  }
};

watch(selectedUserId, (userId) => {
  if (userId) {
    postsFetchUser(userId);
  } else {
    user.value = {};
  }
});
</script>
<style scoped>
/* Add custom styles here */
</style>
