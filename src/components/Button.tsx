import React, { createRef, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

export interface Properties {
    children?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    variant?: 'contained' | 'outlined' | 'text';
    type?: string;
    color?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    handle?: Function;
}

const animation = keyframes`
    to {
        transform: scale(4);
        opacity: 0;
    }
`;

const Component = styled.button<any>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: ${({ size }) => size === 'small' ? '12px' : size === 'medium' ? '16px' : '24px'} ${({ size }) => size === 'small' ? '16px' : size === 'medium' ? '24px' : '40px'};
    width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
    background: ${({ theme, variant, color, disabled }) => disabled ? 'gray' : variant === 'contained' ? theme?.colors[color]?.base : 'transparent'};
    border: ${({ theme, variant, color }) => variant === 'outlined' ? `${theme?.shapes?.borderWidth} solid ${theme?.colors[color]?.base}` : 'none'};
    border-radius: ${({ theme }) => theme?.shapes?.borderRadius};
    font-family: ${({ theme }) => theme?.typography?.button?.font};
    font-size: ${({ theme }) => theme?.typography?.button?.size};
    font-weight: ${({ theme }) => theme?.typography?.button?.weight};
    letter-spacing: ${({ theme }) => theme?.typography?.button?.spacing};
    text-transform: ${({ theme }) => theme?.typography?.button?.transform};
    color: ${({ theme, variant, color, disabled }) => disabled ? 'black' : variant === 'contained' ? theme?.colors[color]?.contrast : theme?.colors[color]?.base};
    cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
    transition: all linear 100ms;
    overflow: hidden;

    &:hover {
        background: ${({ theme, variant, color, disabled }) => !disabled && (variant === 'contained' ? theme?.colors[color]?.variant : 'transparent')};
        border-color: ${({ theme, color, disabled }) => !disabled && theme?.colors[color]?.variant};
        color: ${({ theme, variant, color, disabled } ) => !disabled && (variant !== 'contained' ? theme?.colors[color]?.variant : theme?.colors[color]?.contrast)};
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        background-color: rgba(255, 255, 255, .5);
        animation: ${animation} .6s linear;
    }
`;

const Button = ({ children, size = 'medium', variant = 'contained', type = 'button', color = 'primary', fullWidth = false, disabled = false, handle }: Properties) => {

    const button: any = createRef();

    const handleClick = (event: any) => {
        if(disabled) return;
        if(handle) handle(event);

        const circle = document.createElement('span');
        const diameter = Math.max(button.current.clientWidth, button.current.clientHeight);
        const radius = diameter / 2;

        circle.classList.add('ripple');
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.pageX - (button.current.getBoundingClientRect().left + radius)}px`;
        circle.style.top = `${event.pageY - (button.current.getBoundingClientRect().top + radius)}px`;

        button.current.getElementsByClassName('ripple')[0]?.remove();
        button.current.appendChild(circle);
    }

    return (
        <Component ref={button} size={size} variant={variant} type={type} color={color} fullWidth={fullWidth} disabled={disabled} onClick={(event: any) => handleClick(event)}>
            {children}
        </Component>
    );
}

export default Button;