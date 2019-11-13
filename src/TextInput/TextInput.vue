<template>
    <ValidationProvider
            v-slot="{ errors, classes }"
            :name="name"
            :tag="'div'"
    >
        <div class="TextInput">
            <label :class="{...classes}">{{label}}
                <input
                        type="text"
                        :class="{...classes, 'form-control':true}"
                        :required="isRequired"
                        :name="name"
                        v-model="_value"
                        :placeholder="placeholder">
            </label>
            <!--            <span> My value: {{value}}</span>-->
            <span class="invalid-tooltip" v-for="error in errors">{{ error }}</span>
        </div>

    </ValidationProvider>
</template>

<script lang="ts" src="../BaseComponents/BaseTextInput.ts"></script>

<style scoped></style>