import { useNavigate } from "react-router-dom";
import { BackButton } from "../BackButton";
import { Header, Heading } from "./styles";

interface MobileHeadingProps {
    title: string;
    withBack?: boolean;
    size?: 'big' | 'small';
    withPadding?: boolean;
    onClick?: () => void;
}

export const MobileHeading: React.FC<MobileHeadingProps> = ({
    title,
    withBack = false,
    size = 'big',
    withPadding = false,
    onClick
}) => {

    const navigate = useNavigate();

    return (
        
        <Header>
            {withBack 
                ? <BackButton 
                    onClick={
                        () => {
                            if (onClick) {
                                onClick();
                            } else {
                                navigate(-1);
                            }
                        }
                    }
                />
                : null
            }
            <Heading 
                size={size}
                padding={withPadding}
            >
                {title}
            </Heading>
        </Header>
    );  
};
