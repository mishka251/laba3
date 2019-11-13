<template>
    <div class="radiolist">
        <div class="item" v-for="value of PossibleValues">
            <label>
                <input type="radio" :name="name" :value="value" v-model="_selectedValue">
                {{value}}
            </label>
        </div>
    </div>

</template>

<script lang="ts">
    import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
    @Component
    export default class RadioButtonsList extends Vue{
        @Prop({type:String, required:true}) name!:string;
        @Prop({type:Array, required:true}) PossibleValues!:Array<any>;
        @PropSync('selectedValue', {type:String}) protected _selectedValue!:string;
        //selectedValue:string="2";
    }
</script>

<style scoped>

</style>