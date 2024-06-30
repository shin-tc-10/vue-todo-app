// 関数を定義する
const app = Vue.createApp({

    // dataを定義する
    data: () => ({
        inputText: '',
        todos: []
    }),
    // methodを定義する
    methods: {
        addItem: function (event) {
            let todo = {
                item: this.inputText,
                isDone: false
            }
            this.todos.push(todo);
            this.inputText = '';
        },
        deleteItem: function (index) {
            this.todos.splice(index, 1);
        }
    }

})
// 関数をマウントする
app.mount('#app');
