'use client'

import { User } from "@prisma/client";
import UserItem from "./UserItem";
import { HiBars3 } from "react-icons/hi2";

interface UserListProps {
    users: User[]
}

const UserList: React.FC<UserListProps> = ({users}) => {
    return ( 
        <div className="block fixed w-full sm:w-72 top-0 bottom-0 left-0 pb-20 overflow-y-auto lg:pb-0 lg:block  border-r-5 border-gray-800">
            <div className="p-1">
                <div className="flex-col">
                    <div className="py-6 border-b flex justify-between">
                        <button className="inline-block">
                            <span>-</span>
                            <span>-</span>
                            <span>-</span>
                        </button>
                        <form action="">
                            <input className="rounded-full bg-gray-100 px-3 py-1" type="text" placeholder="Search"/>
                        </form>
                    </div>
                    {users.map((item) => <UserItem key={item.id} data={item}/>)}
                </div>
            </div>
        </div>
     );
}
 
export default UserList;