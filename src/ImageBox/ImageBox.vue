<template>
    <div class="image-box d-flex flex-column">
        <img :src="src"
             :alt="alt"
             :id="id"
             :width="width"
             :height="height"
        >
        <label class="text-center" :for="id">
            {{label}}
        </label>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class ImageBox extends Vue {
        @Prop({type: String, required: true}) src!: string;
        @Prop({type: String, required: true}) alt!: string;
        @Prop({type: String, required: true}) label!: string;
        @Prop({type: String, required: true}) id!: string;

        @Prop({type:Number}) width!:number;
        @Prop({type:Number}) height!:number;

    }
</script>

<style scoped>

</style>