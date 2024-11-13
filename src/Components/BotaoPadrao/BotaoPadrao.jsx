import { StyleBotaoPadrao } from "./Styles";

function BotaoPadrao (props){
    return (
    <div>
        <StyleBotaoPadrao onClick={props.onClick}>
        {props.children}
        </StyleBotaoPadrao>
    </div>
    )
}

export default BotaoPadrao;
