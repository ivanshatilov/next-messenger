'use client'

import UserAvatar from "@/app/components/UserAvatar";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface UserItemProps {
    data: User
}

const UserItem: React.FC<UserItemProps> = ({data}) => {
    const router = useRouter();
    const [isLoading,setIsLoading] = useState(false);

    const handleClick = useCallback(() => {
        setIsLoading(true);
        axios.post("/api/conversations", {userId: data.id})
        .then(() => router.push(`/conversations/${data.id}`))
        .finally(() => setIsLoading(false))
    }, [data, router])
    return ( 
        <div onClick={handleClick} className="w-full relative flex items-center space-x-3 rounded-lg bg-white px-3 py-2 my-1 hover:bg-neutral-100 transition cursor-pointer">
            <UserAvatar user={data}/>
            <div className="min-w-0 flex-1">
                <div className="focus-outline-none">
                    <div className="flex flex-col justify-between items-start">
                        <p className="text-sm font-semibold text-gray-600">
                            {data.name}
                        </p>
                        <span className="text-xs font-medium text-gray-400">
                            Last seen recently
                        </span>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default UserItem;