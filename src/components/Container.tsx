import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface Properties {
    children?: ReactNode;
    size?: string;
    fluid?: boolean;
}

const Component = styled.div<any>`
    margin: 0 auto;
    padding: 0 40px;
    max-width: ${({ theme, size, fluid }) => fluid ? '100%' : theme?.sizes[size]};
`;

const Container = ({ children, size = 'xl', fluid = false }: Properties) => (
    <Component size={size} fluid={fluid}>
        {children}
    </Component>
);

export default Container;