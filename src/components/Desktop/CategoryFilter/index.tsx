import { FilterCollapse } from './FilterCollapse';
import { FilterCheckbox } from './FilterCheckbox';
import { CategoryFilterWrapper } from './styles';
import { useWidth } from '../../../utils/useWidth';

export const CategoryFilter: React.FC = () => {

    const colors = ['Blue', 'Maroon Red', 'Crimson Red', 'Seinna Pink', 'Teal', 'Aquamarine', 'Off-White', 'Muave Orange'];

    return (
        <>
        {useWidth({
            renderMobile: () => (
                null
            ),
            renderDesktop: () => (
                <CategoryFilterWrapper>
                    <FilterCollapse title="Size" />
                    <FilterCollapse title="Colors">
                        {colors.map((color, index) => (
                            <FilterCheckbox key={index} title={color} />
                        ))}
                    </FilterCollapse>
                    <FilterCollapse title="Brand" />
                    <FilterCollapse title="Price Range" />
                    <FilterCollapse title="Discount" />
                    <FilterCollapse title="Availability" />
                </CategoryFilterWrapper>
            )
        })}
        </>
    );  
};