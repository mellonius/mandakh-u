import React, {
  useState,
  // useContext
} from "react";
import Typical from "react-typical";
import useStartAnimation from "../hook/useStartAnimation";
import bgdark from "../assets/images/teachers.jpg";
import bgschool from "../assets/images/school3.jpg";
import bglight from "../assets/images/home-hero.jpg";
import VideoIntro from "../assets/videos/intro.mp4";
// import { ThemeContext } from '../theme';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Homefooter from "./footer/footer";
import HomeAbout from "./about/about";
import HomeLink from "./services/link";
import HomeSocial from "./social/social";
import FbNews from "./fbNews";
import HomeSchool from "./school/school";
import HomeContact from "./contact/contact";
// import HomeTeacher from "./school/teacher";
import HomeFaqs from "./faqs/faqs";
import HomeMain from "./footer/main";

function Home() {
  // const { theme } = useContext(ThemeContext)
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = "translate-y-10 opacity-0";
  const animated = useStartAnimation();

  const [typic] = useState([
    "Software Engineer",
    2000,
    "Information system",
    2000,
    "Graphic design",
    2000,
    "Computer network",
    2000,
  ]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={false}
        autoPlay={true}
        swipeable={false}
        autoPlaySpeed={6000}
        containerClass="carousel-container"
        keyBoardControl={true}
        showDots={true}
      >
      
          <div
            className="w-full bg-no-repeat bg-cover bg-center flex items-center justify-center h-full py-14 sm:h-720"
            style={{ backgroundImage: "url(" + bglight + ")" }}
            id="header"
          >
            <div className="font-dosis w-3/5 h-3/5 text-left select-none ">
              <h4
                className={` text-sm md:text-3xl lg:text-4xl text-white font-bold transform ${animated ? "translate-y-0" : styleTranslate
                  }  ${transition(2000)} `}
              >
                2021-2022!
              <br />
              оны хичээлийн <br />
              жилийн элсэлт эхэллээ.
            </h4>
              <h1
                className={`text-sm md:text-6xl text-white transform ${animated ? "translate-y-0" : styleTranslate
                  } ${transition(3000)} `}
              >
                <Typical
                  steps={typic}
                  loop={Infinity}
                  className="inline-block text-white font-extrabold"
                  wrapper="p"
                />
              </h1>
              <button
                className={`animate-bounce  text-sm md:text-2xl md:mt-12 hover:bg-gray-800 hover:bg-opacity-50 border-solid border border-light-gray-800 text-white rounded-lg mt-3 mb-14 p-1  `}
              >
                {"Бүртгүүлэх"}
              </button>
            </div>
          </div>
          <div
            className=" w-full bg-no-repeat bg-cover bg-center flex items-center justify-center h-full sm:h-720"
            style={{ backgroundImage: "url(" + bgdark + ")" }}
          ></div>
          <div
            className=" w-full bg-no-repeat bg-cover bg-center flex items-center justify-center h-full sm:h-720"
            style={{ backgroundImage: "url(" + bgschool + ")" }}
          ></div>
      <div className="w-full bg-no-repeat bg-cover bg-center flex items-center justify-center h-full py-14 sm:h-720">
      <video autoPlay muted src={VideoIntro} width="100%" height="100%"   />
        </div>
      </Carousel>
      
        <br />
        <HomeSocial />
        <FbNews />
        <br />
        <hr />
        <br />
        <HomeAbout />
        <br />
        <br />
        <hr />
        <HomeLink />
        <hr />
        <br />
        <HomeSchool />
        <hr />
        <HomeFaqs />
        <br />
        <hr />
        <br />
        <HomeMain />
        <br />
        <HomeContact />
        <br />
        <Homefooter />
        </div>
  );
}
export default Home;
