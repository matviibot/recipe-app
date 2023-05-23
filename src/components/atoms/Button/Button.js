import React from 'react';

const Button = ({ className, children, type,...rest }) => {
    return (
        <button type={type} className={className} {...rest}>
            {children}
        </button>
    );
};

export default Button;