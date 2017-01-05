Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{task.task}}</task></div>',

    data () {
        return {
            tasks: [
                {task: 'Go to the store', complete: true},
                {task: 'Go to the salon', complete: false},
                {task: 'Go to the shop', complete: true},
                {task: 'Go to the bleh', complete: false},
            ]
        }
    }
})

Vue.component('task', {
    template: '<li><slot></slot></li>'
})

var app = new Vue({

    el : '#root',
    data: {

    }
})
