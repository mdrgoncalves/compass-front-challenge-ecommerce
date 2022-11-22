import styled from 'styled-components';

export const ButtonWrap = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: min(100%, 400px);
    background-color: ${props => props.color === 'primary' ? 'var(--color-primary)' : 'var(--color-bright)'};
    font-size: 0.875rem;
    font-weight: 600;
    color: ${props => props.color === 'primary' ? 'var(--color-bright)' : 'var(--color-primary)'};
    border: 2px solid var(--color-primary);
    border-radius: 0.5rem;
    padding: 10px 0;
`;