import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../../../assets/images//mandakh-light-mini.png";
import mainPhoto from "../../../assets/images//school2.jpg";

import dashboard from "../dashboard/dashboard";

const Container = tw.div`relative flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap `;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24 `;

const FormContainer = styled.div`
  ${tw`p-20 sm:p-12 md:p-16 border-4 border-gray-400 shadow-lg rounded-lg relative `}
  form {
    ${tw`mt-4 `}
  }
  h2 {
    ${tw`text-2xl sm:text-4xl font-bold text-primary-500 `}
  }
  input,textarea {
    ${tw`w-full bg-transparent w-72 text-base font-medium tracking-wide border-b-4 py-2 text-gray-800 hocus:border-pink-400 focus:outline-none transition duration-100`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6 font-bold dark:text-white text-gray-800 `;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input`font-bold`;
const SubmitButton = tw.button`w-full sm:w-72 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none  hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const LogoImg = tw.img`w-60`;
const Photo = tw.img`w-full max-w-screen-2xl`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start `;
export default () => {
  return (
    <Container >
      <Content >
      {/* <Photo className="mr-96" src={mainPhoto}/> */}
        <FormContainer  >
        <LogoContainer>
            <LogoImg className="ml-6" src={logo} />
            
          </LogoContainer>
          <div tw="mx-auto max-w-4xl dark:text-white text-gray-800">
            <br/>
            <h2>Нэвтрэх</h2>
            <form action="#">
                <Column >
                  <InputContainer>
                    <Label htmlFor="name-input ">Нэвтрэх нэр</Label>
                    <Input id="name-input" type="text" name="name" placeholder="User name / e-mail" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Нууц үг</Label>
                    <Input id="password-input" type="password" name="password" placeholder="Password" />
                  </InputContainer>
                </Column>
              <SubmitButton type="submit" value="Submit">Нэвтрэх</SubmitButton>
              
            </form>
            
          </div>
        </FormContainer>
        <dashboard/>
      </Content>
      
    </Container>
    
  );
};
