import { useForm } from 'react-hook-form';
import { UserState } from '../../context/UserContex';
import { Button } from '../Button';
import { IconChange } from './IconChange';
import { InputProfileForm } from './InputProfileForm';
import { NewPassord } from './NewPassword';
import { ButtonWrapper, FlexColumn, FlexWrapper, FormWrapper } from './styles';

export const ProfileForm: React.FC = () => {

    const { 
        register, 
        handleSubmit,
        reset, 
        resetField,
        formState: { errors }
    } = useForm();

    const { updateUser } = UserState();

    const onSubmit = (data: any, event: any) => {
        event.preventDefault;
        reset();

        if (!(data.currentPassword === 'admin')) {
            alert('Current password is incorrect');
            resetField('currentPassword');
            resetField('newPassword');
            resetField('confirmPassword');
            return;
        }

        if (!(data.newPassword === data.confirmPassword)) {
            alert('New password and confirm password are different');
            resetField('currentPassword');
            resetField('newPassword');
            resetField('confirmPassword');
            return;
        }

        const ddd = data.ddd.replace('+', '');
        const phone = data.mobileNumber.replace(/-/g, '');
        const mobilePhone = Number(ddd + phone);

        const form = {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "email": data.email,
            "mobileNumber": mobilePhone,
            "dateBirth": data.birth,
            "password": data.newPassword
        }

        updateUser(form);
    }

    return (

        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <FlexColumn gap='0.25rem'>
                <h2>Personal Information</h2>
                <IconChange />
                <FlexWrapper gap='2rem'>
                    <InputProfileForm
                        type='text'
                        name='firstName'
                        label='First Name'
                        placeholder='John'
                        errors={errors}
                        register={register}
                        validationSchema={{
                            required: 'First name is required',
                        }}
                        maxWidth={287}
                    />
                    <InputProfileForm
                        type='text'
                        name='lastName'
                        label='Last Name'
                        placeholder='Doe'
                        errors={errors}
                        register={register}
                        validationSchema={{
                            required: 'Last name is required',
                        }}
                        maxWidth={287}
                    />
                </FlexWrapper>
                <InputProfileForm
                    type='email'
                    name='email'
                    label='Email'
                    placeholder='Johndoe@johndoe.com'
                    errors={errors}
                    register={register}
                    validationSchema={{
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                        }
                    }}
                    maxWidth={604}
                />
                <FlexColumn gap='0.5rem'>
                    <label>Mobile Number</label>
                    <FlexWrapper gap='0.5rem'>
                        <InputProfileForm
                            type='text'
                            name='ddd'
                            placeholder='+11'
                            minLength={2}
                            maxLength={4}
                            errors={errors}
                            register={register}
                            validationSchema={{
                                required: 'DDD is required',
                                minLength: {
                                    value: 2,
                                    message: 'DDD must have 2 digits'
                                },
                                maxLength: {
                                    value: 4,
                                    message: 'DDD must have 2 digits'
                                }
                            }}
                            maxWidth={80}
                            onlyNumber={true}
                            regexMask={/(\d{1})/}
                            regexGroup='+$1'
                        />
                        <InputProfileForm
                            type='text'
                            name='mobileNumber'
                            placeholder='202-555-0114'
                            minLength={10}
                            maxLength={10}
                            errors={errors}
                            register={register}
                            validationSchema={{
                                required: 'Mobile number is required',
                                minLength: {
                                    value: 12,
                                    message: 'Mobile number must have 9 digits'
                                },
                                maxLength: {
                                    value: 12,
                                    message: 'Mobile number must have 9 digits'
                                }
                            }}
                            maxWidth={304}
                            onlyNumber={true}
                            regexMask={/(\d{3})(\d{3})(\d{4})/}
                            regexGroup='$1-$2-$3'
                        />
                    </FlexWrapper>
                </FlexColumn>
                <InputProfileForm
                    type='date'
                    name='birth'
                    label='Date of Birth'
                    placeholder='DD/MM/YYYY'
                    errors={errors}
                    register={register}
                    validationSchema={{
                        required: 'Birth is required',
                    }}
                    maxWidth={304}
                />
            </FlexColumn>
            <FlexColumn gap='1rem'>
                <h2>Change Password</h2>
                <InputProfileForm
                    type='password'
                    name='currentPassword'
                    label='Current Password'
                    placeholder='********'
                    errors={errors}
                    register={register}
                    validationSchema={{
                        required: 'Current password is required',
                    }}
                    maxWidth={287}
                />
                <NewPassord
                    errors={errors}
                    register={register}
                />
                <InputProfileForm
                    type='password'
                    name='confirmPassword'
                    label='Confirm Password'
                    placeholder='********'
                    errors={errors}
                    register={register}
                    validationSchema={{
                        required: 'Confirm password is required',
                    }}
                    maxWidth={287}
                />
            </FlexColumn>
            <ButtonWrapper>
                <Button
                    type='submit'
                    color='primary'
                >
                    Save Changes
                </Button>
            </ButtonWrapper>
        </FormWrapper>
    );  
};
