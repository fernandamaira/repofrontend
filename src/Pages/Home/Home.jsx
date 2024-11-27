import { StyleBotaoPadrao } from "../Login/Styles";
import { useNavigate } from "react-router-dom"; 
import { Container } from "./Styles";


function Home(){

    const navigate = useNavigate();

    return (
        <Container>
            <h1>HOME</h1>
            Página Home
            <StyleBotaoPadrao onClick = {() => navigate("/login")}>
            </StyleBotaoPadrao>
        </Container>
    )

}

export default Home;