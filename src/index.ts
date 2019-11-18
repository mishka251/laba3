import Vue from 'vue';

import {ValidationProvider, ValidationObserver} from 'vee-validate';
import {configure} from 'vee-validate';
import VueMain from "./Main.vue";

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

    new Vue({
        el: '#vue-app',
        render: function (h) {
            return h(VueMain, {
                props: {
                    //@ts-ignore
                    possible_values: JSON.parse(this.$el.attributes.possible_values.value.replace(/'/g, '"')),
                    //@ts-ignore
                    cat_image_right_path: this.$el.attributes.image_path_right.value,
                    //@ts-ignore
                    cat_image_left_path: this.$el.attributes.image_path_left.value,
                }
            })
        },
        components: {
            VueMain
        },
    });
};


