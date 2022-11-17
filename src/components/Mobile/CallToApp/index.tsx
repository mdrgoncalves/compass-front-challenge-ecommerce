import { useWidth } from "../../../utils/useWidth";
import { CTALink } from "./styles";

export const CallToApp: React.FC = () => {

    return (
        <>
        {useWidth({
            renderMobile: () => (
                <CTALink to='/webapp'>
                    <img src='/assets/img/icons/PWA-CTA.png' alt='add web app' />
                </CTALink>
            ),
            renderDesktop: () => (
                null
            )
        })}
        </>
    );  
};