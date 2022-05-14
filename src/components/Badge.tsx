import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface Properties {
    children?: ReactNode;
    content?: string;
    color?: string;
}

const Component = styled.div<any>`
    position: relative;
    display: inline-block;
`;

const Content = styled.div<any>`
    position: absolute;
    top: -8px;
    right: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    aspect-ratio: 1 / 1;
    background: ${({ theme, color }) => theme?.colors[color]?.base};
    border-radius: 50%;
    font-family: ${({ theme }) => theme?.typography?.badge?.font};
    font-size: ${({ theme }) => theme?.typography?.badge?.size};
    font-weight: ${({ theme }) => theme?.typography?.badge?.weight};
    letter-spacing: ${({ theme }) => theme?.typography?.badge?.spacing};
    text-transform: ${({ theme }) => theme?.typography?.badge?.transform};
    color: ${({ theme, color }) => theme?.colors[color]?.contrast};
`;

const Badge = ({ children, content, color = 'primary' }: Properties) => (
    <Component>
        <Content color={color}>
            {content}
        </Content>

        <>
            {children}
        </>
    </Component>
);

export default Badge;