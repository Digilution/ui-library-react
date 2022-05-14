import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface Properties {
    children?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    type?: 'contained' | 'outlined' | 'text';
    color?: string;
}

const Component = styled.div<any>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${({ size }) => size === 'small' ? '4px' : size === 'medium' ? '8px' : '12px'};
    background: ${({ theme, type, color }) => type === 'contained' ? theme?.colors[color]?.base : 'transparent'};
    border: ${({ theme, type, color }) => type === 'outlined' ? `${theme?.shapes?.borderWidth} solid ${theme?.colors[color]?.base}` : 'none'};
    border-radius: 12px;
    font-family: ${({ theme }) => theme?.typography?.chip?.font};
    font-size: ${({ theme }) => theme?.typography?.chip?.size};
    font-weight: ${({ theme }) => theme?.typography?.chip?.weight};
    letter-spacing: ${({ theme }) => theme?.typography?.chip?.spacing};
    text-transform: ${({ theme }) => theme?.typography?.chip?.transform};
    font-weight: 600;
    color: ${({ theme, type, color }) => type === 'contained' ? theme?.colors[color]?.contrast : theme?.colors[color]?.base};
`;

const Chip = ({ children, size = 'medium', type = 'contained', color = 'primary' }: Properties) => (
    <Component size={size} type={type} color={color}>
        {children}
    </Component>
);

export default Chip;