import BotaoPadrao from "../../Components/BotaoPadrao";
import { useNavigate } from "react-router-dom"; 
import { Container } from "./Styles";

function Home(){

    const navigate = useNavigate();

    return (
        <Container>
            <h1>HOME</h1>
            Página Home
            <BotaoPadrao onClick = {() => navigate("/login")}>
            </BotaoPadrao>
        </Container>
    )

}

export default Home;