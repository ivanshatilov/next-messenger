'use client'

import useRoutes from '@/app/hooks/useRoutes'
import clsx from 'clsx';
import { useState } from 'react';
import MenuItem from './MenuItem';
import { User } from '@prisma/client';
import Image from 'next/image';

interface MenuSidebarProps {
    currentUser: User,
}

const MenuSidebar: React.FC<MenuSidebarProps> = ({currentUser}) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(true);

    //sm:flex 
    return ( 
        <div className="hidden sm:fixed sm:top-0 sm:bottom-0 sm:left-0 sm:z-20 sm:w-60 sm:px-1 sm:overflow-y-auto sm:bg-white sm:border-r-[1px] sm:pb-4  sm:flex-col">
            <div className='pl-4 py-6 border-b-[1px] flex flex-col gap-4'>
                <div className="relative ring-gray-200 ring-2 inline-block rounded-full overflow-hidden h-16 w-16 select-none">
                    <Image src={currentUser?.image || '/images/placeholder.jpg'} alt='profile image' fill/>
                </div>
                <div className='flex flex-col'>
                    <span className='text-lg font-semibold text-gray-600 select-none'>{currentUser.name}</span>
                    <span className='text-xs font-semibold text-gray-600 select-none'>{currentUser.email}</span>
                </div>
            </div>
            <nav className="mt-4 flex flex-col justify-between">
                <ul role='list' className="flex flex-col items-center space-y-1 select-none">
                    {routes.map((item) => <MenuItem key={item.label} label={item.label} href={item.href} icon={item.icon} active={item.active} onClick={item.onClick}/>)}
                </ul>
            </nav>
        </div>
     );
}
 
export default MenuSidebar;