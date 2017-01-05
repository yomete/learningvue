Vue.component('modal', {

    template: '<div class="modal is-active"><div class="modal-background"></div><div class="modal-content"><div class="box"><p>Lorem Ipsum dolor sit amet</p></div></div><button class="modal-close" @click="$emit(\'close\')"></button></div>'


})

var app = new Vue({

    el : '#root',

    data: {
        showModal: false
    }
})
