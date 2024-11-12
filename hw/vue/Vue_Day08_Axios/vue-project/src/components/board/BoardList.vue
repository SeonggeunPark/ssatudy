<template>
    <div>
        <h4>게시글 목록</h4>
        <hr>
        <table>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>쓰니</th>
                <th>조회수</th>
                <th>등록일</th>
            </tr>
            <!-- 아래의 tr태그를 반복 시켜야 할 것 같아. RestAPI로-->
            <tr v-for="board in store.boardList" :key="board.id">
                <td>{{ board.id }}</td>
                <td>{{ board.title }}</td>
                <td>{{ board.writer }}</td>
                <td>{{ board.viewCnt }}</td>
                <td>{{ board.regDate }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { useBoardStore } from '@/stores/board';
import { onMounted } from 'vue'

const store = useBoardStore();
onMounted(() => {
    console.log('뭔데 2')
    store.getBoardList();
})
</script>

<style scoped></style>
