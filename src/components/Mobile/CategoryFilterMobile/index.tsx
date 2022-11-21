import { useState } from "react";
import { SortModal } from "./SortModal";
import { FiltersContainer, FilterButton } from "./styles";

export const CategoryFilterMobile: React.FC = () => {

    const [collapse, setCollapse] = useState(false);

    return (
        <FiltersContainer>
            {collapse && <SortModal onClose={() => setCollapse(false)} />}
            <FilterButton onClick={() => setCollapse(true)}>
                <img src='/assets/img/icons/sort-icon.svg' alt='sort icon' />
                <span>SORT</span>
            </FilterButton>
            <FilterButton>
                <img src='/assets/img/icons/filter-icon.svg' alt='filter icon' />
                <span>FILTER</span>
            </FilterButton>
        </FiltersContainer>
    );  
};