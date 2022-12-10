import { ProfileTabItem } from "./ProfileTabItem";
import { ProfileContainer, TabsList } from "./styles";

export const ProfileTabs: React.FC = () => {

    return (
        
        <ProfileContainer>
            <nav>
                <TabsList>
                    <ProfileTabItem 
                        label='Personal Information'
                        tabReference='information'
                    />
                    <ProfileTabItem
                        label='Refer and Earn'
                        tabReference='refer'
                    />
                    <ProfileTabItem
                        label='My Orders'
                        tabReference='orders'
                    />
                    <ProfileTabItem
                        label='My Wishlist'
                        tabReference='wishlist'
                    />
                    <ProfileTabItem
                        label='My Reviews'
                        tabReference='reviews'
                    />
                    <ProfileTabItem
                        label='My Address Book'
                        tabReference='address'
                    />
                    <ProfileTabItem
                        label='My Saved Cards'
                        tabReference='cards'
                    />
                </TabsList>
            </nav>
        </ProfileContainer>
    );  
};
