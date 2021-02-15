import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../../assets/misc/Headings.js";
import { ReactComponent as QuotesLeftIcon } from "../../assets/icons//quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../assets/icons//quotes-r.svg";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons//arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons//arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../assets/icons//svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../assets/icons//svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative dark:text-white text-gray-800 `;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24 `;
const HeadingInfoContainer = tw.div`flex flex-col items-center dark:text-white text-gray-800`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-24`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none bg-contain`}
  img {
    ${tw`rounded`}
  }
`;
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between dark:text-white text-gray-800`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`;
const CustomerInfo = tw.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`;
const CustomerName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-sm`;

const QuotesLeft = tw(QuotesLeftIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute top-0 left-0`;
const QuotesRight = tw(QuotesRightIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute bottom-0 right-0`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20 dark:text-white text-gray-800`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 z-10 text-primary-500 opacity-30 transform -translate-x-full dark:text-white text-gray-800`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 z-10 text-pink-500 opacity-20 transform translate-x-2/3 translate-y-8 dark:text-white text-gray-800`;

export default () => {
  /*
   * You can modify the testimonials shown by modifying the array below
   * You can add or remove objects from the array as you need.
   */
  const testimonials = [
    {
      imageSrc:
        "https://magiccopy.xyz/assets/images/hadder.gif",
      quote:
        "Амьдралынхаа туршид танд зөвлөгөө өгч, өөрт хамгийн тохиромжтой зүйлийг хэлж өгөх олон хүмүүстэй уулзах болно. Тэднийг сонс, гэхдээ өдрийн төгсгөлд зөвхөн зүрхнийхээ даалгасан зүйлийг л хий ”гэж хэлсэн.",
      customerName: "Ганхуурай Түшигсайхан",
      customerTitle: "CEO, Lunacy Inc."
    },
    {
      imageSrc:
        "https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif",
      quote:
        "Амьдралд амжилтанд хүрэх нь сайн сурагч байхтай адил энгийн зүйл юм. Чиний хийх ёстой зүйл бол анхаарлаа хандуулж, шаргуу ажиллаж, хамгийн сайн цохилт өгөхөд л хангалттай..",
      customerName: "Mark Bill",
      customerTitle: "Analyser, Lunacy Inc."
    },
    {
      imageSrc:
        "https://www.logogrand.com/news/wp-content/uploads/2020/02/maxresdefault.jpg",
      quote:
        "Та байгаа зүйлдээ талархах тусам та байгаагаасаа илүү их юмыг авна. Та байхгүй зүйлсээ анзаарах тусам, танд бүхий л зүйл хангалтгүй санагдана.",
      customerName: "Сараа Ане",
      customerTitle: "CTO, Lunacy Inc."
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>"Оюунлаг Мандахчууд"</HeadingTitle>
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <ImageContainer>
                  <img src={testimonial.imageSrc} alt={testimonial.customerName} />
                </ImageContainer>
                <TextContainer>
                  <QuoteContainer>
                    <QuotesLeft />
                    <Quote>{testimonial.quote}</Quote>
                    <QuotesRight />
                  </QuoteContainer>
                  <CustomerInfo>
                    <CustomerName>{testimonial.customerName}</CustomerName>
                    <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                  </CustomerInfo>
                </TextContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
