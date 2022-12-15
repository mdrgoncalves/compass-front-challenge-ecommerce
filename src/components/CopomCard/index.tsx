import { 
    CodeContainer, 
    CopomContainer, 
    CopomDesc, 
    CopomTerms, 
    CopomText } 
from "./styles";

interface CouponCardProps {
    description: string;
    code: string;
}

export const CopomCard: React.FC<CouponCardProps> = ({
    description,
    code
}) => {

    return (
        
        <CopomContainer>
            <CopomText>
                <CopomDesc>{description}</CopomDesc>
                <CopomTerms>Terms & Conditions</CopomTerms>
            </CopomText>
            <CodeContainer>
                <p className='label'>Use Code</p>
                <p className='code'>{code}</p>
            </CodeContainer>
        </CopomContainer>
    );  
};