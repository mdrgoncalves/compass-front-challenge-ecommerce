import { useEffect, useState } from 'react';
import { IconButton } from '../../IconButton';
import { MobileMenu } from '../MobileMenu';
import { HeaderContainer, MobileMenuContainer, MobileButtonsContainer } from './styles';

export const HeaderMobile: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (

        <HeaderContainer>
            <MobileMenuContainer>
                <IconButton 
                    iconSrc='/assets/img/menu-icon.svg' 
                    alt='burguer menu'
                    onClick={() => setIsMenuOpen(true)}
                />
                {isMenuOpen && 
                    <MobileMenu 
                        onClose={() => setIsMenuOpen(false)}
                    />
                }
                <h1>Home</h1>
            </MobileMenuContainer>
            <MobileButtonsContainer>
                <IconButton iconSrc='/assets/img/add-to-homescreen-icon.svg' alt='add to homescreen'/>
                <IconButton iconSrc='/assets/img/search-icon.svg' alt='search'/>
                <IconButton iconSrc='/assets/img/notification-icon.svg' alt='notification'/>
            </MobileButtonsContainer>
        </HeaderContainer>
    )
};