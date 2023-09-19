import { BlockLayerProps } from '@extensions/BlockLayer';
import React from 'react';
export interface ExtensionProps extends BlockLayerProps {
    children?: React.ReactNode | React.ReactElement;
    categories: Array<{
        label: string;
        active?: boolean;
        blocks: Array<{
            type: string;
            payload?: any;
            category?: string;
            json?: any;
            title?: string | undefined;
        }>;
        displayType?: 'grid';
    } | {
        label: string;
        active?: boolean;
        blocks: Array<{
            payload?: any;
            category: string;
            title?: string | undefined;
        }>;
        displayType: 'column';
    } | {
        label: string;
        active?: boolean;
        blocks: Array<{
            payload?: any;
            category?: string;
        }>;
        displayType: 'widget';
    } | {
        label: string;
        active?: boolean;
        blocks: Array<React.ReactNode>;
        displayType: 'custom';
    }>;
    showSourceCode?: boolean;
    jsonReadOnly?: boolean;
    mjmlReadOnly?: boolean;
    compact?: boolean;
    changeCategories?: (category: string) => void;
    templates?: Array<Record<string, any>>;
    mergeTagData?: Record<string, any>;
    updateDefaultData?: (id: number) => void;
}
export declare const ExtensionContext: React.Context<ExtensionProps>;
export declare const ExtensionProvider: React.FC<ExtensionProps>;
export declare function useExtensionProps(): ExtensionProps;
