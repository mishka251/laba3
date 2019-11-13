import {Component, Mixins, Prop, PropSync} from 'vue-property-decorator'
import BaseInput from "./BaseInput";

import {numeric} from 'vee-validate/dist/rules';
import {extend} from 'vee-validate';

import {min_value, max_value} from 'vee-validate/dist/rules';


@Component
export default class BaseNumberInput extends BaseInput {
    @PropSync('value', {type: Number}) protected _value!: number;

    @Prop(Number) min: number | undefined;
    @Prop(Number) max: number | undefined;
    @Prop(Number) step: number | undefined;

    mounted() {
        extend('numeric', numeric);


        extend('min_value', {
            ...min_value,
            message: `Должно быть не меньше {min}`,
        });

        extend('max_value', {
            ...max_value,
            message: `Должно быть не больше {max}`,
        });

    }

}
