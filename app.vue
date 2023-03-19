<template>
  <div>
    <Nav />
    <NuxtPage />

  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
