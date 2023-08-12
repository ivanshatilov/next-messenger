'use client'

import Button from "@/app/components/Button";
import { signOut, useSession } from "next-auth/react";

const RootPage = () => {
    const session = useSession();

    return ( 
        <div
        className="
        flex
        min-h-full
        flex-col
        justify-center
        items-center
        bg-slate-100
        ">
            <div>{session?.data?.user?.name}</div>
            <div>{session?.data?.user?.email}</div>
            <img className="w-20 rounded-full mt-4" src={`${session?.data?.user?.image}`} alt="profile picture" />
            <div className="my-6">
                <Button onClick={() => signOut()}>Logout</Button>
            </div>
        </div>
     );
}
 
export default RootPage;