<template>
    <div>
        <h4>자식컴포넌트</h4>
        <p>{{ myMsg }}</p>
        <p v-text="myMsg"></p>
        <p v-text="dynamicName"></p>
        <hr>
        <button @click="$emit('someEvent')">부모전송</button>
        <button @click="buttonClick">부모전송2</button>
        <button @click="emitArgs">추가인자전달</button>
        <hr>
        <ParentGrandChild @update-namee="updateNameee" :my-msg="myMsg" />
    </div>
</template>

<script setup>
import ParentGrandChild from './ParentGrandChild.vue';
// 부모에게 받은  props 사용 방법은 2가지
// defineProps(['myMsg'])

const emit = defineEmits(["someEvent", "emitArgss", "updateNameeee"])
const buttonClick = function () {
    emit("someEvent")
}
const emitArgs = function () {
    emit('emitArgss', 1, 2, 3)
}
const updateNameee = function (namee) {
    console.log(namee)
    emit('updateNameeee', namee)
}


defineProps({
    myMsg: String,
    dynamicName: String,
})
</script>

<style scoped></style>