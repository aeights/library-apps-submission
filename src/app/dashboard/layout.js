import SidebarComponent from "@/components/navigation/SidebarComponent";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-screen">
            <SidebarComponent />
            <div className="h-full flex-1"> 
                {children}
            </div>
        </div>
    );
}