import React, { useState } from 'react';
import { Input, InputContainer, EyeIcon } from './InputSenha.styled';

function InputSenha() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <InputContainer>
      <Input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Senha"
      />
      <EyeIcon
        src="src/assets/olho.png"
        onClick={togglePasswordVisibility}
        alt="Toggle Password Visibility"
      />
    </InputContainer>
  );
}

export default InputSenha;
