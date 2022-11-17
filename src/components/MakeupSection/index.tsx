import { Link } from 'react-router-dom';
import { Heading } from '../Heading';
import { MakeupContainer, MakeupGrid } from './styles';


export const MakeupSection: React.FC = () => {

    return (
        <MakeupContainer>
            <Heading>Makeup & Skincare</Heading>
            <MakeupGrid>
                <Link to='/' className='big-banner'>
                    <picture>
                        <source srcSet='/assets/img/icons/lifestyle-hero-2x.png' media='(min-width: 768px)'/>
                        <img src='/assets/img/icons/lifestyle-hero-1x.png' alt='lifestyle banner' />
                    </picture>
                </Link>
                <Link to='/' className='small-banner-one'>
                    <picture>
                        <source srcSet='/assets/img/icons/skincare-essentials-hero-2x.png' media='(min-width: 768px)'/>
                        <img src='/assets/img/icons/skincare-essentials-hero-1x.png' alt='skincare banner' />
                    </picture>
                </Link>
                <Link to='/' className='small-banner-two'>
                    <picture>
                        <source srcSet='/assets/img/icons/facepack-peels-hero-2x.png' media='(min-width: 768px)'/>
                        <img src='/assets/img/icons/facepack-peels-hero-1x.png' alt='facepack and peels banner' />
                    </picture>
                </Link>
            </MakeupGrid>
        </MakeupContainer>
    );  
};

//<img src='/assets/img/icons/lifestyle-hero.png' alt='zara care icon' />