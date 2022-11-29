import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckForm, InputsWrapper, InputsWrapperRight, NumberLabel } from './styles';

export const CheckoutForm: React.FC = () => {

    const { register, handleSubmit } = useForm();

    const [street, setStreet] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const searchAddress = async (cep: string) => {

        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                
                setStreet(response.data.logradouro);
                setState(response.data.uf);
                setCity(response.data.localidade);
            }
        );
    }

    const pinCodeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value;
        const maskedValue = value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d{3})/, '$1-$2');
        event.target.value = maskedValue;

        if (event.target.value.length > 8) {
            const value = event.target.value.replace('-', '');
            searchAddress(value);     
        }
    }

    return (
        
        <CheckForm 
            id='checkout' 
            onSubmit={handleSubmit((data) => { console.log(data) } )}
        >
            <InputsWrapper>
                <label htmlFor='fullName'>
                    <span>Full Name</span>
                    <input
                        {...register('fullName', { required: true })}
                        placeholder='Enter Name'
                        id='fullName'
                        type='text'
                    />
                </label>
                <label>
                    <span>Street Address</span>
                    <input 
                        {...register('streetAddress', { required: true })} 
                        placeholder='Enter Address' 
                        id='streetAddress'
                        value={street}
                    />
                </label>
                <label>
                    <span>City</span>
                    <input 
                        {...register('cityAddress', { required: true })} 
                        placeholder='Enter City' 
                        id='cityAddress'
                        value={city}
                        type='text'
                    />
                </label>
            </InputsWrapper>
            <InputsWrapperRight>
                <NumberLabel htmlFor='mobileNumber'>
                    <span>Mobile Number</span>
                    <div className='inputs-wrapper'>
                        <input 
                            className='mobile-country' 
                            placeholder='+11'
                            maxLength={4}
                            type='text'
                            onChange={(event) => {
                                const value = event.target.value;
                                const maskedValue = value
                                    .replace(/\D/g, '')
                                    .replace(/(\d{1})/, '+$1');
                                event.target.value = maskedValue;
                            }}
                        />
                        <input
                            className='mobile-number'
                            {...register('mobileNumber', { required: true })}
                            placeholder='Enter Number'
                            id='mobileNumber'
                            minLength={11}
                            maxLength={11}
                            onChange={(event) => {
                                const value = event.target.value;
                                const maskedValue = value
                                    .replace(/\D/g, '')
                                    .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                                event.target.value = maskedValue;
                            }}
                        />
                    </div>
                </NumberLabel>
                <label>
                    <span>State</span>
                    <input 
                        {...register('stateAddress', { required: true })} 
                        placeholder='Enter State'
                        id='stateAddress'
                        value={state}
                        type='text' 
                    />
                </label>
                <label htmlFor='pinCode'>
                    <span>Pin Code</span>
                    <input 
                        {...register('pinCode', { required: true })} 
                        placeholder='Enter Pin Code' 
                        id='pinCode'
                        minLength={8}
                        maxLength={8}
                        onChange={(event) => pinCodeHandler(event)}
                    />
                </label>
            </InputsWrapperRight>
        </CheckForm>
    );  
};