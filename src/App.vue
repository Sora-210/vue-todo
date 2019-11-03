<template>
  <div id="app">
    <header>
      <h1>Todoリスト</h1>
    </header>
    <hr />
    <div id="add-form">
      <label for="todo">やるとこ</label>
      <input type="text" id="todo" v-model="todo" />
      <button @click="addTodo">追加</button>
    </div>
    <hr />
    <div id="todo-item-list">
      <h2>やることリスト</h2>
      <ul>
        <transition-group mode="out-in" name="fade">
          <TodoContent
            v-for="(todo, index) in this.$store.state.todoList"
            :content="todo.content"
            :key="todo.id"
            @clear="$store.commit('clear', index)"
            @remove="$store.commit('remove', index)"
          ></TodoContent>
        </transition-group>
      </ul>
    </div>
    <hr>
    <div id="clear-item-list">
      <h2>できたことリスト</h2>
      <ul>
        <transition-group mode="out-in" name="fade">
          <ClearContent
            v-for="(todo, index) in this.$store.state.clearList"
            :content="todo"
            :key="index"
          ></ClearContent>
        </transition-group>
      </ul>
    </div>
    
  </div>
</template>

<script>
import TodoContent from "./components/TodoContent";
import ClearContent from "./components/ClearContent.vue";

export default {
  name: "app",
  components: {
    TodoContent,
    ClearContent
  },
  data() {
    return {
      id: 0,
      todo: "",
      todoList: []
    };
  },
  methods: {
    addTodo() {
      if (this.todo !== "") {
        this.$store.state.todoList.push({ content: this.todo, id: this.id });
        this.todo = "";
        this.id += 1;
      } else {
        alert("やることを入力してください");
      }
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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

h2 {
  font-size: 17px;
}

/* transition */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
  height: 60px;
}
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-leave-to {
  opacity: 0;
}
/* transition-end */
</style>
