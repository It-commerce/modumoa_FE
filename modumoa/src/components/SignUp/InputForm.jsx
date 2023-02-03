import React from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";
    

const InputForm = () => {

        const inputCategory = [
        {
            isFirst : true, 
            title : "이름",
            id : "name", 
            type:"text", 
            placeholder : "이름을 입력해 주세요", 
            registerType :"text", 
            required : "이름을 입력해 주세요."
        },
        {
            isFirst : false, 
            title : "이메일주소", 
            id : "email", 
            type:"email", 
            placeholder : "이메일 주소를 입력해 주세요.", 
            registerType :"text", 
            required : "email"
        },
        {
            isFirst : false, 
            title : "비밀번호", 
            id : "password", 
            type:"password", 
            placeholder : "사용할 비밀번호를 입력해 주세요.", 
            registerType :"password", 
            required : "비밀번호를 입력해 주세요."
        },
        {
            isFirst : false, 
            title : "비밀번호 재입력", 
            id : "passwordCheck", 
            type:"password", 
            placeholder : "사용할 비밀번호를 다시 입력해 주세요.", 
            registerType :"password", 
            required : "비밀번호를 다시 입력해 주세요."
        },
        {
            isFirst : false, 
            title : "닉네임 설정 (한글8자, 영문 16자 까지 가능합니다.)", 
            type:"text", 
            id : "nickname", 
            placeholder : "사용할 닉네임을 입력해 주세요.", 
            registerType :"text", 
            required : "닉네임을 입력해 주세요."
        },
    ]

    const { register, watch, onSubmit, handleSubmit, formState: { errors }} = useForm();

    return (
        <div>
            {inputCategory.map((props) => 
                <div>
                    <InputWrapper isFirst = {props.isFirst}>
                        <label htmlFor={props.id}>{props.title}</label>
                        <input
                            id = {props.id}
                            type = {props.type}
                            placeholder= {props.placeholder}
                            {...register(props.registerType, {
                                required : props.required
                            })}
                        />
                    </InputWrapper>
                    {/* {errors.props.registerType ? (<ErrorMessage>{errors.props.registerType}</ErrorMessage>) : null} */}
                </div>
            )}
        </div>
    );
};

export default InputForm;

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

const ErrorMessage = styled.div``