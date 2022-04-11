import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Homepage from "../pages/home-page";
import { AuthContext } from "./auth.context";
import { useAuth } from "./auth.hook";

export default function AuthRequire({ children }) {
    const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated) {
        return children;
    } else {
        return < Navigate to='/login' />
    }
}