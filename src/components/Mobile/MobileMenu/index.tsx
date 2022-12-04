import { Spacer } from "../Spacer";
import { MenuList } from "./MenuList";
import { 
    MobileMenuOuter,
    MobileMenuWrapper, 
    ProfileIcon, 
    ProfileLink, 
    RightChevron 
} from "./styles";

interface MobileMenuProps {
    onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
    onClose
}) => {

    const categories = {
        handbags: '/category/handbags',
        watches: '/category/watches',
        skincare: '/category/skincare',
        jewellery: '/category/jewellery',
        apparels: '/category/apparels',
        about: '/about'
    }

    const contacts = {
        'help & Support': '/support',
        'feedback & Suggestions': '/feedback',
        'visit Websites': '/websites'
    }

    return (

        <MobileMenuOuter onClick={onClose}>
            <MobileMenuWrapper>
                <ProfileLink to='/profile'>
                    <div className='profile-content'>
                        <div>
                            <ProfileIcon src='/assets/img/icons/profile-icon.svg' alt='profile icon' />
                            <h2>Hello, Tina</h2>
                        </div>
                        <RightChevron src='/assets/img/chevron-right-icon.svg' alt='go to page' />
                    </div>
                </ProfileLink>
                <div className='spacer'>
                    <Spacer />
                </div>
                <MenuList
                    title='Top Categories'
                    labelList={categories}
                />
                <div className='spacer'>
                    <Spacer />
                </div>
                <MenuList
                    title='Contact Us'
                    labelList={contacts}
                />
            </MobileMenuWrapper>
        </MobileMenuOuter>
    );  
};