import { useState } from "react";
import { InputProfileForm } from "../InputProfileForm";
import { InputWrapper } from "./styles";

interface NewPasswordProps {
    errors: any;
    register: any;
}

export const NewPassord: React.FC<NewPasswordProps> = ({
    errors,
    register
}) => {

    const [changeType, setChangeType] = useState(false);

    return (
        
        <InputWrapper>
            <label htmlFor='newPassword'>
                New Password
            </label>
            <div>
                <InputProfileForm
                    type={changeType ? 'text' : 'password'}
                    name='newPassword'
                    placeholder='********'
                    errors={errors}
                    register={register}
                    validationSchema={{
                        required: 'New password is required',
                    }}
                    maxWidth={231}
                />
                <button
                    type='button'
                    onClick={() => setChangeType(!changeType)}
                >
                    <img src='/assets/img/icons/trailing-icon.svg' alt='trailing icon' />
                </button>
            </div>
        </InputWrapper>
    );  
};
