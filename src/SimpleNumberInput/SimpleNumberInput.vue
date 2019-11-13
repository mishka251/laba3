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
                <span class="invalid-feedback" v-for="error in errors">{{error}}</span>
            </label>


            <!--            <span> My val {{value}}</span>-->
        </div>
    </ValidationProvider>
</template>

<script lang="ts" src="../BaseComponents/BaseNumberInput.ts"></script>

<!--<style scoped></style>-->