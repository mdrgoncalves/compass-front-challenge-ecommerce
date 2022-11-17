import { Link } from "react-router-dom";
import { useWidth } from "../../utils/useWidth";
import { Heading } from "../Heading";
import { HeaderSectionContainer } from "./styles";

interface HeaderSectionProps {
    isDesktopHidden?: boolean;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
    isDesktopHidden = false,
}) => {

    return (
        <HeaderSectionContainer hidden={isDesktopHidden}>
            <Heading>
                Shop by Brands
            </Heading>
            <Link to='/'>
                View All
                {useWidth({
                    renderMobile: () => (
                        <img src='/assets/img/chevron-right-icon-small.svg' alt='view all' />
                    ),
                    renderDesktop: () => (
                        <img src='/assets/img/chevron-right-icon.svg' alt='view all' />
                    )
                })}
            </Link>
        </HeaderSectionContainer>
    );  
};