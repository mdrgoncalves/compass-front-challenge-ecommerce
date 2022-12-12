import { UserState } from "../../../context/UserContex";
import { ProfileContent, ProfileIcon, ProfileText, ProfileWrapper } from "./styles";

export const ProfileCard: React.FC = () => {

    const { user } = UserState();

    return (
        
        <ProfileWrapper>
            <ProfileContent>
                {user.image  
                    ? <ProfileIcon src={user.image} alt='profile icon' /> 
                    : <ProfileIcon src='/assets/img/icons/profile-placeholder-icon.png' alt='profile icon' />
                }
                <ProfileText>
                    {user.firstName
                        ? <h2>{`${user.firstName} ${user.lastName}`}</h2>
                        : null
                    }
                    {user.email
                        ? <p>{user.email}</p>
                        : null
                    }
                    <p>+{user.mobileNumber}</p>
                </ProfileText>
            </ProfileContent>
            <img src='/assets/img/chevron-right-icon.svg' alt='' />
        </ProfileWrapper>
    );  
};
