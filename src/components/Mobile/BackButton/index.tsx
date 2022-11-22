import { useNavigate } from "react-router-dom";
import { Back } from "./styles";

export const BackButton: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Back onClick={() => navigate(-1)}>
            <img src='/assets/img/icons/leading-icon.svg' alt='back icon' />
        </Back>
    );  
};