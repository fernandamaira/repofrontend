import React from 'react';
import { Input, InputContainer, BolaPreta } from './InputSenha.styled';

function InputSenha() {
    
    return (
        <InputContainer>
            <Input type="password" placeholder="Senha" />
            <BolaPreta />
        </InputContainer>
    );
}

export default InputSenha; 