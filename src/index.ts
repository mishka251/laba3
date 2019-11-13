import Vue from 'vue';

//import Vuelidate from 'vuelidate';
import {ValidationProvider} from 'vee-validate';
import {configure} from 'vee-validate';
import MainPage from "./Main.vue";

window.onload = function () {


    let vue_app = new Vue({
        el: '#vue-app',
        render: h => h(MainPage),
        components: {
            MainPage
        },
    });
}


