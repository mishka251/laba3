<template>
    <div class="radiolist">
        <label> {{label}}</label>
        <div class="item" v-for="value of PossibleValues">
            <label>
                <input type="radio" :name="name" :value="value" v-model="_value">
                {{value}}
            </label>
        </div>
    </div>

</template>

<script lang="ts">
    import BaseTextInput from "../BaseComponents/BaseTextInput";
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class RadioButtonsList extends BaseTextInput{
        @Prop({type:String, required:true}) name!:string;
        @Prop({type:Array, required:true}) PossibleValues!:Array<any>;
        //selectedValue:string="2";
    }
</script>

<style scoped>

</style>