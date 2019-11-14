<template>
    <ValidationProvider
            v-slot="{ errors, classes }"
            :name="name"
            :tag="'div'"
    >
        <div class="SimpleNumberInput">
            <label :class="{...classes}">{{label}}
                <input
                        type="number"
                        :name="name"
                        v-model.number="_value"
                        :class="{...classes, 'form-control':true}"
                >
                  <small class="form-text text-muted">{{helpText}}</small>
                <span class="invalid-tooltip" v-for="error in errors">{{ error }}</span>
            </label>


            <!--            <span> My val {{value}}</span>-->
        </div>
    </ValidationProvider>
</template>

<script lang="ts" >
    import Input from "../BaseComponents/BaseNumberInput";
    export default Input;
</script>

<!--<style scoped></style>-->