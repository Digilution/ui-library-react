import React, { createRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { CheckIcon } from '@heroicons/react/outline';

export interface Properties {
    defaultValue?: boolean;
    size?: 'small' | 'medium' | 'large';
    color?: string;
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
    height: ${({ size }) => size === 'small' ? '12px' : size === 'medium' ? '16px' : '24px'};
    aspect-ratio: 1/1;
    background: transparent;
    border: ${({ theme, color }) => `${theme?.shapes?.borderWidth} solid ${theme?.colors[color]?.base}`};
    border-radius: ${({ theme }) => theme?.shapes?.borderRadius};
    cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
    transition: all linear 100ms;

    .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        background-color: rgba(255, 255, 255, .5);
        animation: ${animation} .6s linear;
    }
`;

const Checkbox = ({ defaultValue = false, size = 'medium', color = 'primary', disabled = false, handle }: Properties) => {

    const component: any = createRef();
    const [active, setActive]: any = useState(false);

    const handleClick = (event: any) => {
        const mutate = !active;

        if(disabled) return;
        if(handle) handle(mutate);

        setActive(mutate);

        const circle = document.createElement('span');
        const diameter = Math.max(component.current.clientWidth, component.current.clientHeight);
        const radius = diameter / 2;

        circle.classList.add('ripple');
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.pageX - (component.current.getBoundingClientRect().left + radius)}px`;
        circle.style.top = `${event.pageY - (component.current.getBoundingClientRect().top + radius)}px`;

        component.current.getElementsByClassName('ripple')[0]?.remove();
        component.current.appendChild(circle);
    }

    return (
        <Component ref={component} size={size} color={color} disabled={disabled} onClick={(event: any) => handleClick(event)}>
            {active && <CheckIcon height={16} />}
        </Component>
    );
}

export default Checkbox;