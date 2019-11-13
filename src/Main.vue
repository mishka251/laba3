<template>
    <div>
        <form>
            <div class="form-control">
                <RadioButtonsList
                        :label="'Исходное тип'"
                        :name="'inputType'"
                        :PossibleValues="possibleValues"
                        :value.sync="inputType"
                ></RadioButtonsList>
            </div>
            <div class="form-control">
                <RadioButtonsList
                        :label="'Желаемый тип'"
                        :name="'outputType'"
                        :PossibleValues="possibleValues"
                        :value.sync="outputType"
                ></RadioButtonsList>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import RadioButtonsList from "./RadioButtonsField/RadioButtonsField.vue";
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {RadioButtonsList}
    })
    export default class Main extends Vue {
        //name: "Main"
        inputType: string = "";
        outputType: string = "";
        possibleValues: string[] = [];

        mounted() {
            this.possibleValues = ['Грамм', "Килограмм"];
            //TODO взять с сервера ч-з data в шаблоне
        }
    }
</script>

<style scoped>

</style>