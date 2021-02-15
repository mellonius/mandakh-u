import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {ReactComponent as SvgDotPatternIcon} from "../../assets/icons//dot-pattern.svg"


export default function HomeContact () {
  const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24 `;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 border-4  bg-white rounded-lg relative`}
  form {
    ${tw`mt-4 `}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold `}
  }
  input,textarea {
    ${tw`w-full bg-transparent   text-base font-medium tracking-wide border-b-2 py-2 text-gray-800 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6 dark:text-white text-gray-800 w-full h-full `;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-32 sm:h-full resize-none dark:text-white text-gray-800`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none  hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 z-10 opacity-50 text-primary-500 fill-current w-24`

  return (
    <Container>
      <hr/>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl dark:text-white text-gray-800">
            <h2>Санал хүсэлт.</h2>
            <form action="#">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input ">Таны нэр</Label>
                    <Input id="name-input" type="text" name="name" placeholder="Жнь: Сараа, Мандаа" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Таны цахим хаяг</Label>
                    <Input id="email-input" type="email" name="email" placeholder="Жнь: saraa@mail.com" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1 ">
                    <Label htmlFor="name-input">Санал хүсэлт бичнэ үү ?</Label>
                    <TextArea id="message-input" name="message" placeholder=""/>
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton type="submit" value="Submit">Илгээх</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
      <hr/>
    </Container>
    
  );
};
