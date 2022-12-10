import { InputWrapper, Error } from "./styles";

interface InputProps {
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    errors: any;
    register: any;
    validationSchema: any;
    maxWidth?: number;
    onlyNumber?: boolean;
    regexMask?: RegExp;
    regexGroup?: string;
}

export const InputProfileForm: React.FC<InputProps> = ({
    type,
    name,
    label,
    placeholder,
    errors,
    minLength,
    maxLength,
    register,
    validationSchema,
    maxWidth = 100,
    onlyNumber = false,
    regexMask,
    regexGroup
}) => {

    return (
        
        <InputWrapper
            maxWidth={maxWidth}
        >
            {label ? 
                <label htmlFor={name}>
                    {label}
                </label>
            : null
            }
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                {...register(
                    name, 
                    validationSchema
                )}
                minLength={minLength}
                maxLength={maxLength}
                onChange={(e) => {
                    const { value } = e.target;
                    if (onlyNumber) {
                        e.target.value = value
                            .replace(/\D/g, '')
                            .replace(regexMask!, regexGroup!);
                    } else {
                        e.target.value = value.replace(regexMask!, regexGroup!)
                    }
                }}
            />
            {errors && errors[name]?.type === 'required' && (
                <Error>*{errors[name]?.message}</Error>    
            )}
            {errors && errors[name]?.type === 'minLength' && (
                <Error>*{errors[name]?.message}</Error>
            )}
        </InputWrapper>
    );  
};
