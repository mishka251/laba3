<template>

    <ValidationProvider
            v-slot="{ errors, classes }"
            :name="name"
            :tag="'div'"
            :class="'btn-group'"
    >
        <div>
            <label> {{label}}</label>
            <div class="custom-control custom-radio position-relative" v-for="(value, index) of PossibleValues">
                <input
                        :id="'radio'+name+value"
                        :class="{...classes, 'custom-control-input':true}"
                        type="radio"
                        :required="isRequired"
                        :name="name"
                        :value="value"
                        v-model="_value">
                <label
                        class="custom-control-label"
                        :for="'radio'+name+value">
                    {{value}}
                </label>

                <div class="invalid-feedback"
                     v-if="index === PossibleValues.length - 1">
                    <span v-for="error in errors">
                        {{ error }}
                    </span>
                </div>
            </div>
            <small class="form-text text-muted">{{helpText}}</small>
        </div>
    </ValidationProvider>

</template>

<script lang="ts">
    import BaseTextInput from "../BaseComponents/BaseTextInput";
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class RadioButtonsList extends BaseTextInput {
        @Prop({type: String, required: true}) name!: string;
        @Prop({type: Array, required: true}) PossibleValues!: Array<any>;
    }
</script>

<style scoped>

</style>