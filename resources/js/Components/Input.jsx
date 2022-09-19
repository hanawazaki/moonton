import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../../css/Input.css';

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'file']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    placeholder: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    isError: PropTypes.bool,
};

export default function Input({
    type = 'text',
    name,
    value,
    className,
    variant = "primary",
    defaultValue,
    placeHolder,
    autoComplete,
    required,
    isFocused,
    handleChange,
    isError
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `rounded-2xl bg-form-bg input-${variant} py-[13px] px-7 ${isError && "input-error"} w-full ${className}`
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeHolder}
                defaultValue={defaultValue}
            />
        </div>
    );
}
