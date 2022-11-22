import { ButtonTab } from "./styles";

interface MobileButtonTabProps {
    label: string;
    route: string;
}

export const MobileButtonTab: React.FC<MobileButtonTabProps> = ({
    label,
    route
}) => {

    return (

        <ButtonTab to={route}>
            {label}
            <img src='/assets/img/chevron-right-icon.svg' alt='Go to page' />
        </ButtonTab>
    );  
};