import * as React from 'react';
import { OptionsType, OptionType, SelectionState } from './types';
declare type PlaceholderProps = {
    placeholder?: string;
    value: OptionsType | OptionType | undefined;
    numberDisplayed: number;
    multiple: boolean;
    valueKey?: string;
    labelKey?: string;
    manySelectedPlaceholder?: string;
    allSelectedPlaceholder?: string;
    allSelected: SelectionState;
};
declare const Placeholder: React.FC<PlaceholderProps>;
export { Placeholder };
