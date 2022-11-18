import { NavLink } from "react-router-dom"

import { IconButton } from "../../IconButton"
import { SearchInput } from "./SearchInput"
import { ButtonsContainer, HeaderContainer, ListContainer, MenuContainer } from "./styles"

export const HeaderDesktop: React.FC = () => {
    return (
        <HeaderContainer>
            <MenuContainer>
                <NavLink to="/">
                    <img src="/assets/img/logo.svg" alt="cora'l logo" />
                </NavLink>
                <nav>
                    <ListContainer>
                        <li>
                            <NavLink to='/category/handbags'>Handbags</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/watches'>Watches</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/skincare'>Skincare</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/jewellery'>Jewellery</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/apparels'>Apparels</NavLink>
                        </li>
                    </ListContainer>
                </nav>
            </MenuContainer>
            <ButtonsContainer>
                <SearchInput />
                <IconButton iconSrc='/assets/img/wishlist-icon.svg' alt='favorite icon'/>
                <IconButton iconSrc='/assets/img/profile-icon.svg' alt='profile icon'/>
                <IconButton iconSrc='/assets/img/bag-icon.svg' alt='bag icon'/>
            </ButtonsContainer>
        </HeaderContainer>
    )
}