import styled from 'styled-components';

import { Link } from "react-router-dom";
import { font } from './../../../../styles/mixins';

export const CategoryLink = styled(Link)`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin: 0 1rem 0 0;
    
    img {
        width: 16.67vw;
        height: 16.67vw;
    }

    h3 {
        ${font.link};
        color: var(--color-high-emphasis);
        
        &::first-letter {
            text-transform: uppercase;
        }
    }
`;