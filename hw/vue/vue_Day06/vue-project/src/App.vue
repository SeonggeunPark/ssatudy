<template>
  <div>
    <h1>App.vue</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">Home</RouterLink> |
      <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
      <RouterLink :to="{ name: 'about' }">Home</RouterLink> |
      <RouterLink :to="{ name: 'user', params: { id: 'hodqhr' } }">양띵균</RouterLink> |
      <RouterLink :to="{ name: 'user', params: { id: 'ssafy' } }">김싸피</RouterLink> |
      <RouterLink :to="{ name: 'login' }">로그인</RouterLink> |
    </nav>

    <RouterView />
  </div>
</template>

<script setup>

</script>

<style scoped></style>