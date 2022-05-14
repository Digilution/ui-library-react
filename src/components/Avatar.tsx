import React from 'react';
import styled from 'styled-components';

export interface Properties {
    src?: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
}

const Component = styled.img<any>`
    height: ${({ size }) => size === 'small' ? '24px' : size === 'medium' ? '40px' : '56px'};
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    object-fit: cover;
`;

const Avatar = ({ src, alt, size = 'medium' }: Properties) => (
    <Component src={src} alt={alt} size={size} />
);

export default Avatar;