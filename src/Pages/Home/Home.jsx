import BotaoPadrao from "../../Components/BotaoPadrao";
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    return (
        <div>
            Página Home
            <BotaoPadrao onClick = {() => navigate("/login")}>
            </BotaoPadrao>
        </div>
    )

}

export default Home;