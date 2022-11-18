import { useWidth } from "../../../utils/useWidth";
import { Footer } from "../../Footer";

export const FooterDesktop: React.FC = () => {

    return (
        <>
        {useWidth({
            renderMobile: () => (
                null
            ),
            renderDesktop: () => (
                <Footer />
            )
        })}
        </>
    );  
};