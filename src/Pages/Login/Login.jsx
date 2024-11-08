import BotaoPadrao from "../../Components/BotaoPadrao";
import { useNavigate } from "react-router-dom";
import { Container } from "./Styles";

function Login(){

    const navigate = useNavigate();

    return (
        <Container>
            Página Login
            <BotaoPadrao onClick = {() => navigate("/")}/>
        </Container>
    )

}

export default Login;