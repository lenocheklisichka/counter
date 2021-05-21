import React from "react";

type ButtonPropsType = {
    title: string;
    className: string;
    disabled: boolean;
    onClick: () => void;
}

export const Button: React.FC<ButtonPropsType> = ({title, className,onClick, disabled}) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>{title}</button>
    )
}