import { User } from "@prisma/client";
import Image from "next/image";

interface UserAvatarProps {
    user?: User
}

const UserAvatar: React.FC<UserAvatarProps> = ({user}) => {
    return ( 
        <div className="flex items-center">
            <div className="relative inline-block rounded-full overflow-hidden h-10 w-10">
                <Image src={user?.image || '/images/placeholder.jpg'} alt='profile image' fill/>
                <div></div>
            </div>
        </div>
     );
}
 
export default UserAvatar;