import { BackButton } from "../BackButton";
import { Header, Heading } from "./styles";

interface MobileHeadingProps {
    title: string;
    withBack?: boolean;
    size?: 'big' | 'small';
    withPadding?: boolean;
}

export const MobileHeading: React.FC<MobileHeadingProps> = ({
    title,
    withBack = false,
    size = 'big',
    withPadding = false
}) => {

    return (
        
        <Header>
            {withBack 
                ? <BackButton />
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
