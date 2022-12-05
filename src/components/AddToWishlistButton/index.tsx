import { useState } from "react";
import { UserState } from "../../context/UserContex";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { ButtonText } from "./styles";

interface AddToWishlistButtonProps {
    productId: string;
    buttonType: 'icon' | 'full' | 'text';
}

export const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({
    productId,
    buttonType
}) => {

    const { createOrUpdateWishlist, removeProductOfWishlist } = UserState();

    const [isFavorited, setIsFavorited] = useState(false);

    const handleAddToWishlist = () => {
        
        if (isFavorited) {
            removeProductOfWishlist(productId);
            setIsFavorited(false);
        } else {
            createOrUpdateWishlist(productId);
            setIsFavorited(true);
        }
    }

    switch (buttonType) {
        case 'icon':
            return (
                <IconButton
                    iconSrc={isFavorited 
                        ? '/assets/img/wishlist-icon-filled.svg' 
                        : '/assets/img/wishlist-icon.svg'
                    } 
                    alt='favorite product'
                    onClick={() => handleAddToWishlist()}
                />
            )
        case 'full':
            return (
                <Button
                    iconType={isFavorited ? undefined : 'wishlist'}
                    color={isFavorited ? 'remove' : 'secondary'}
                    onClick={() => handleAddToWishlist()}
                >
                    {isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </Button>
            )
        case 'text':
            return (
                <ButtonText
                    onClick={() => handleAddToWishlist()}
                >
                    {isFavorited ? 'Remove from Wishlist' : 'Move to Wishlist'}
                </ButtonText>
            )
        default:
            return null;
    }
};