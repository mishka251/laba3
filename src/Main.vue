<template>
    <div>

        <RadioButtonsList
                :name="'inputType'"
                :PossibleValues="[1, 2, 3]"
                :selectedValue.sync="inputType"
        ></RadioButtonsList>
        <RadioButtonsList
                :name="'outputType'"
                :PossibleValues="[1, 2, 3]"
                :selectedValue.sync="outputType"
        ></RadioButtonsList>
    </div>
</template>

<script lang="ts">
    import RadioButtonsList from "./RadioButtonsField.vue";
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