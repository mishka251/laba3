import { Vue } from 'vue-property-decorator';
export default class TextInput extends Vue {
    name: string;
    val: string;
    label: string | undefined;
    onMyChange(): string;
}
