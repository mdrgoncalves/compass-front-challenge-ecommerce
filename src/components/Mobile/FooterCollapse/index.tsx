import { useState } from "react";
import { useWidth } from "../../../utils/useWidth";
import { Footer } from "../../Footer";
import { ButtonCollapse } from "./styles";

export const FooterCollapse: React.FC = () => {

    const [collapse, setCollapse] = useState(false);

    return (
        <>
        {useWidth({
            renderMobile: () => (
                <div>
                    <ButtonCollapse onClick={() => setCollapse(!collapse)}>
                        More about CORA’L
                        {collapse
                            ? <img src='assets/img/icons/chevron-up-icon.svg' alt='collapse up' />
                            : <img src='assets/img/icons/chevron-bottom-icon.svg' alt='collapse down' />
                        }
                    </ButtonCollapse>
                    {collapse && <Footer />}
                </div>
            ),
            renderDesktop: () => (
                null
            )
        })}
        </>
    );  
};