import { useState } from "react";
import { 
    FlexContainer, 
    GridFilterContainer, 
    NumberInput, 
    ShowFilterContainer, 
    SortInput 
} from "./styles";

interface GridFilterProps {
    indexOfFirstProduct: number;
    indexOfLastProduct: number;
    totalProducts: number;
    setProductsPerPage: React.Dispatch<React.SetStateAction<number>>;
    setSortState: React.Dispatch<React.SetStateAction<string>>;
}

export const GridFilter: React.FC<GridFilterProps> = ({
    indexOfFirstProduct,
    indexOfLastProduct,
    totalProducts,
    setProductsPerPage,
    setSortState
}) => {

    // Number of products shown
    const [number, setNumber] = useState(9);

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (!(value > 9) && !(value < 3)) {
            setNumber(value);
            setProductsPerPage(value);
        } 
    }

    // Setting sort
    const [sort, setSort] = useState('position');

    const sortHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSort(value);
        setSortState(value);
    }
    
    return (

        <GridFilterContainer>
            <ShowFilterContainer>
                <div>
                    <img src='/assets/img/icons/grid-icon.svg' alt='grid icon' />
                    <img src='/assets/img/icons/list-icon.svg' alt='list icon' />
                </div>
                <p>
                    Showing
                    <span> {indexOfFirstProduct + 1} - {indexOfLastProduct} </span>
                    of
                    <span> {totalProducts} </span>
                    items
                </p>
            </ShowFilterContainer>
            <FlexContainer>
                <p>To Show:</p>
                <NumberInput 
                    type='number' 
                    value={number}
                    onChange={(event) => inputHandler(event)}
                />
            </FlexContainer>
            <FlexContainer>
                <p>Sort By</p>
                <SortInput 
                    name='sort' 
                    value={sort}
                    onChange={(event) => sortHandler(event)}
                >
                    <option value='price'>Price</option>
                    <option value='name'>Name</option>
                    <option value='position'>Position</option>
                </SortInput>
            </FlexContainer>
        </GridFilterContainer>
    );  
};