<template>
  <div>
    <h3>BoardView</h3>
    <router-link to="/board">게시글 목록</router-link>
    <router-link :to="{ name: 'boardList' }">게시글 목록</router-link>
    <router-link to="/board/create">게시글 등록</router-link>
    <router-link :to="{ name: 'boardCreate' }">게시글 등록</router-link>
    <hr>

    <router-view />
  </div>
</template>

<script setup>

</script>

<style scoped></style>