import getCurrentUser from "@/app/actions/getCurrentUser";
import MenuSidebar from "./MenuSidebar";

async function Sidebar({
    children
}: {
    children: React.ReactNode;
}) {
    const currentUser = await getCurrentUser();
    return (
        <div className="h-full">
            <MenuSidebar currentUser={currentUser!}/>
            <main className="sm:pl-32 h-full">
                {children}
            </main>
        </div>
    )
}

export default Sidebar;