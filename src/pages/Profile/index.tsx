import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { PageHeader } from "../../components/Desktop/PageHeader";
import { ProfileTabs } from "../../components/Desktop/ProfileTabs";
import { MobileHeading } from "../../components/Mobile/MobileHeading";
import { MenuList } from "../../components/Mobile/MobileMenu/MenuList";
import { MobileNav } from "../../components/Mobile/MobileNav";
import { ProfileCard } from "../../components/Mobile/ProfileCard";
import { useWidth } from "../../utils/useWidth";
import { ButtonWrapper, FlexWrapper, ProfileContainer } from "./styles";

export const Profile: React.FC = () => {

    const nav = {
        'personal Information': 'profile/information',
        'refer and Earn': '/profile/refer',
        'my Orders': '/profile/orders',
        'my Wishlist': '/profile/wishlist',
        'my Reviews': '/profile/reviews',
        'my Address Book': '/profile/adresses',
        'my Saved Cards': '/profile/cards'
    }

    const navigate = useNavigate();

    return (
        
        <main>
        {useWidth({
            renderMobile: () => (
                <ProfileContainer>
                    <MobileHeading
                        title='Profile'
                        size='small'
                        withPadding={true}
                    />
                    <ProfileCard />
                    <div className='menu-list'>
                        <MenuList
                            labelList={nav}
                        />
                    </div>
                    <Button
                        color='secondary'
                        iconType='logout'
                        onClick={() => navigate('/')}
                    >
                        Logout
                    </Button>
                    <MobileNav />
                </ProfileContainer>
            ),
            renderDesktop: () => (
                <ProfileContainer>
                    <PageHeader
                        title='Personal Information'
                        paths={['User Profile']}
                    />
                    <ButtonWrapper>
                        <Button
                            color='secondary'
                            iconType='logout'
                            onClick={() => navigate('/')}
                        >
                            Logout
                        </Button>
                    </ButtonWrapper>
                    <FlexWrapper>
                        <ProfileTabs />
                        <Outlet />
                    </FlexWrapper>
                </ProfileContainer>
            ),
        })}
        </main>
    );  
};
