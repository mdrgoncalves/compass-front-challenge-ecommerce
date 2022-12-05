import { ButtonWrap, CrossImg } from "./styles";

interface ButtonProps {
    children: React.ReactNode;
    color: 'primary' | 'secondary' | 'remove';
    iconType?: 'bag' | 'wishlist' | 'cross';
    type?:  'button' | 'submit' | 'reset';
    form?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    color,
    iconType,
    type = 'button',
    form,
    onClick
}) => {

    return (
        <ButtonWrap 
            color={color}
            onClick={onClick}
            type={type}
            form={form}
        >
            {iconType === 'bag' && <img src='/assets/img/bag-icon-light.svg' alt='bag' />}
            {iconType === 'wishlist' && <img src='/assets/img/wishlist-icon.svg' alt='wishlist' />}
            {iconType === 'cross' && <CrossImg src='/assets/img/icons/cross-small-icon.svg' alt='cross' />}
            {children}
        </ButtonWrap>
    );  
};