import { Navigate } from "react-router-dom";
import { isAdmin } from "../utils/sessionHandler";


const CheckAdmin = (props) => {
    if(isAdmin()){
        console.log("true")
        return <>{props.children}</>
    }else{
        console.log("false")
        localStorage.clear()
        return <Navigate to={"/login"} />;
    }
}

export default CheckAdmin;