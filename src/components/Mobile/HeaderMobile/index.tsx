import { IconButton } from '../../IconButton';
import { HeaderContainer, MobileMenuContainer, MobileButtonsContainer } from './styles';

export const HeaderMobile: React.FC = () => {
    return (
        <HeaderContainer>
            <MobileMenuContainer>
                <IconButton iconSrc='/assets/img/menu-icon.svg' alt='burguer menu'/>
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