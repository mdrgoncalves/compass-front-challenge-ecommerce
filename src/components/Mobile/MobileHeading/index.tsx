import { Heading } from "./styles";

interface MobileHeadingProps {
    title: string;
}

export const MobileHeading: React.FC<MobileHeadingProps> = ({
    title
}) => {

    return (
        
        <Heading>
            {title}
        </Heading>
    );  
};
