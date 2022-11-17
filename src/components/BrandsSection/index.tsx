import { Link } from "react-router-dom";
import { HeaderSection } from "../HeaderSection";
import { BrandsContainer, BrandsGrid } from "./styles";

export const BrandsSection: React.FC = () => {

    return (
        <BrandsContainer>
            <HeaderSection isDesktopHidden/>
            <BrandsGrid>
                <Link to='/'>
                    <img src='/assets/img/icons/zara-block.png' alt='zara care icon' />
                </Link>
                <Link to='/'>
                    <img src='/assets/img/icons/dg-block.png' alt='d&g icon' />
                </Link>
                <Link to='/'>
                    <img src='/assets/img/icons/hm-block.png' alt='h&m watches icon' />
                </Link>
                <Link to='/'>
                    <img src='/assets/img/icons/chanel-block.png' alt='chanel icon' />
                </Link>
                <Link to='/'>
                    <img src='/assets/img/icons/prada-block.png' alt='prada icon' />
                </Link>
                <Link to='/'>
                    <img src='/assets/img/icons/biba-block.png' alt='biba icon' />
                </Link>
            </BrandsGrid>
        </BrandsContainer>
    );  
};