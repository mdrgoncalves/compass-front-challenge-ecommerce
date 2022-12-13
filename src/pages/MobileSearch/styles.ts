import { font } from './../../styles/mixins';
import styled from "styled-components";

interface Props {
    column?: boolean;
    gap?: string;
    padding?: string;
    wrap?: boolean;
    marginTop?: string;
}

export const FlexWrapper = styled.div`

    display: flex;
    flex-direction: ${(props: Props) => props.column ? 'column' : 'row'};
    gap: ${(props: Props) => props.gap ? props.gap : '0'};
    padding: ${(props: Props) => props.padding ? props.padding : '0'};
    flex-wrap: ${(props: Props) => props.wrap ? 'wrap' : 'nowrap'};
    margin-top: ${(props: Props) => props.marginTop ? props.marginTop : '0'};
`;

export const MobileSearchContainer = styled(FlexWrapper)`

    padding: 0 1rem;
`;

export const RecentSearchs = styled(FlexWrapper)`

    h2, 
    span {
        ${font.titleRegular};
    }

    span {
        background-color: var(--color-grey);
        padding: 0.44rem 0.75rem;
        border-radius: 0.5rem;
    }
`;

export const ArrivalWrapper = styled.div`

    margin-left: -1rem;
    margin-top: 1.5rem;
`;