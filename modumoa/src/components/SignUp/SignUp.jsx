import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { set, useForm } from "react-hook-form";

import checked_btn from "../../assets/checked_btn.png"
import unchecked_btn from "../../assets/unchecked_btn.png"
import pwShow from "../../assets/pw_show.png"
import pwInvisible from "../../assets/pw_invisible.png"

// import InputForm from './InputForm';


const SignUp = () => {

    const {register, watch, onSubmit, handleSubmit, formState: { errors, isValid }} = useForm();

    const [ checkList, setCheckList ] = useState([]);
    const [ buttonColor, setButtonColor ] = useState(false);
    const [ show, setShow ] = useState(false)
    const [ pwCheckShow, setPwCheckShow ] = useState(false)

    const showHideHandler = (e) => {
        if (e.currentTarget.id === "password") {
            setShow(!show);
        } else {
            setPwCheckShow(!pwCheckShow);
        }
        
    }
    const isAllAgreeHandler = (e) => {
        !e.currentTarget.checked ?
        setCheckList(["ageCheck", "TOSCheck", "profileCheck", "addCheck"])
        : setCheckList([]);
    };

    const singleAgreeHandler = (e) => {
        !e.currentTarget.checked ?
        setCheckList([...checkList, e.target.id])
        : setCheckList(checkList.filter((choice) => choice!== e.target.id));
    };

    const submitHandler = (errors, isValid) =>  {
        console.log("에러",errors)
        console.log("발리드",isValid)
    }

    useEffect(() => {
        if (
            checkList.includes("ageCheck") &&
            checkList.includes("TOSCheck") &&
            checkList.includes("profileCheck") &&
            checkList.includes("addCheck")
        ) {
            setButtonColor(true);
        } else {
            setButtonColor(false);
            
        }
    }, [checkList])

    return (
        <SignUpWrapper>
            <SignUpBox>
                <PageTitle>회원가입</PageTitle>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <InputWrapper isFirst = {true}>
                                <label htmlFor="name">이름</label>
                                <input
                                    id = "name"
                                    type = "text"
                                    placeholder= "이름을 입력해 주세요."
                                    {...register("name", {
                                        required : "이름을 입력해 주세요."
                                    })}
                                />
                    </InputWrapper>
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                    <InputWrapper isFirst = {false}>
                                <label htmlFor="email">이메일주소</label>
                                <input
                                    id = "email"
                                    type = "email"
                                    placeholder= "이메일 주소를 입력해 주세요."
                                    {...register("email", {
                                        required : "이메일 주소를 입력해 주세요."
                                    })}
                                />
                    </InputWrapper>
                    <ErrorMessage>{errors?.email?.message}</ErrorMessage>
                    <InputWrapper isFirst = {false}>
                                <label htmlFor="password">비밀번호</label>
                                <IconInputWrapper>
                                    <input
                                        id = "password"
                                        type = {show ? "text" : "password" }
                                        style={{border : "0px"}}
                                        placeholder= "사용할 비밀번호를 입력해 주세요."
                                        {...register("password", {
                                            required : "비밀번호를 입력해 주세요.",
                                            minLength: {
                                                value: 3,
                                                message: '3글자 이상 입력해주세요.',
                                            },
                                            pattern: { 
                                            value: /^[A-za-z0-9가-힣]{3,10}$/,
                                            message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자', // 에러 메세지
                                            },
                                        })}  
                                    />
                                    <Icon id = "password" onClick={showHideHandler} src = {show ? pwShow : pwInvisible}/>
                                </IconInputWrapper>
                    </InputWrapper>
                    <ErrorMessage>{errors?.password?.message}</ErrorMessage>
                    <InputWrapper isFirst = {false}>
                                <label htmlFor="passwordCheck">비밀번호 재입력</label>
                                <IconInputWrapper>
                                    <input
                                    id = "passwordCheck"
                                    type = {pwCheckShow ? "text" : "password" }
                                    style={{border : "0px"}}
                                    placeholder= "사용할 비밀번호를 다시 입력해 주세요."
                                    {...register("passwordCheck", {
                                        required : "비밀번호를 입력해 주세요."
                                    })}
                                    />
                                    <Icon id = "passwordCheck" onClick={showHideHandler} src = {pwCheckShow ? pwShow : pwInvisible}/>
                                </IconInputWrapper>
                                
                    </InputWrapper>
                    <ErrorMessage>{errors?.passwordCheck?.message}</ErrorMessage>
                    <InputWrapper isFirst = {false}>
                                <label htmlFor="nickname">닉네임 설정 (한글8자, 영문 16자 까지 가능합니다.)</label>
                                <input
                                    id = "nickname"
                                    type = "text"
                                    placeholder= "사용할 닉네임을 입력해 주세요."
                                    {...register("nickname", {
                                        required : "닉네임을 입력해 주세요."
                                    })}
                                />
                    </InputWrapper>
                    <ErrorMessage>{errors?.nickname?.message}</ErrorMessage>
                        <AllAgreeWrapper 
                            onClick = {isAllAgreeHandler}
                            checked = {checkList.length === 4 ? true : false}
                            >
                            <IsCheckIcon src = {checkList.length === 4 ? checked_btn : unchecked_btn}></IsCheckIcon>
                            전체동의
                        </AllAgreeWrapper>

                        <EctAgreesWrapper>
                                <Agrees 
                                    id = "ageCheck" 
                                    essential = {false}
                                    onClick = {singleAgreeHandler}
                                    checked={checkList.includes("ageCheck") ? true : false}>
                                    <IsCheckIcon id = "ageCheck" src = {checkList.includes("ageCheck") ? checked_btn : unchecked_btn}/>
                                    만 14세 이상입니다.
                                </Agrees>
                                <Agrees 
                                    id = "TOSCheck" 
                                    essential = {true} 
                                    onClick={singleAgreeHandler}
                                    checked={checkList.includes("TOSCheck") ? true : false}>
                                    <IsCheckIcon id = "TOSCheck" src = {checkList.includes("TOSCheck") ? checked_btn : unchecked_btn}/>
                                    이용약관 동의(필수)
                                </Agrees>
                                <Agrees 
                                    id = "profileCheck" 
                                    essential = {true} 
                                    onClick={singleAgreeHandler} 
                                    checked={checkList.includes("profileCheck") ? true : false}>
                                    <IsCheckIcon id = "profileCheck" src = {checkList.includes("profileCheck") ? checked_btn : unchecked_btn}/>
                                    개인정보 수집 및 동의 (필수)
                                </Agrees>
                                <Agrees 
                                    id = "addCheck" 
                                    essential = {false} 
                                    onClick={singleAgreeHandler} 
                                    checked={checkList.includes("addCheck") ? true : false}>
                                    <IsCheckIcon id = "addCheck" src = {checkList.includes("addCheck") ? checked_btn : unchecked_btn}/>
                                    광고성 정보 수신 동의 (선택)
                                </Agrees>
                        </EctAgreesWrapper>
                    <SignInButton type = "submit">가입하기</SignInButton>
                </form>
            </SignUpBox>
        </SignUpWrapper>
    );
};

