import React from "react";

import '../underSwiperBlock/underSwiperBlock.css';

export default class UnderSwiperBlock extends React.Component {
    state = {};

    render() {
        return(
            <div className="aboutUsBlock">
                <div className="aboutUsBlockWrapper">
                    <div className="text1">
                        <div className="text1_1">
                            Качество выпускаемой<br></br>продукции сертифицированно<br></br> ISO 22000 и является лидером<br></br>на Грузинском рынке
                        </div>
                    </div>
                    <div className="text2">
                        <div className="text2_1">
                            Корм для поголовья<br></br>изготавливается исключительно<br></br>из органических компонентов
                        </div>
                    </div>
                    <div className="text3">
                        <div className="text3_1">
                            Процессы внутри компании<br></br>построены таким образом<br></br>что бы развитие происходило<br></br>ежедневно 24 на 7
                        </div>
                    </div>
                    <div className="text4"> 
                        <div className="text4_1">
                            Генетический фонд нашего<br></br>поголовья берет своё начало<br></br>в Дании и является<br></br>лидером свиноводства
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}