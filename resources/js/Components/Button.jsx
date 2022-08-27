import React from 'react';
import '../../css/Button.css';
import PropTypes from 'prop-types';

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "secondary", "danger", "light-outline", "white-outline"]),
    processing: PropTypes.bool,
    children: PropTypes.node,
}

export default function Button({ type = 'submit', className = '', processing, children, variant }) {
    return (
        <button
            type={type}
            className={
                `rounded-2xl w-full py-[13px] text-center ${processing && 'opacity-30'} btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
