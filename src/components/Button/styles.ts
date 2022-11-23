import styled from 'styled-components';

export const ButtonWrap = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: min(100%, 400px);
    background-color: ${props => 
        props.color === 'primary' 
        ? 'var(--color-primary)'
        : props.color === 'secondary'     
        ? 'var(--color-bright)'
        : props.color === 'remove'  
        ? 'var(--color-error)'
        : 'var(--color-primary)'
    };
    font-size: 0.875rem;
    font-weight: 600;
    color: ${props => 
        props.color === 'primary' 
        ? 'var(--color-bright)' 
        : props.color === 'secondary' 
        ? 'var(--color-primary)'
        : props.color === 'remove' 
        ? 'var(--color-bright)' 
        : 'var(--color-primary)'
    };

    border: 2px solid ${props =>
        props.color === 'primary'
        ? 'var(--color-primary)'
        : props.color === 'secondary'
        ? 'var(--color-primary)'
        : props.color === 'remove'
        ? 'var(--color-error)'
        : 'var(--color-primary)'
    };

    border-radius: 0.5rem;
    padding: 10px 0;
`;

export const CrossImg = styled.img`

    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(560%) hue-rotate(305deg) brightness(114%) contrast(100%);
`;