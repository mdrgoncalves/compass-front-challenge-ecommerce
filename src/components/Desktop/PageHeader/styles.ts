import styled from 'styled-components';

interface Props {
    titleMargin?: string;
}

export const PathWrapper = styled.div`

    margin: 24px 0 28px 0;
`;

export const TitleWrapper = styled.div`

    margin-bottom: ${(props: Props) => props.titleMargin ? props.titleMargin : '2rem'};
`;