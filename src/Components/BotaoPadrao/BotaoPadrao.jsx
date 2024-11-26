import { StyleBotaoPadrao } from "./Styles";

function BotaoPadrao (props) {
    return (
        <div>
            <StyleBotaoPadrao type="submit">
                {props.children}
            </StyleBotaoPadrao>  
        </div>
    )
}

export default BotaoPadrao;
