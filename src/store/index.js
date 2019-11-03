import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        todoList: [],
        clearList: []
    },
    mutations: {
        clear(state, index) {
            state.clearList.push(state.todoList[index].content)
            state.todoList.splice(index, 1);
        },
        remove(state, index) {
            state.todoList.splice(index, 1);
        }
    }
})