'use client'

import clsx from "clsx";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
    icon: IconType,
    onClick: () => void,
    disabled?: boolean,

}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onClick,
    disabled
}) => {
    return ( 
        <button type="button" onClick={onClick} className={clsx(`
        inline-flex
        bg-blue-900
        rounded-full
        p-3
        text-white
        shadow-sm
        
        text-3xl
        `,
        disabled ? "opacity-50 cursor-default" : "hover:bg-blue-950")}>
            <Icon />
        </button>
     );
}
 
export default AuthSocialButton;