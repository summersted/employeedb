import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./auth.context";

export default function AuthRequire({ children }) {
    const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated) {
        return children;
    } else {
        return < Navigate to='/login' />
    }
}