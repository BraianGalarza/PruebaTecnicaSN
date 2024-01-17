import { useLocation } from "react-router-dom";
import NavBar from "../components/navBar";

function RootLayout({ children }) {
    const location = useLocation();
    const excludePaths = ["/login","/registrar","/"];

    const shouldShowSidebar = !excludePaths.includes(location.pathname);

    return (
        <div>
            {shouldShowSidebar && <NavBar />}
            <main>
                <div>
                    {children}
                </div>
            </main>
        </div>
    );
}

export default RootLayout;