import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../theme";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios"
export default function News() {
  const { language } = useContext(LanguageContext);
  const [news, setNews] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://jsonplaceholder.typicode.com/photos`)
        .then((p) =>
          setNews(p.data)
        );
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1 className="mainHeader text-red-500 text-center">
          {language === "eng"
            ? "News"
            : "Мэдээ мэдээлэл"}
        </h1>
        <div className="bg-red-500 m-auto mt-5 w-40 h-0.5"></div>
      </div>
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
        {news && news.map((e) => e.id < 10 && <div className="m-5 "><img src={e.url} alt={e.title} key={e.id} /></div>)}

      </Carousel>
    </>
  );
}
