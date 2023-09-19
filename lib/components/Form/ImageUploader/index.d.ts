import React from 'react';
import { UploaderServer } from '@extensions/AttributePanel/utils/Uploader';
export interface ImageUploaderProps {
    onChange: (val: string) => void;
    value: string;
    label: string;
    uploadHandler?: UploaderServer;
    autoCompleteOptions?: Array<{
        value: string;
        label: React.ReactNode;
    }>;
}
export declare function ImageUploader(props: ImageUploaderProps): JSX.Element;
