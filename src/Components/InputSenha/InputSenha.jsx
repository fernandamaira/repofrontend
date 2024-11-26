import React, { useState } from 'react';
import { Input, InputContainer, EyeIcon } from './InputSenha.styled';

function InputSenha({ register }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <InputContainer>
      <Input
        {...register("senha")}
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

