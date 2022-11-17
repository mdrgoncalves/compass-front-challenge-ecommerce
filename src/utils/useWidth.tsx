import { ReactNode } from 'react';
import { useWidthDimension } from '../context/viewportContext';

interface UseWidthProps {
    breakpoint?: number;
    renderMobile: () => ReactNode;
    renderDesktop: () => ReactNode;
}

export const useWidth = ({
    breakpoint = 985,
    renderMobile,
    renderDesktop,
}: UseWidthProps) => {

    const { width } = useWidthDimension();

    return width < breakpoint ? renderMobile() : renderDesktop();
}