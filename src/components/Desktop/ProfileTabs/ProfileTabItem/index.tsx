import { Tab } from "./styles";

interface ProfileTabItemProps {
    label: string;
    tabReference: string;
}

export const ProfileTabItem: React.FC<ProfileTabItemProps> = ({
    label,
    tabReference
}) => {

    return (
        
        <Tab
            to={tabReference}
            className={({ isActive }) =>
                isActive ? 'active' : ''
            }
        >
            <span>{label}</span>
            <img src='/assets/img/chevron-right-icon.svg' alt='right chevron' />
        </Tab>
    );  
};
