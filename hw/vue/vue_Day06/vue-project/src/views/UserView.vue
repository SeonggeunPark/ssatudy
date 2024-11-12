<template>
    <div>
        <h3>UserView</h3>
        <p>{{ $route.params.id }}</p> // 바로접근은 권장 X!!
        <p>{{ userId }}</p> // 권장
        <p>{{ userId2 }}</p>

        <hr>

        <button @click="goHome"> 홈으로 </button>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
// route 사용하기 위해 연결
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
const route = useRoute();
const router = useRouter();

const userId = ref(route.params.id);
const userId2 = ref(route.params.id);

watch(() => route.params.id, (newId) => {
    userId.value = newId;
})


const goHome = function () {
    // 직접 URL 경로를 작성할 수 있음
    // router.push('/')

    // 이름으로 호출도 할 수 있음
    // router.push({ name: 'about' })

    router.replace({ name: 'home' })
}

// onBeforeRouteLeave(() => {
//     // window.confirm 이라고 안해도 window는 생략 가능
//     const answer = confirm('정말로 떠나실 건가요??ㅋㅋㅋ')
//     console.log(answer)
//     // if (!answer) return false
//     return answer
// })

onBeforeRouteUpdate(() => {
    userId2.value = to.params.id
})
</script>

<style scoped></style>