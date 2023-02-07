import React, { useState } from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";

import SocialLogIn from '../SocialLogIn/SocialLogIn';
import HeaderFrame from '../Common/Header/HeaderFrame';
import logo from '../../assets/Logo.png'
import pwShow from "../../assets/pw_show.png"
import pwInvisible from "../../assets/pw_invisible.png"





const SignIn = () => {

    const { register, watch, onSubmit, handleSubmit, formState: { errors, isValid }} = useForm();
    
    const [ show, setShow ] = useState(false);

    const pwShowHandler = () => {
        setShow(!show);
    }

    return (
        <SignInWrapper>
            <HeaderFrame/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SignInBox>
                    <ModumoaLogo src={logo}/>
                    <InputWrapper isEmail = {true}>
                        <label htmlFor="email">이메일</label>
                        <input
                            id = "email"
                            type = "email"
                            placeholder= "이메일을 입력해 주세요."
                            {...register("email", {
                                required : "아이디(이메일)를 입력해 주세요.",
                                minLength: 1,
                                pattern: /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
                            })}
                        />
                    </InputWrapper>
                    <ErrorMessage>{errors?.email?.message}</ErrorMessage>
                    <InputWrapper isEmail = {false}>
                        <label htmlFor="password">비밀번호</label>
                        <PwInputWrapper>
                            <input
                                id = "password"
                                type = {show ? "text" : "password"}
                                style = {{border : "0px"}}
                                placeholder= "비밀번호를 입력해 주세요."
                                {...register("password", {
                                    required : "비밀번호를 입력해 주세요."
                                })}
                                />
                            <Icon onClick={pwShowHandler} src = {show ? pwShow : pwInvisible} />
                        </PwInputWrapper>
                    </InputWrapper>
                    <ErrorMessage>{errors?.password?.message}</ErrorMessage>
                    <SignInButton type = "submit" disabled= {!isValid} onClick>로그인</SignInButton>
                    <TabWrapper>
                        <div className='tab'>아이디 찾기</div> | <div className='tab'>비밀번호 찾기</div> | <div className='tab'>회원가입</div>
                    </TabWrapper>
                    <Divider>
                        <CenterLine/>
                        <CenterText>또는</CenterText>
                        <CenterLine/>
                    </Divider>
                    <OAuth>
                        <SocialLogIn/>
                    </OAuth>
                </SignInBox>
            </form>
        </SignInWrapper>
    );
};

export default SignIn;

const SignInWrapper = styled.div`
    height : 1260px;
    background-color: #F5F5F5;
`
const SignInBox = styled.div`
    width: 541px;
    height: 746px;

    background-color: #FFFFFF;
    border-radius: 20px;

    margin : 60px auto;
    padding : 60px 70px;
`
const ModumoaLogo = styled.img`
    width: 151.79px;
    height: 42px;

    margin : auto;
    display: block;
`
const InputWrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: start;
    margin-top : ${(props) => (props.isEmail === true ? "46px" : "20px")};
    
    label {
        font-family: 'Pretendard';
        font-size : 14px;
        color : #666666;
        margin-bottom : 8px;
        font-weight: 500;
    }
    input {
        border: 1px solid #E6E6E6;
        border-radius: 6px;

        width : 400px;
        height : 49px;
        padding : 15px 12px;
        font-family: 'Pretendard';
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color : #C1C1C1;
    }
    input::placeholder {
        color : #C1C1C1;
        font-family: 'Pretendard';
        font-weight: 600;
        font-size: 16px;
    }
    input:hover {
        border: 1px solid #23E2BD;
        color: #585858;
        font-weight: 600;
    }
    input:focus { 
        outline: none;
        color : #C1C1C1;
    }
`
const ErrorMessage = styled.div`
    margin-top : 8px;

    font-family: 'Pretendard';

    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color : #FF5B5B;
`
const SignInButton = styled.button`
    width : 401px;
    height : 60px;

    background:  #CECECE;

    border-radius: 8px;
    border:none;

    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color : #FFFFFF;
    background-color : ${(props) => (!props.disabled ? "#22D1AF" : "#CECECE")};

    align-items: center;
    margin-top : 30px;
`
const TabWrapper = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: center;

    margin-top : 22px;
    text-align : center;

    color : #999999;
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    .tab {
        margin : 0px 16px;
    }
`
const Divider = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align : center;
    gap: 18px;
    
    margin-top : 40px;

    width: 401px;
    height: 16px;
`
const CenterLine = styled.div`
    width: 401px;
    height: 1px;
    border: 1px solid #E4E4E4;
`
const CenterText = styled.div`
    width: 100.21px;
    height: 16px;

    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;

    color: #A0A0A0;
`
const OAuth = styled.div`
    dispaly : flex;
    flex-direction : row;
    margin-top : 24px;
`

const PwInputWrapper = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    border: 1px solid #E6E6E6;
    border-radius: 6px;
    :hover {
        border: 1px solid #23E2BD;
        color: #585858;
        font-weight: 600;
    }
`

const Icon = styled.img`
    margin-right : 12px;
    width : 20px;
    height : 15.43px;
`
