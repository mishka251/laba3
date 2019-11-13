import {Component, Mixins, Prop, PropSync} from 'vue-property-decorator'
import BaseInput from "./BaseInput";
import {regex} from 'vee-validate/dist/rules';
import {extend} from 'vee-validate';

@Component
export default class BaseTextInput extends BaseInput {
    @PropSync('value', {type: String}) protected _value!: string;

    @Prop({type: Number}) protected maxlength!: number;
    @Prop({type: String}) protected pattern!: string;
    @Prop({type: String}) placeholder: string | undefined;

    @Prop({type: Array}) RegexBlackList!: Array<string>;
    @Prop({type: Array}) RegexWhiteList!: Array<string>;

    mounted() {
        let black_list = this.RegexBlackList;//bad_words;
        if (black_list) {
            extend('regexBlackList', {
                ...regex,
                validate: value => !black_list.some(pattern => value.match(pattern)),
                message: "Значение в списке запрещенных"
            });
        }


        let white_list = this.RegexBlackList;//good_words;
        if (white_list) {
            extend('regexWhiteList', {
                ...regex,
                validate: value => white_list.some(pattern => value.match(pattern)),
                message: "Не является допустимым значением"
            });
        }
    }
}


