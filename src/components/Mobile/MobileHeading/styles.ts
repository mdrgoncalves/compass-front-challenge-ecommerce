import styled from 'styled-components';

interface Props {
    size?: string;
    padding?: boolean;
}

export const Header = styled.header`

    display: flex;
    align-items: center;
    gap: 1.25rem;
`;

export const Heading = styled.h1`

    font-size: ${(props: Props) => props.size === 'small'
        ? '1.25rem'
        : '3.25rem'
    };
    font-weight: ${(props: Props) => props.size === 'small'
        ? '700'
        : '600'
    };
    padding: ${(props: Props) => props.padding === true
        ? '1rem 0'
        : '0'
    };
    color: var(--color-primary);
`