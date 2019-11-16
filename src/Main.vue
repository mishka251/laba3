<template>
    <div class="w-100 h-100">

        <ValidationObserver
                ref="observer"
                v-slot="{ valid }"
                :tag="'div'"
        >
            <form class="">
                <div class="form-group">
                    <RadioButtonsList
                            :label="'Исходное тип'"
                            :name="'input_type'"
                            :isRequired="true"
                            :PossibleValues="possible_values"
                            :value.sync="input_type"
                            :helpText="'Выберите одно из значений'"
                    ></RadioButtonsList>


                    <RadioButtonsList
                            :label="'Желаемый тип'"
                            :name="'output_type'"
                            :isRequired="true"
                            :PossibleValues="possible_values"
                            :value.sync="output_type"
                            :helpText="'Выберите одно из значений'"
                    ></RadioButtonsList>
                </div>


                <SimpleNumberInput
                        :label="'Входное значение'"
                        :name="'input_value'"
                        :isRequired="true"
                        :value.sync="input_value"
                        :helpText="'Введите число'"
                        :max="100"
                ></SimpleNumberInput>

                <div v-if="output_value!==null">Ваш результат = {{output_value}}</div>

                <button class="btn btn-primary" type="submit" @click="onSubmit">Отправить</button>
            </form>
        </ValidationObserver>

    </div>
</template>

<script lang="ts">
    import RadioButtonsList from "./RadioButtonsField/RadioButtonsField.vue";
    import {Component, Prop, Vue} from 'vue-property-decorator';

    import SimpleNumberInput from "./SimpleNumberInput/SimpleNumberInput.vue";

    import axios from 'axios';

    let $ = require('jquery');

    let url = 'calc/';
    @Component({
        components: {RadioButtonsList, SimpleNumberInput}
    })
    export default class VueMain extends Vue {
        //name: "Main"
        input_type: string | null = null;
        output_type: string | null = null;
        @Prop({required: true}) possible_values: any;
        input_value: number = 0;
        output_value: number | null = null;

        // mounted() {
        //     let possible_values: string = $('#possible-values').data('possible-values');
        //     possible_values = possible_values.replace(/'/g, '"');
        //     this.possible_values = JSON.parse(possible_values);
        // }

        async onSubmit(event: Event) {
            event.preventDefault();
            //@ts-ignore
            const isValid = await (this.$refs.observer).validate();
            if (!isValid) {
                console.log('invalid');
                return;
            }


            let data = {
                'input_type': this.input_type,
                'output_type': this.output_type,
                'input_value': this.input_value
            };

            let processResponse = (response: any) => {
                console.log(response);
                if (response.data.valid) {
                    console.log('All ok');
                    this.output_value = response.data.output_value;

                } else {
                    console.log('oops');
                    //@ts-ignore
                    this.$refs.observer.setErrors(response.data.errors);
                }
            };
            axios.get(url, {params: data}).then(processResponse).catch((error) => console.log('error   ' + error));

        }

    }
</script>

<style scoped>

</style>