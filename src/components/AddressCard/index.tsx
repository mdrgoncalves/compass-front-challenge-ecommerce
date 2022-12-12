import { ColumnFlex } from "./styles";

interface AddressCardProps {
    fullName: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
    mobileNumber: string;
    withTitle?: boolean;
}

export const AddressCard: React.FC<AddressCardProps> = ({
    fullName,
    street,
    city,
    state,
    pincode,
    mobileNumber,
    withTitle = true,
}) => {

    return (
        
        <ColumnFlex>
            {withTitle && <h3>Address Details</h3>}
            <p>{fullName}</p>
            <p>{street}</p>
            <p>{`${city}, ${state} ${pincode}`}</p>
            <p>{mobileNumber}</p>
        </ColumnFlex>
    );  
};