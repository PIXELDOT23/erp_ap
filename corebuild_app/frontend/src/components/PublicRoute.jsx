// Import Modules
import { useNavigate } from "react-router-dom";

// Import Hooks
import { useUser } from "../Hooks/useUser.js";

// Import components
import Loading_Screen from "./Loading_Screen.jsx";

const ProtectedRoute = ({ children }) => {

    const { user, checkingAuth } = useUser();

    const navigate = useNavigate();

    if (checkingAuth) return <Loading_Screen />

    return user ? children : navigate('/app-area');

};

export default ProtectedRoute;