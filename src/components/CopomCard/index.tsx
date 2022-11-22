import { 
    CodeContainer, 
    CopomContainer, 
    CopomDesc, 
    CopomTerms, 
    CopomText } 
from "./styles";

export const CopomCard: React.FC = () => {

    return (
        
        <CopomContainer>
            <CopomText>
                <CopomDesc>Get upto 30% Off on order value above $100</CopomDesc>
                <CopomTerms>Terms & Conditions</CopomTerms>
            </CopomText>
            <CodeContainer>
                <p className='label'>Use Code</p>
                <p className='code'>ORDER100</p>
            </CodeContainer>
        </CopomContainer>
    );  
};