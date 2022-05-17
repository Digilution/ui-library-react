import React, { createRef, useState } from 'react';
import styled from 'styled-components';

interface Properties {
    label?: string;
    name?: string;
    type?: string;
    defaultValue?: string;
    color?: string;
    background?: string;
    disabled?: boolean;
    error?: boolean;
    handle?: Function;
}

const Component = styled.div<any>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
`;

const Label = styled.label<any>`
    position: absolute;
    top: ${({ focused, filled }) => focused || filled ? '-8px' : '12px'};
    left: 4px;
    padding: 0 8px;
    background: ${({ theme, background }) => theme.colors[background].base};
    font-size: ${({ focused, filled }) => focused || filled ? '.8rem' : '1rem'};
    font-weight: 500;
    color: ${({ theme, color, focused, error }) => error ? theme.colors.error.base : focused ? theme.colors[color].base : theme.colors.grey['600']};
    transition: all ease-in-out 100ms;
    cursor: text;
`;

const Input = styled.input<any>`
    padding: 12px;
    width: 100%;
    font-size: 1rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.default.contrast};
    border: 1px solid ${({ theme, color, focused, error }) => error ? theme.colors.error.base : focused ? theme.colors[color].base : theme.colors.grey['400']};
    border-radius: ${({ theme }) => theme.shapes.borderRadius};
    transition: all linear 100ms;

    &:-webkit-autofill { background: transparent !important; }
`;

const TextField = ({ label, name, type, defaultValue = '', color = 'primary', background = 'default', disabled = false, error = false, handle }: Properties) => {

    const component: any = createRef();
    const [focused, setFocused] = useState(false);
    const [filled, setFilled] = useState(defaultValue?.length > 0);

    const handleChange = (event: any) => {
        const target = event.target;
        const value = target.value;

        if(disabled) return;
        if(handle) handle(event);

        setFilled(value.length > 0);
    }

    return (
        <Component disabled={disabled}>
            <Label onClick={() => component?.current?.select()} color={color} background={background} focused={focused} filled={filled} error={error}>
                {label}
            </Label>

            <Input name={name} type={type} defaultValue={defaultValue} color={color} focused={focused} filled={filled} error={error} onChange={handleChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} ref={component} />
        </Component>
    );
}
 
export default TextField;