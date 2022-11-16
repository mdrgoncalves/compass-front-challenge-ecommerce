import { Button } from './styles';

interface IconButtonProps {
    iconSrc: string;
    alt: string;
    onClick?: () => void;
}

export const IconButton = ({
    iconSrc,
    alt,
    onClick
}: IconButtonProps) => {
    
    return (
        <Button onClick={onClick}>
            <img src={iconSrc} alt={alt} />
        </Button>
    )
}
