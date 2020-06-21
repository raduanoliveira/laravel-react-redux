import * as React from 'react';
import { OptionType } from './types';
declare type OptionProps = {
    isSelected: boolean;
    valueKey?: string;
    labelKey?: string;
    id: string;
    item: OptionType;
    style?: React.CSSProperties;
    selectValue(option: OptionType): void;
    multiple: boolean;
    tabIndex: number | undefined;
    disabled: boolean;
};
declare const Option: React.FC<OptionProps>;
export { Option };
