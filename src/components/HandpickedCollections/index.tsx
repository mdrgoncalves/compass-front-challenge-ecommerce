import { Link } from "react-router-dom";
import { Heading } from "../Heading";
import { CollectionContainer, HandpickedContainer } from "./styles";

export const HandpickedCollections: React.FC = () => {

    return (
        <CollectionContainer>
            <Heading invertColor>
                Handpicked Collections
            </Heading>
            <HandpickedContainer>
                <Link to='/category/skincare'>
                    <img src='/assets/img/icons/personal-care-block.png' alt='personal care icon' />
                </Link>
                <Link to='/category/handbags'>
                    <img src='/assets/img/icons/handbags-block.png' alt='handbags icon' />
                </Link>
                <Link to='/category/watches'>
                    <img src='/assets/img/icons/wrist-watches-block.png' alt='wrist watches icon' />
                </Link>
                <Link to='/category/jewellery'>
                    <img src='/assets/img/icons/sunglasses-block.png' alt='sunglasses icon' />
                </Link>
            </HandpickedContainer>
        </CollectionContainer>
    );  
};
