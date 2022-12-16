import { useEffect } from "react";
import { UserState } from "../../context/UserContex";
import { AddressCard } from "../AddressCard";
import { Button } from "../Button";
import { AddressesEmpty, AddressWrapper } from "./styles";

export const Addresses: React.FC = () => {

    const { getAddressByUser, address } = UserState();

    useEffect(() => {
        getAddressByUser();
    }, [address]);

    return (

        <>
            {(address?.length !== 0) ? (
            <AddressWrapper>
                {Object.keys(address).map((key) => (
                        <div key={address[key]._id}>
                            <h2>Address {Number(key) + 1}</h2>
                            <AddressCard
                                key={address[key]._id}
                                fullName={address[key].fullName}
                                street={address[key].street}
                                city={address[key].city}
                                state={address[key].state}
                                pincode={address[key].pincode}
                                mobileNumber={address[key].mobileNumber}
                                withTitle={false} 
                                withBorder={true}  
                            />
                        </div>
                    ))}
            </AddressWrapper>
            ) : (
            <AddressesEmpty>
                <img src='/assets/img/addresses-empty.png' alt='addresses empty' />
                <h2>No Address</h2>
                <h3>It seems you have not updated your address yet.</h3>
                <Button
                    color='primary'
                >
                    Add Address
                </Button>
            </AddressesEmpty>
            )}
        </>
    );  
};