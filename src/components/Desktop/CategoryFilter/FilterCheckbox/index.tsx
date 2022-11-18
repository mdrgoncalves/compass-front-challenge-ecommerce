import { FilterContainer } from "./styles";

interface FilterCheckboxProps {
    title: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
    title,
    checked,
    onChange
}) => {

    return (
        <FilterContainer>
            <label>
                <input
                    type='checkbox'
                    checked={checked}
                    onChange={onChange}
                />
                <span>{title}</span>
            </label>
        </FilterContainer>
    );  
};