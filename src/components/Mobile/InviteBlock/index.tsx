import { Link } from "react-router-dom";
import { InviteContainer, InviteTextContainer, OrangeSquare } from "./styles";

export const InviteBlock: React.FC = () => {

    return (
        <InviteContainer>
            <InviteTextContainer>
                <h2>Invite Friends & Earn</h2>
                <p>Get up 100 reward points for every friend you invite</p>
                <Link to='/404'>
                    Invite Now
                    <img src='/assets/img/chevron-right-icon-small.svg' alt='invite now' />
                </Link>
            </InviteTextContainer>
            <OrangeSquare></OrangeSquare>
        </InviteContainer>
    );  
};