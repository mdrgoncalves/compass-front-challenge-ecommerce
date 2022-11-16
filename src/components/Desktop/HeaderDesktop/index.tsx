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
                            <NavLink to='product'>Handbags</NavLink>
                        </li>
                        <li>
                            <NavLink to='product'>Watches</NavLink>
                        </li>
                        <li>
                            <NavLink to='product'>Skincare</NavLink>
                        </li>
                        <li>
                            <NavLink to='product'>Jewellery</NavLink>
                        </li>
                        <li>
                            <NavLink to='product'>Apparels</NavLink>
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