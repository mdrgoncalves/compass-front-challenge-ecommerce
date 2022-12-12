import { useNavigate } from "react-router-dom";
import { Back } from "./styles";

interface BackButtonProps {
    onClick?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({
    onClick
}) => {

    const navigate = useNavigate();

    return (
        <Back 
            onClick={
                () => {
                    if (onClick) {
                        onClick();
                    } else {
                        navigate(-1);
                    }
                }
            }
        >
            <img src='/assets/img/icons/leading-icon.svg' alt='back icon' />
        </Back>
    );  
};