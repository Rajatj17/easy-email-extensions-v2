export interface ConfigurationPanelProps {
    showSourceCode: boolean;
    jsonReadOnly: boolean;
    mjmlReadOnly: boolean;
    height: string;
    onBack?: () => void;
    compact?: boolean;
}
export declare function ConfigurationPanel({ showSourceCode, height, onBack, compact, }: ConfigurationPanelProps): JSX.Element | null;
