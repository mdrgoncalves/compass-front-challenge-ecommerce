import { UserState } from "../../../context/UserContex";
import { ProfileContent, ProfileIcon, ProfileText, ProfileWrapper } from "./styles";

export const ProfileCard: React.FC = () => {

    const { newUser } = UserState();

    return (
        
        <ProfileWrapper>
            <ProfileContent>
                {newUser.image  
                    ? <ProfileIcon src={newUser.image} alt='profile icon' /> 
                    : <ProfileIcon src='/assets/img/icons/profile-placeholder-icon.png' alt='profile icon' />
                }
                <ProfileText>
                    {newUser.firstName
                        ? <h2>{`${newUser.firstName} ${newUser.lastName}`}</h2>
                        : null
                    }
                    {newUser.email
                        ? <p>{newUser.email}</p>
                        : null
                    }
                    <p>+{newUser.mobileNumber}</p>
                </ProfileText>
            </ProfileContent>
            <img src='/assets/img/chevron-right-icon.svg' alt='' />
        </ProfileWrapper>
    );  
};
