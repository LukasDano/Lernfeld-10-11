import { type FC, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export type SelectOption = {
    label: string;
    value: string;
    selected: boolean;
};

type MultipleValueSelectorProps = {
    name: string;
    description?: string;
    options: SelectOption[];
    onChange: (newOptions: SelectOption[]) => void;
};

export const MultipleValueSelector: FC<MultipleValueSelectorProps> = ({
    name,
    description = '',
    options,
    onChange,
}) => {
    const [availableOptions, setAvailableOptions] = useState<SelectOption[]>(options);

    const animatedComponents = makeAnimated();

    const handleChange = (selectedOptions: SelectOption[]) => {
        const selectedLabels = new Set(selectedOptions.map((opt) => opt.label));

        const newOptions = availableOptions.map((option) => ({
            ...option,
            selected: selectedLabels.has(option.label),
        }));

        setAvailableOptions(newOptions);
        onChange(newOptions);
    };

    return (
        <div className={'flex justify-between mb-3'}>
            <div className={'mr-6 content-center'}>
                <span className={'font-medium text-gray-600 dark:text-gray-100'}>{name}</span>
                <span className={'font-light text-gray-900 dark:text-gray-200 block max-w-[20vw]'}>{description}</span>
            </div>
            <div className={'inline-flex items-center cursor-pointer ms-auto'}>
                <Select
                    className={'min-w-[12vw]'}
                    classNames={{
                        control: () => 'bg-gray-50 border-gray-300 text-gray-900',
                        menu: () => 'bg-gray-50 border-gray-300 text-gray-900',
                        multiValue: () => 'dark:bg-gray-300 dark:text-gray-700',
                    }}
                    styles={{
                        option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused ? '#D1D5DBFF' : '',
                            color: state.isFocused ? '#374151FF' : '',
                        }),
                    }}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={availableOptions.filter((opt) => opt.selected)}
                    isMulti={true}
                    options={availableOptions}
                    placeholder={'Select ...'}
                    onChange={(val) => handleChange(val as SelectOption[])}
                    noOptionsMessage={() => 'No selectable options'}
                />
            </div>
        </div>
    );
};
