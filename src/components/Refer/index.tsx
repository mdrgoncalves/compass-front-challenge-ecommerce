import { Button } from "../Button";
import { Code, ImageWrapper, ReferWrapper, TextWrapper } from "./styles";

export const Refer: React.FC = () => {

    return (
        
        <ReferWrapper>
            <ImageWrapper>
                <img src='/assets/img/order-confirmed.png' alt='order image' />
                <h2>Invite your friend and earn $20 on every invite</h2>
                <Code
                    onClick={() => navigator.clipboard.writeText('IVN6374730')}
                >
                    IVN6374730
                </Code>
                <p>Tap to copy the code.</p>
            </ImageWrapper>
            <TextWrapper>
                <h4>How does this works?</h4>
                <ul>
                    <li>Invite your friends to CORAL</li>
                    <li>Ask your friends to place their order with your code & get $20 discount</li>
                    <li>Once the order gets delivered you get the discount as well.</li>
                </ul>
            </TextWrapper>
            <Button
                color='primary'
            >
                Invite Now
            </Button>
        </ReferWrapper>
    );  
};