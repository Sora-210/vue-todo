<template>
    <li class="item">
        <span>{{ content }}</span>
    </li>
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>

<style scoped>
.item {
    height: 60px;
    width: 600px;
    border-top: solid 1px rgb(138, 137, 137);
    border-bottom: solid 1px rgb(138, 137, 137);
    margin: 5px auto;
    clear: both;
    list-style:none;
    text-align: center;
}
span {
    float:left;
    line-height: 60px;
    width: 100%;
}
</style>