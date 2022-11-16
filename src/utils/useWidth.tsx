import { useWidthDimension } from '../context/viewportContext';

interface UseWidthProps {
    breakpoint?: number;
    renderMobile: () => JSX.Element;
    renderDesktop: () => JSX.Element;
}

export const useWidth = ({
    breakpoint = 985,
    renderMobile,
    renderDesktop,
}: UseWidthProps) => {

    const { width } = useWidthDimension();

    return width < breakpoint ? renderMobile() : renderDesktop();
}