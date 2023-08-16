'use client'

import clsx from "clsx";
import Link from "next/link";

interface MenuItemProps {
    label: string,
    href: string,
    icon: any,
    active?: boolean,
    onClick?: () => void,
}

const MenuItem: React.FC<MenuItemProps> = ({
    label,
    href,
    icon: Icon,
    active,
    onClick,
}) => {
    const handleClick = () => {
        if(onClick) return onClick();
    }

    return ( 
        <li className="w-full" onClick={handleClick}>
            <Link href={href} className={clsx(`flex pl-4 gap-x-4 rounded-md py-2 text-sm text-gray-600 font-semibold leading-6 hover:bg-gray-100 `, active && "bg-gray-100 text-black")}>
                <Icon className="h-6 w-6 shrink-0"/>
                <span>{label}</span>
            </Link>
        </li>
     );
}
 
export default MenuItem;