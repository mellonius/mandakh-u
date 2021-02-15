import React from "react";
import tw from "twin.macro";
import HomeFooter from "../footer/footer";
import HomeMain from "../footer/main";

import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "../../assets/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../../assets/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../assets/icons//svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../assets/icons//svg-decorator-blob-3.svg";

const Container = tw.div`relative dark:text-white text-gray-800`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center dark:text-white text-gray-800 `;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm dark:text-white text-gray-800 font-bold uppercase`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div` p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left dark:text-white text-gray-800`;
const MetaContainer = tw.div`flex items-center dark:text-white text-gray-800`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0 dark:text-white text-gray-800 `}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100 dark:text-white text-gray-800 `;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "",
  heading = <>Бид Блог <span tw="text-primary-500">бичих дуртай.</span></>,
  description = "Some amazing blog posts that are written by even more amazing people.",

}) => {
  const blogPosts = [
    {
      imageSrc:
        "https://pajaaleksic.com/wp-content/uploads/2019/07/react-native-workshop.jpg",
      author: "Түшиг",
      category: "Технологи",
      title: "React Native гэж юу вэ ?",
      description: "Орчин үед өдөр өдрөөр өөрчлөгдөн хувьсаж буй хурдтай технологи, их өгөгдлийн хөгжлийг даган вэб апп, мобайл апп болон бусад шаардлагатай програмуудыг асар богино хугацаанд хийх зайлшгүй шаардлага үүссэнийг бизнес эрхлэгчид улам бүр анзаарч эхэлж байна.",
      url: "https://reactnative.dev/"
    },
    {
      imageSrc:
        "https://miro.medium.com/max/2720/1*VKOMtQZm5yZ0goTl1u623Q.png",
      author: "Түшиг",
      category: "Технологи",
      title: "Tailwind css гэж юу вэ ?",
      description: "Сүүлийн 3 жилийн турш вэб хөгжүүлэлтийн салбарт, тэр дундаа CSS framework-уудын дунд “Аясын салхи” хэмээх өвөрмөц содон нэр тод сонсогдох болсон бөгөөд үнэхээр ч нэрэндээ гайхалтай зохицон, шинэ уур амьсгал, шинэ боломж, шинэ ирээдүйг вэб хөгжүүлэгчдэд авч ирсэн юм.",
      url: "https://tailwindcss.com/"
    },
    {
      imageSrc:
        "https://miro.medium.com/max/1000/0*ql6umH87XAQQQjuR.png",
      author: "Түшиг",
      category: "Технологи",
      title: "Next.js гэж юу вэ ?",
      description: "Netflix, TikTok, Hulu, Twitch, Nike гэсэн орчин үеийн аваргууд ашигладаг энэхүү орчин үеийн гал халуун фрэймворк нь React технологи дээр үндэслэгдсэн бөгөөд Frontend Backend хоёр талд хоёуланд нь ажилладаг вэб аппуудыг хийх чадвартайгаараа бусдаасаа давуу юм. ",
      url: "https://nextjs.org/"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta>
                    <Meta>
                      <TagIcon />
                      <div>{post.category}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Read Post</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
      <HomeMain/>
      <HomeFooter/>
    </Container>
  );
};
