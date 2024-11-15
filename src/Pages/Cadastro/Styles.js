import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: yellow;
  min-height: 100vh;
  padding: 20px;
  width: 100%; 

  @media (max-width: 280px) {
    padding: 10px;
  }
`;

export const Form = styled.div`
  width: 100%; 
  max-width: 500px; 
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;  

  h1 {
    color: #ffe712;
    margin-bottom: 30px;
    font-size: 24px;
  }

  @media (max-width: 280px) {
    width: 100%;
    padding: 15px;

    h1 {
      font-size: 22px;
      margin-bottom: 20px;
    }
  }
`;

export const Input = styled.input`
  width: 100%; 
  padding: 15px;
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

export const Button = styled.button`
  width: 100%; 
  padding: 15px;
  background-color: yellow;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;

  @media (max-width: 280px) {
    padding: 12px;
    font-size: 16px;
  }
`;

export const LinkText = styled.p`
  color: yellow;
  margin-top: 10px;

  a {
    color: lightblue;
    text-decoration: none;
  }
`;
