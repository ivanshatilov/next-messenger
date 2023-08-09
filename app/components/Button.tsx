'use client'

import clsx from "clsx";

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined,
    fullWidth?: boolean,
    children?: React.ReactNode,
    onClick?: () => void,
    secondary?: boolean,
    danger?: boolean,
    disabled?: boolean, 
}

const Button: React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {
    return ( 
        <button type={type} onClick={onClick} disabled={disabled} className={clsx(`
        flex
        justify-center
        text-sm
        font-semibold
        px-3
        py-2
        
        rounded-md
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        `,
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-default hover:",
        danger && "text-white bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        secondary ? "text-gray-900 bg-lime-400 hover:bg-lime-500 focus-visible:outline-lime-400" : "text-white",
        !secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600",
        )}>
            {children}
        </button>
     );
}
 
export default Button;