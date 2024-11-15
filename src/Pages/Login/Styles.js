import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #000;
    color: #fff;

    @media (max-width: 280px) {
        padding: 10px;
    }
`;

export const Title = styled.h1`
    color: #ffe712;
    font-size: 24px;
    margin-bottom: 30px;

    @media (max-width: 280px) {
        font-size: 22px;
        margin-bottom: 20px;
    }
`;

export const Input = styled.input`
    width: 500px;
    padding: 15px;
    margin: 20px 0;
    border-radius: 30px;
    border: none;
    font-size: 16px;
    background-color: #fff;
    color: #000;
    outline: none;

    @media (max-width: 280px) {
        width: 100%;
        padding: 12px;
        font-size: 14px;
    }
`;

export const EyeIcon = styled.img`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 24px;
    height: 24px;

    @media (max-width: 280px) {
        right: 10px;
        width: 20px;
        height: 20px;
    }
`;

export const LinkText = styled.p`
    color: #fff;
    font-size: 14px;
    margin: 10px 0;

    a {
        color: #ffd600;
        text-decoration: none;
        cursor: pointer;
    }

    @media (max-width: 280px) {
        font-size: 12px;
        margin: 8px 0;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;

    @media (max-width: 280px) {
        margin-top: 15px;
    }
`;

export const StyleBotaoPadrao = styled.button`
    width: 350px;
    padding: 30px;
    border-radius: 30px;
    background-color: #FFE712;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e5c200;
    }

    @media (max-width: 280px) {
        width: 100%;
        padding: 15px;
        font-size: 14px;
    }
`;
