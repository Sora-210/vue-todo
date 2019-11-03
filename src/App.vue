<template>
  <div id="app">
    <header>
      <h1>Todoリスト</h1>
    </header>
    <hr>
    <div id="add-form">
      <label for="todo">やるとこ</label>
      <input type="text" id="todo" v-model="todo">
      <button @click="addTodo">追加</button>
    </div>
    <TodoContent
      v-for="(todo, index) in todoList"
      :content="todo" :key="index"
      @clear="clear(index)"
      @remove="remove(index)">
    </TodoContent>
  </div>
</template>

<script>
import TodoContent from './components/TodoContent'

export default {
  name: 'app',
  components: {
    TodoContent
  },
  data() {
    return {
      todo:"",
      todoList: []
    }
  },
  methods: {
    addTodo() {
      this.todoList.push(this.todo)
      alert(this.todo)
      this.todo = ""
    },
    clear(index) {
      // alert(index)
      this.todoList.splice(index, 1)
    },
    remove(index) {
      // alert(index)
      this.todoList.splice(index, 1)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


header {
  height: 40px;
  width: 100%;
}

header h1 {
  font-size: 25px;
  margin: 0;
  line-height: 40px;
}

</style>
