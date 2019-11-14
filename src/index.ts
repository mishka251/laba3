import Vue from 'vue';

import {ValidationProvider, ValidationObserver} from 'vee-validate';
import {configure} from 'vee-validate';
import MainPage from "./Main.vue";

require('./style.scss');
require('bootstrap');

window.onload = function () {

    configure({
        classes: {
            valid: 'is-valid', // one class
            invalid: ['is-invalid'] // multiple classes
        }
    });



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


