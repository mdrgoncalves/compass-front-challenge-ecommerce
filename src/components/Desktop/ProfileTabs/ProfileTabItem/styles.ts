import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { font } from '../../../../styles/mixins';

export const Tab = styled(NavLink)`

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-grey);
    color: var(--color-high-emphasis);
    padding: 1.5rem 0;
    width: 21.17vw;
    max-width: 271px;
    ${font.bodyMedium};
    cursor: pointer;

    span {
        margin-left: 0.5rem;
    }

    &.active {
        color: var(--color-primary);

        span {
            display: flex;
            align-items: center;
            position: relative;

            &::before {
                content: '';
                background-image: url('/assets/img/icons/selector-icon.svg');
                background-repeat: no-repeat;
                background-size: contain;
                position: absolute;
                width: 4px;
                height: 54px;
                left: -0.5rem;
            }
        }
    }
`;