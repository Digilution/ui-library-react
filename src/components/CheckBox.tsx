import React, { ReactNode } from 'react';
import styled from 'styled-components';


export interface Properties {
    size?: 'small' | 'medium' | 'large';
    color?: string;
    disabled?: boolean;
    handle?: Function;
}

const Component = styled.div<any>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ size }) => size === 'small' ? '8px' : size === 'medium' ? '12px' : '16px'} ${({ size }) => size === 'small' ? '12px' : size === 'medium' ? '20px' : '28px'};
    aspect-ratio: 1 / 1;
    color: ${({ theme, color, disabled }) => disabled ? 'black' : theme?.colors[color]?.contrast};
    cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};

    &:hover {
        background: ${({ theme, color, disabled }) => !disabled && theme?.colors[color]?.variant};
        border-color: ${({ theme, color, disabled }) => !disabled && theme?.colors[color]?.variant};
        color: ${({ theme, color, disabled } ) => !disabled && theme?.colors[color]?.variant};
    }
`;

const Mark = null;

const CheckBox = ({ size = 'medium', color = 'primary', disabled = false, handle }: Properties) => {

    const handleClick = () => {
        if(disabled) return;
        if(handle) handle();
    }

    return (
        <Component size={size} color={color} disabled={disabled} onClick={handleClick}>
            
        </Component>
    );
}

export default CheckBox;