import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { BagState } from "../../../context/BagContext"

import { IconButton } from "../../IconButton"
import { BasketModal } from "../BasketModal"
import { SearchInput } from "./SearchInput"
import { ButtonsContainer, HeaderContainer, ListContainer, MenuContainer } from "./styles"

export const HeaderDesktop: React.FC = () => {

    const [isBasketOpen, setIsBasketOpen] = useState(false)

    const { state: { bag } } = BagState();

    useEffect(() => {
        if (isBasketOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isBasketOpen])

    return (

        <HeaderContainer>
            <MenuContainer>
                <NavLink to="/">
                    <img src="/assets/img/logo.svg" alt="cora'l logo" />
                </NavLink>
                <nav>
                    <ListContainer>
                        <li>
                            <NavLink to='/category/handbags'>
                                Handbags
                            </NavLink>
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
                <IconButton 
                    iconSrc={bag.length > 0 ? '/assets/img/icons/bag-with-notification-icon.svg' : '/assets/img/bag-icon.svg' }
                    alt='bag icon'
                    onClick={() => setIsBasketOpen(true)}
                />
            </ButtonsContainer>
            {isBasketOpen && <BasketModal onClose={() => setIsBasketOpen(false)}/>}
        </HeaderContainer>
    )
}
