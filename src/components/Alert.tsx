import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface Properties {
    children?: ReactNode;
    color?: string;
}

const Component = styled.div<any>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px;
    background: ${({ theme, color }) => theme?.colors[color]?.base};
    border-radius: ${({ theme }) => theme?.shapes?.borderRadius};
    color: ${({ theme, color }) => theme?.colors[color]?.contrast};
`;

const Alert = ({ children, color = 'success' }: Properties) => (
    <Component color={color}>
        {children}
    </Component>
);

export default Alert;