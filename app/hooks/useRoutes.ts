import { useMemo } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { HiOutlineChat, HiOutlineCog, HiOutlineLogin,  } from 'react-icons/hi'
import { HiOutlineUsers, HiOutlineMoon } from 'react-icons/hi2';
import { signOut } from 'next-auth/react';

import useConversation from './useConversation'

const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Messages',
            icon: HiOutlineChat,
            href: '/conversations',
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            icon: HiOutlineUsers,
            href: '/',
            active: pathname === '/'
        },
        {
            label: 'Settings',
            icon: HiOutlineCog,
            href: '/settings',
            active: pathname === '/settings'
        },
        {
            label: 'Logout',
            icon: HiOutlineLogin,
            href: '#',
            onClick: () => signOut()
        },
    ], [pathname, conversationId])

    return routes;
}

export default useRoutes;