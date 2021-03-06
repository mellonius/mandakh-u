import React from "react";
import './mendchilgee.css';


function HomeMendchilgee() {

    const [header] = React.useState({
        subHeader: "Захирлын Мэндчилгээ",
    });
    const [state] = React.useState([
        { id: 1, title: "Name:", text: "Jonathan Doe" },
        { id: 2, title: "Email:", text: "example@domain.com" },
        { id: 3, title: "Phone:", text: "+1 023 454 345" },
        { id: 4, title: "Linkedin", text: "Jonathan_123" },

    ]);
    return (
        <div className="about dark:text-white text-gray-800 h-full">
            <div className="container dark:text-white text-gray-800 h-full ">
                <div className="common dark:text-white text-gray-800 h-full">
                    <h1 className="mainHeader dark:text-white text-gray-800 h-full">{header.subHeader}</h1>
                    <div className="commonBorder"></div>
                </div>

                <div className="about__info-p2">
                    <img src="/images/zahiral.jpg" alt="man" className="float-left h-64 p-3" />
                    <p className="clear-none">1992 онд гал голомтоо бадрааж, Монгол улсын дээд боловсролын салбарт өөрчлөлт, шинэчлэлтийн он жилүүдтэй хөл нийлүүлэн хөгжиж ирсэн Мандах Их  Сургуулиар овоглосон нийт төгсөгчид, оюутан залуус, эрдэмтэн багш, ажилтнууд биднийг үргэлж дэмжиж, тусалж хамтран ажиллаж ирсэн байгууллагууд, хамт олон, хувь хүмүүс, түншлэгч нартаа чин сэтгэлээсээ талархаж буйгаа илэрхийлье.
                    2017 оны 8 дугаар сарын 1-ээс эхлэн манай сургууль “Их сургууль”-ийн ангилалд орж, бид бүхний 25 жилийн шаргуу хөдөлмөрийн үр дүнд эрдэм шинжилгээ-сургалт эрхэлсэн “Их сургууль”-ийн ангилалд багтсан билээ.
                    Туулж ирсэн  өндөрлөгөөс харахад манай сургууль олон сайхан бахархах, тэмдэглэх зам мөрийг Монгол улсын Дээд боловсролын болон Бүртгэл санхүүгийн салбарт үлдээж иржээ.
                    Бид байгуулагдсан үеэсээ “Нягтлан бодогч” гэдэг чухал, хариуцлагатай сайхан мэргэжлийг байх ёстой байр сууринд нь хүргэх, өнөөгийн нийгмийн шаардлага, шалгуурыг хангасан мэргэжилтэн бэлтгэх, Монгол улсад нягтлан бодох бүртгэлийн шинэ тогтолцоог төлөвшүүлэхэд зохих хувь нэмэр оруулах зорилгыг дэвшүүлэн тавьж,  сэтгэл зүтгэл нэгтэй хамт олон, төрийн болон төрийн бус байгууллагууд, мэргэжил нэгт нөхдийн дэмжлэг дор тодорхой үр дүнд хүрсээр ирсэн билээ.
                    Мандах Их Сургууль нь нийгмийн болон ажил олгогчдын хэрэгцээ, шаардлага, зах зээлд эрэлттэй мэргэжлүүд болох мэдээллийн технологи, програм хангамж (2006 оноос элсэлт авч, 2018 онд бүрэлдэхүүн сургууль болсон), Санхүү, Банк (2014 оноос), инженер-эдийн засаг, логистик менежмент, график дизайн, компьютерийн сүлжээ, гадаад хэлний орчуулагч (2018 оноос), бизнесийн удирдлага, маркетингийн менежмент  (2020 оноос) зэрэг чиглэлээр бакалавр, магистр, докторын түвшний сургалт, судалгаа явуулж байна.
                    Өдгөө манай сургууль олон улсад болон үндэсний хэмжээнд магадлан итгэмжлэгдсэн их сургууль болон хөгжиж байна. Нийгмийн олон салбарт төгсөгчид маань нэр төртэй хөдөлмөрлөж, суралцаж буй оюутнууд маань сурлага, спорт, урлагийн амжилт бүтээл арвинтай байж, сургуулийнхаа нэр хүндийг өндөрт өргөж явдагт нь бид бүхэн талархалтай байдаг билээ.
                                Манай нэрийн хуудас болсон төгсөгчдийн 90 шахам хувь нь тодорхой ажил эрхэлж, олон зуун төгсөгчид салбартаа хариуцлагатай алба хашиж, олон арван төгсөгчид өндөр хөгжилтэй орнуудад магистр, докторын сургалтанд суралцаж, бас зарим төгсөгчид тухайн орны мэргэшсэн нягтлан бодогчийн эрх авч, үндэстэн дамнасан компаниудад мэргэжлээрээ амжилттай ажиллаж байгаад нь бид бахархаж байна..</p>

                </div>
                <div className="info__contacts dark:text-white text-gray-800 h-full">
                    <div className="row">
                        {state.map((info) => (
                            <div className="col-6 dark:text-white text-gray-800 h-full"  key={info.id}>
                                <strong>{info.title}</strong>
                                <p>{info.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeMendchilgee