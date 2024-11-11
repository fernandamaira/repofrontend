import styled from 'styled-components';


export const InputContainer = styled.div`
    position: relative; 
    width: 400px; 
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 16px;

  @media (max-width: 280px) {
    padding: 10px;
    font-size: 14px;
  }
`;


export const BolaPreta = styled.button`
    width: 15px; 
    height: 15px; 
    background-color: red;
    border-radius: 50%;
    position: absolute;
    right: 10px; 
    top: 50%; 
    transform: translateY(-50%); 
`;