import React from 'react';
import styled from "styled-components";

import Google from '../../assets/Google.png'
import Kakao from '../../assets/Kakao.png'

const SocialLogIn = ({ type="Google" }) => {

    const logInType = () => {
        if (type === "Google") {
            
        }
            
        if (type === "Kakao")
            return // api
    };
    
    return (
        <SocialLogInWrapper>
            <KakaoLogIn src = {Kakao}/>
            <GoogleLogIn src= {Google}/>
        </SocialLogInWrapper>
    );
};

export default SocialLogIn;

const SocialLogInWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 401px;
    height: 62px;
    border-radius: 8px;
`
const KakaoLogIn = styled.img`
    margin-bottom : 24px;
`
const GoogleLogIn = styled.img``

