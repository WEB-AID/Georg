import React from "react";
import photo from "../../assets/14804 — копия.png";

import '../underSwiperBlock/underSwiperBlock.css';

export default class UnderSwiperBlock extends React.Component {
    state = {};

    render() {
        return(
            <div className="aboutUsBlock">
                <div className="aboutUsBlockWrapper">
                    <div className="text1">Качество выпускаемой<br></br>продукции сертифицированно<br></br> ISO 22000 и является лидером<br></br>на Грузинском рынке</div>
                    <div className="text2">Корм для поголовья<br></br>изготавливается исключительно<br></br>из органических компонентов</div>
                    <div className="text3">Процессы внутри компании<br></br>построены таким образом<br></br>что бы развитие происходило<br></br>ежедневно 24 на 7</div>
                    <div className="text4">Генетический фонд нашего<br></br>поголовья берет своё начало<br></br>в Дании и является<br></br>лидером свиноводства</div>
                    {/* <img className="photo1" src={photo} alt=""></img>
                    <img className="photo2" src={photo} alt=""></img>
                    <img className="photo3" src={photo} alt=""></img>
                    <img className="photo4" src={photo} alt=""></img> */}
                </div>
            </div>
        )
    }
}