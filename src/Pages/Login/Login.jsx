import BotaoPadrao from "../../Components/BotaoPadrao";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();

    return (
        <div>
            Página Login
            <BotaoPadrao onClick = {() => navigate("/")}/>
        </div>
    )

}

export default Login;