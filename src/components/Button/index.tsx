import { ButtonWrap, CrossImg } from "./styles";

interface ButtonProps {
    children: string;
    color: 'primary' | 'secondary' | 'remove';
    iconType?: 'bag' | 'wishlist' | 'cross';
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    color,
    iconType,
    onClick
}) => {

    return (
        <ButtonWrap 
            color={color}
            onClick={onClick}
        >
            {iconType === 'bag' && <img src='/assets/img/bag-icon-light.svg' alt='bag' />}
            {iconType === 'wishlist' && <img src='/assets/img/wishlist-icon.svg' alt='wishlist' />}
            {iconType === 'cross' && <CrossImg src='/assets/img/icons/cross-small-icon.svg' alt='cross' />}
            {children}
        </ButtonWrap>
    );  
};