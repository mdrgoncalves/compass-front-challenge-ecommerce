import { ModalContent, ModalWrapper } from "./styles";

interface MobileModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

export const MobileModal: React.FC<MobileModalProps> = ({
    children,
    onClose
}) => {

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        
        <ModalWrapper onClick={handleOutsideClick}>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalWrapper>
    );  
};