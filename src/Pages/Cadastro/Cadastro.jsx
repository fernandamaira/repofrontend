import BotaoPadrao from "../../Components/BotaoPadrao";
import { Input, Button, LinkText, Container, Form } from './Styles.js';
import InputSenha from "../../Components/InputSenha/InputSenha";



function Cadastro(){

    return (
        <Container>
            <Form className="Form">
                <h1> CADASTRO </h1>
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="E-mail" />
                <Input type="text" placeholder="Cargo" />
                <InputSenha />
                <Input type="password" placeholder="Repita sua senha" />
                <LinkText>
                Já tem uma conta? Faça o login <a href="/login">aqui.</a>
                </LinkText>
                <Button>CRIAR CONTA</Button>
                </Form>
        </Container>
    )

}

export default Cadastro;