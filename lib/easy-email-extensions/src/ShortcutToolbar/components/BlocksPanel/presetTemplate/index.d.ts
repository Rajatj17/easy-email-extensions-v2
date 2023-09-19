import { TextBlockItem } from './TextBlockItem';
import { ImageBlockItem } from './ImageBlockItem';
export declare const defaultCategories: {
    readonly title: string;
    name: string;
    blocks: ({
        type: any;
        readonly title: string;
        readonly description: string;
        component: typeof TextBlockItem;
    } | {
        type: any;
        readonly title: string;
        readonly description: JSX.Element;
        component: typeof ImageBlockItem;
    })[];
}[];
