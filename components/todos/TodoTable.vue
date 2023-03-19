<template>
  <div>
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
        <table class="w-full mt-4 table-fixed">
          <thead
            class="bg-gradient-to-r from-purple-500 to-purple-600 text-white uppercase text-sm"
          >
            <tr>
              <th class="w-3/4 py-3 px-4 text-left border-b border-gray-200">
                Title
              </th>
              <th class="w-1/4 py-3 px-4 text-left border-b border-gray-200">
                Completed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="todo in filteredTodos"
              :key="todo.id"
              @click="showUserCard(todo.userId)"
              class="cursor-pointer hover:bg-gray-100"
            >
              <td class="py-3 px-4 border-b border-gray-200">
                {{ todo.title }}
              </td>
              <td class="py-3 px-4 border-b border-gray-200">
                <input type="checkbox" :checked="todo.completed" disabled />
              </td>
            </tr>
            <tr v-if="filteredTodos.length === 0">
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
import { ref, computed } from "vue";
import { getTodos, getUser } from "../../api/todos";
import SearchField from "../common/SearchField.vue";
import Pagination from "../common/Pagination.vue";
import { filterTodos } from "../../utils/filterTodos";
import Spinner from "../common/LoadingSpinner.vue";
import UserDetail from "../common/UserDetail.vue";

const todos = ref([]);
const selectedUserId = ref(null);
const searchTerm = ref("");
const currentPage = ref(1);
const todosPerPage = ref(5);
const user = ref({});
const loading = ref(true);

const filteredTodos = computed(() => {
  const startIndex = (currentPage.value - 1) * todosPerPage.value;
  const endIndex = startIndex + todosPerPage.value;
  return filterTodos(todos.value, searchTerm.value).slice(startIndex, endIndex);
});

const totalPages = computed(() =>
  Math.ceil(
    filterPosts(todos.value, searchTerm.value).length / todosPerPage.value
  )
);

const updateSearchTerm = (value) => {
  searchTerm.value = value;
  currentPage.value = 1;
};

const showUserCard = async (userId) => {
  selectedUserId.value = userId;
};

const changePage = (page) => {
  currentPage.value = page;
};

onMounted(async () => {
  try {
    todos.value = await getTodos();
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
});

const todosFetchUser = async (userId) => {
  try {
    user.value = await getUser(userId);
  } catch (error) {
    console.error(error);
  }
};

watch(selectedUserId, (userId) => {
  if (userId) {
    todosFetchUser(userId);
  } else {
    user.value = {};
  }
});
</script>
<style>
/* Add custom styles here */
</style>
