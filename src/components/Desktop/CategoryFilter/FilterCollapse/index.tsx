import { useState } from 'react';
import { ButtonCollapse } from './styles';

interface FilterCollapseProps {
    title: string;
    children?: React.ReactNode;
}

export const FilterCollapse: React.FC<FilterCollapseProps> = ({
    title,
    children
}) => {

    const [collapse, setCollapse] = useState(false);

    return (
        <div>
            <ButtonCollapse onClick={() => setCollapse(!collapse)}>
                {title}
                {collapse
                    ? <img src='/assets/img/icons/minus-icon.svg' alt='collapse down' />
                    : <img src='/assets/img/icons/plus-icon.svg' alt='collapse up' />
                }
            </ButtonCollapse>
            {collapse && children}
        </div>
        
    );  
};  