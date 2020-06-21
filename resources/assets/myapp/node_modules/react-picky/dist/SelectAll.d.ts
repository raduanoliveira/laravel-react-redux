import * as React from 'react';
import { SelectionState } from './types';
declare type SelectAllProps = {
    tabIndex: number | undefined;
    disabled: boolean;
    allSelected: SelectionState;
    id: string;
    selectAllText?: string;
    toggleSelectAll(): void;
    visible: boolean;
};
declare const SelectAll: React.FC<SelectAllProps>;
export { SelectAll };
