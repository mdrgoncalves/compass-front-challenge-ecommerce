import { ReactNode } from 'react';
import { CarouselContainer, CarouselContent } from './styles';

interface CarouselProps {
    children: ReactNode;
}

export const Carousel = (
    { children }: CarouselProps
) => {

    return (
        <CarouselContainer>
            <CarouselContent>
                {children}
            </CarouselContent>
        </CarouselContainer>
    )
}