import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface Properties {
    children?: ReactNode;
}

const Component = styled.div<any>`
    display: flex;
    align-items: center;

    button:not(:first-child):not(:last-child) {
        border-radius: 0;
    }

    button:first-child {
        border-radius: ${({ theme }) => `${theme?.shapes?.borderRadius} 0 0 ${theme?.shapes?.borderRadius}`};
    }

    button:last-child {
        border-radius: ${({ theme }) => `0 ${theme?.shapes?.borderRadius} ${theme?.shapes?.borderRadius} 0`};
    }
`;

const ButtonGroup = ({ children }: Properties) => (
    <Component>
        {children}
    </Component>
);

export default ButtonGroup;