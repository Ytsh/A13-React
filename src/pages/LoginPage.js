import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export function LoginPage(){
    const {user,login,logout} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = () =>{
        logout();
        // login('demoUser');
        navigate("/about", {replace:true});
    }

    // if(user){
    //     return <Navigate to={from} replace />
    // }

    return(
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}> Login </button>
        </div>
    )
}