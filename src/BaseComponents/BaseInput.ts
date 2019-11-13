import {Vue, Prop, Component, PropSync} from 'vue-property-decorator'


import {required} from 'vee-validate/dist/rules';
import {extend} from 'vee-validate';

extend('required', {
    ...required,
    message: 'Обязательное поле',
});

@Component
export default class BaseInput extends Vue {
    @PropSync('value') protected _value!: any;

    @Prop({type: String, required: true}) protected helpText!: string;
    @Prop({type: String, required: true}) protected label!: string;
    @Prop({type: String, required: true}) protected name!: string;
    @Prop({type:Boolean}) protected isRequired!:boolean;
}