export default SignUp;

const SignUpWrapper = styled.div`
    background-color : #F9FAFB;
    padding : 60px;
`
const SignUpBox = styled.div`
    margin : 0px auto;
    width : 540px;
    
    background-color : #FFFFFF;
    border : 0px;
    border-radius : 20px;
    padding : 60px 70px;
`
const PageTitle = styled.div`
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;

    color: #484848;
    text-align : center;
`
const InputWrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: start;
    margin-top : ${(props) => (props.isFirst === true ? "46px" : "20px")};
    
    label {
        font-family: 'Pretendard';
        font-size : 14px;
        color : #666666;
        margin-bottom : 8px;
        font-weight: 500;
        position : relative;
    }
    input {
        position : relative;
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
        background-image: url(${(props) => (props.type === "password" ? pwShow : "")})
        background-repeat: no-repeat
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
    width : 400px;
    height : 59px;

    margin-top : 31px;

    border : 0px;
    background-color : #CECECE;
    border-radius : 8px;

    color : #FFFFFF;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align : center;
`

const AllAgreeWrapper = styled.div`
    display : flex;

    padding : 20px;
    margin-top : 36px;
    width : 400px;
    height : 58px;

    background-color : #FFFFFF;
    border : 1px solid #D9D9D9;
    border-radius : 8px;

    color : #494949;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;    
    align-items : center;

    :hover {
        border: 1px solid #23E2BD;
        color: #585858;
        font-weight: 600;
    }
`
const IsCheckIcon = styled.img`
    width : 18px;
    height : 18px;
    margin-right : 12px;
`
const EctAgreesWrapper = styled.div`
    padding : 20px 20px 0px 20px;
    text-align : start;
    font-family: 'Pretendard';

    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    align-items: center;

    color: #6A6A6A;
`
const Agrees = styled.div`
    margin-bottom : 18px;
`

const Icon = styled.img` 
    margin-right : 12px;
    width : 20px;
    height : 15.43px;
`
const IconInputWrapper = styled.div`
    display : flex;
    flex-direction : row;
    border: 1px solid #E6E6E6;
    border-radius: 6px;
    align-items: center;
    :hover {
        border: 1px solid #23E2BD;
        color: #585858;
        font-weight: 600;
    }
    :focus { 
        outline: none;
        color : #C1C1C1;
    }
`