import { createContext, useContext, useEffect, useState } from "react";

const viewportContext = createContext(null as any);

const ViewportProvider = ({ children }: any) => {

    const [width, setWidth] = useState({
        width: window.innerWidth,
    });

    useEffect(() => {
        const handleResize = () => {
            setWidth({
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <viewportContext.Provider value={ width }>
            {children}
        </viewportContext.Provider>
    );
}

export default ViewportProvider;
export const useWidthDimension = () => useContext(viewportContext);