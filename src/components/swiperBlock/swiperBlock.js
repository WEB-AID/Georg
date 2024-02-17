import React from "react";
import plant from '../../assets/plant.jpg';
import pigs from '../../assets/pigs.jpg';
import shop from '../../assets/shopPhoto.png';

import '../swiperBlock/swiperBlock.css';

export default class SwiperBlock extends React.Component {
    state = {};

    render() {
        return(
            <div className='carouselFirstBlock'>
                <swiper-container slides-per-view="1" speed="1000" loop="true" autoplay="true" delay="1">
                    <swiper-slide><img className="plantPhoto" src={plant} alt="Логотип" /></swiper-slide>
                    <swiper-slide><img className="pigsPhoto" src={pigs} alt="Телефон" /></swiper-slide>
                    <swiper-slide><img className="shopPhoto" src={shop} alt="Сообщение" /></swiper-slide>
                </swiper-container>
                {/* <div className='div1-1'>1</div> */}
            </div>   
        )
    }
}