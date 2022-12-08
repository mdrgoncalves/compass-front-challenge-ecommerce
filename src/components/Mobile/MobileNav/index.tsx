import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MobileNavContainer, NavItem } from "./styles";

export const MobileNav: React.FC = () => {

    const [activeButton, setActiveButton] = useState('home');

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/home') {
            setActiveButton('home');
        } else if (location.pathname === '/category/handbags') {
            setActiveButton('categories');
        } else if (location.pathname === '/profile') {
            setActiveButton('profile');
        }
    }, [location.pathname]);

    return (
        
        <nav>
            <MobileNavContainer>
                <li>
                    <NavItem 
                        to='/home'
                        className={({ isActive }) => 
                            isActive ? 'active' : ''
                        }
                    >
                        <img src='/assets/img/icons/home-inative-icon.svg' alt='home icon' />
                        {activeButton === 'home' && <p>Home</p>}
                    </NavItem>
                </li>
                <li>
                    <NavItem
                        to='/category/handbags'
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        <img src='/assets/img/icons/categories-inative-icon.svg' alt='categories icon' />
                        {activeButton === 'categories' && <p>Categories</p>}
                    </NavItem>
                </li>
                <li>
                    <NavItem
                        to='/profile'
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        <img src='/assets/img/icons/profile-inative-icon.svg' alt='profile icon' />
                        {activeButton === 'profile' && <p>Profile</p>}
                    </NavItem>
                </li>
                <li>
                    <NavItem
                        to='/bag'
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        <img src='/assets/img/icons/bag-inative-icon.svg' alt='bag icon' />
                        {activeButton === 'bag' && <p>Bag</p>}
                    </NavItem>
                </li>
            </MobileNavContainer>
        </nav>
    );  
};