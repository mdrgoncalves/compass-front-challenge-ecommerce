import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
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
        'personal Information': '/profile/information',
        'refer and Earn': '/profile/refer',
        'my Orders': '/profile/orders',
        'my Wishlist': '/profile/wishlist',
        'my Reviews': '/profile/reviews',
        'my Address Book': '/profile/address',
        'my Saved Cards': '/profile/cards'
    }

    const navigate = useNavigate();
    const location = useLocation();

    const [locationControl, setLocationControl] = useState(true);
    const [headingTitle, setHeadingTitle] = useState('');
    const [insideOrder, setInsideOrder] = useState(false);

    const { orderId } = useParams();

    useEffect(() => {
        if (location.pathname !== '/profile') {
            setLocationControl(false);
        }

        const pathname = '/' + location.pathname.split('/').slice(1).join('/');
        const path = getKeyByValue(nav, pathname);
        if (path) {
            setHeadingTitle(path.charAt(0).toUpperCase() + path.slice(1));
        }

        if (pathname.includes('/profile/orders/6')) {
            setHeadingTitle(`Order#${orderId?.slice(0, 9)}`);
            setInsideOrder(true);
        } else {
            setInsideOrder(false);
        }

    }, [location.pathname]);

    const getKeyByValue = (object: any, value: any) => {
        return Object.keys(object).find(key => object[key] === value);
    }

    return (
        
        <>
        {useWidth({
            renderMobile: () => (
                <>
                {locationControl ? (
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
                ) : (
                    <ProfileContainer>
                        <MobileHeading
                            title={headingTitle}
                            withBack
                            size='small'
                            withPadding={true}
                            onClick={() => {
                                navigate('/profile');
                                setLocationControl(true);
                            }}
                        />
                        <Outlet />
                    </ProfileContainer>
                )}
                </>
            ),
            renderDesktop: () => (
                <ProfileContainer>
                    <FlexWrapper justify>
                        {insideOrder ? (
                        <PageHeader
                        title={headingTitle}
                        paths={[
                            'profile',
                            'My Orders',
                            headingTitle
                        ]}
                        titleMargin='0'
                        />
                        ) : (
                        <PageHeader
                            title={headingTitle}
                            paths={[
                                'profile',
                                headingTitle
                            ]}
                            titleMargin='0'
                        />
                        )}
                        <ButtonWrapper>
                            <Button
                                color='secondary'
                                iconType='logout'
                                onClick={() => navigate('/')}
                            >
                                Logout
                            </Button>
                        </ButtonWrapper>
                    </FlexWrapper>
                    <FlexWrapper>
                        <ProfileTabs />
                        <Outlet />
                    </FlexWrapper>
                </ProfileContainer>
            ),
        })}
        </>
    );  
};
