import { useState } from "react";
import { ButtonCollapse } from "./styles";

interface CollapseButtonProps {
    label: string;
    children: React.ReactNode;
}

export const CollapseButton: React.FC<CollapseButtonProps> = ({
    label,
    children
}) => {

    const [collapse, setCollapse] = useState(true);

    return (

        <div>
            <ButtonCollapse onClick={() => setCollapse(!collapse)}>
                {label}
                {collapse
                    ? <img src='/assets/img/icons/chevron-up-icon.svg' alt='collapse up' />
                    : <img src='/assets/img/icons/chevron-bottom-icon.svg' alt='collapse down' />
                }
            </ButtonCollapse>
            {collapse && children}
        </div>
    );  
};