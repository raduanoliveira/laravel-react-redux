import * as React from 'react';
export declare type FilterProps = {
    onFilterChange(term: string): void;
    tabIndex: number | undefined;
    placeholder?: string;
} & React.RefAttributes<HTMLInputElement>;
declare const Filter: React.FC<FilterProps>;
export { Filter };
