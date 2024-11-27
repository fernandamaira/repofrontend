import React, { useState } from "react";
import { StyleBotaoPadrao } from "./Styles";
import { useNavigate } from "react-router-dom";
import { Container, Title, Input, LinkText, ButtonWrapper, EyeIcon } from "./Styles";

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Container>
            <Title>LOGIN</Title>
            <Input type="email" placeholder="E-mail" />
            <div style={{ position: "relative" }}>
                <Input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Senha"
                />
                <EyeIcon 
                    src="src/assets/olho.png"  
                    onClick={togglePasswordVisibility} 
                    alt="Toggle Password Visibility" 
                />
            </div>
            <LinkText onClick={() => navigate("/signup")}>
                Não tem login? Faça seu cadastro <a href="/cadastro">aqui.</a>
            </LinkText>
            <ButtonWrapper>
                <StyleBotaoPadrao onClick={() => navigate("/")}>ENTRAR</StyleBotaoPadrao>
            </ButtonWrapper>
        </Container>
    );
}

export default Login;
