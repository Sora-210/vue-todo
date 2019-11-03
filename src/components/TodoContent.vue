<template>
    <li class="item">
        <span>{{ content }}</span>
        <div class="button">
            <span class="clear" @click="$emit('clear')">〇</span><span class="remove" @click="$emit('remove')">✕</span>
        </div>
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
}
span {
    float:left;
    line-height: 60px;
    padding: 0 15px;
}
.item .button {
    float:right;
}
.clear {
    background-color:rgba(139, 255, 113, 0.733);
    height: 50px;
    width: 50px;
    line-height: 50px;
    cursor:pointer;
    padding:0;
    margin: 5px;
}
.remove {
    background-color:rgb(255, 144, 144);
    height: 50px;
    width: 50px;
    line-height: 50px;
    cursor:pointer;
    padding:0;
    margin: 5px;
}
</style>