import { HeadingTag } from "./styles";

interface HeadingProps {
    screenType: 'mobile' | 'desktop';
    children: string;
}

export const Heading: React.FC<HeadingProps> = ({ screenType, children }) => {

    return (
        <HeadingTag color={screenType} className={screenType}>
            {children}
        </HeadingTag>
    );  
};