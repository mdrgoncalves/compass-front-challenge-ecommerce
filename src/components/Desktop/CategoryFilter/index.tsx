import { FilterCollapse } from './FilterCollapse';
import { FilterCheckbox } from './FilterCheckbox';

export const CategoryFilter: React.FC = () => {

    const colors = ['Blue', 'Maroon Red', 'Crimson Red', 'Seinna Pink', 'Teal', 'Aquamarine', 'Off-White', 'Muave Orange'];

    return (
        <div>
            <FilterCollapse title="Size" />
            <FilterCollapse title="Colors">
                {colors.map(color => (
                    <FilterCheckbox title={color} />
                ))}
            </FilterCollapse>
            <FilterCollapse title="Brand" />
            <FilterCollapse title="Price Range" />
            <FilterCollapse title="Discount" />
            <FilterCollapse title="Availability" />
        </div>
    );  
};