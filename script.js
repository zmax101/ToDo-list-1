Vue.component('task', {
    props: ['data'],
    methods: {
        task_done() {
            this.$emit('task_done');
        },
        task_comp() {
            this.$emit('task_comp');
        }
    },
    template: `
        <div class="task">
            <div>
                <h3 class="task__title">{{data.title}}</h3>
                <p class="task__desc">{{data.desc}}</p>
            </div>
            <div>
                <button @click='task_comp()' class="task__comp">
                    <i class="far fa-check-square"></i>
                </button>
                <button @click='task_done()' class="task__done">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    `
})

let vue = new Vue({
    el: '#app',
    data: {
        new_task: {
            title: '',
            desc: ''
        },
        tasks: [
            {
                title: 'Купить хлеб',
                desc: '(пример задачи)',
                active: false
            },
            {
                title: 'Купить мазик',
                desc: '(пример задачи)',
                active: false
            }
        ],
    },
    methods: {
        color_task: function () {
            let elements = document.getElementsByClassName("task");
            // НАДО СДЕЛАТЬ СМЕНУ ФОНА!!!!!!
        },
        delete_task(id) {
            this.tasks.splice(id, 1);
        },
        add_task() {
            if (this.new_task.title != '') {
                this.tasks.push({
                    title: this.new_task.title,
                    desc: this.new_task.desc
                });
                this.new_task.title = '';
                this.new_task.desc = '';
            }
        },
    }
})