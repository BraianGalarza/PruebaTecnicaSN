import { Navigate } from "react-router-dom";
import { isLogged } from "../utils/sessionHandler";


const CheckLogin = (props) => {
    if(isLogged()){
        return <>{props.children}</>
    }else{
        localStorage.clear()
        return <Navigate to={"/login"} />;
    }
}

export default CheckLogin;