import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 100%; /* O container agora ocupa 100% da largura do seu container pai */
  max-width: 500px; /* Limita a largura máxima do container */
  margin: 0 auto; /* Centraliza o container horizontalmente */
`;

export const Input = styled.input`
  width: 100%; /* O input vai ocupar 100% da largura do InputContainer */
  padding: 15px;
  padding-right: 40px; /* Espaço para o ícone do olho */
  margin: 10px 0;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  background-color: #fff;
  color: #000;
  outline: none;

  @media (max-width: 280px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const EyeIcon = styled.img`
  position: absolute;
  right: 10px; /* Posiciona o ícone do olho à direita */
  top: 50%;
  transform: translateY(-50%); /* Centraliza o ícone verticalmente */
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

