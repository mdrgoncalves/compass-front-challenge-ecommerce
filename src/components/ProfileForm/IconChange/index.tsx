import { useEffect, useState } from "react";
import { UserState } from "../../../context/UserContex";
import { Button } from "../../Button";
import { ButtonWrapper, FlexWrapper, ProfileIcon } from "./styles";

export const IconChange: React.FC = () => {

    const [image, setImage] = useState<any>('');
    const [imageChanged, setImageChanged] = useState(false);
    const { updateUser, getUser, user } = UserState();

    const convertToBase64 = (file: any) => {
        return new Promise((resolve, reject) => {

            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }

    const fileSelectedHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files![0];
        const base64 = await convertToBase64(file);
        setImage(base64);
    }

    const fileUploadHandler = () => {
        
        const data = {
            "image": image
        }

        updateUser(data);
        setImageChanged(!imageChanged);
    }

    const deleteHandler = () => {
        
        const data = {
            "image": ''
        }

        updateUser(data);
        setImageChanged(!imageChanged);
    }

    useEffect(() => {
        if (image) {
            fileUploadHandler();
        }
        getUser();
    }, [image]);

    useEffect(() => {
        getUser();
    }, [imageChanged]);
    
    return (
        
        <FlexWrapper>
            <ProfileIcon 
                src={
                    user.image
                    ? user.image
                    : '/assets/img/icons/profile-placeholder-icon.png'
                }
                alt='profile icon' 
            />
            <ButtonWrapper>
                <label htmlFor='image-input'>
                    Upload
                </label>
                <input 
                    type='file'
                    id='image-input'
                    accept='image/*'
                    onChange={fileSelectedHandler}
                />
                <Button
                    color='remove'
                    iconType='cross'
                    onClick={deleteHandler}
                >
                    Delete
                </Button>
            </ButtonWrapper>
        </FlexWrapper>
    );  
};

