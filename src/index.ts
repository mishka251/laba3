import Vue from 'vue';

import {ValidationProvider, ValidationObserver} from 'vee-validate';
import {configure} from 'vee-validate';
import MainPage from "./Main.vue";

window.onload = function () {

    Vue.component('ValidationProvider', ValidationProvider);
    Vue.component('ValidationObserver', ValidationObserver);

    let vue_app = new Vue({
        el: '#vue-app',
        render: h => h(MainPage),
        components: {
            MainPage
        },
    });
};


