import NavbarComponent from "@/components/navigation/NavbarComponent";

export default function AuthLayout({ children }) {
    return (
        <>
            <NavbarComponent />
            {children}
        </>
    );
}
