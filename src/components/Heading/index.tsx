import { HeadingTag } from "./styles";

interface HeadingProps {
    invertColor?: boolean;
    children: string;
}

export const Heading: React.FC<HeadingProps> = ({ 
    invertColor = false, 
    children 
}) => {

    return (
        <HeadingTag color={invertColor.toString()}>
            {children}
        </HeadingTag>
    );  
};