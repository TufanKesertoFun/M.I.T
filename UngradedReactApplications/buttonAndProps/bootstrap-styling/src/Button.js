import React from 'react';

const Button = (props) => {
    const { onClick, type, disabled, label } = props;

    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
