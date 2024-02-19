import React from "react";
import doubleDown from '../../assets/double-down.png'
import SwiperBlock from "../swiperBlock/swiperBlock";
import UnderSwiperBlock from "../underSwiperBlock/underSwiperBlock";
import MiddleBlock from "../middleBlock/middleBlock";
import pig from "../../assets/pigCircle.png";

import '../main/Main.css';

export default class Main extends React.Component {
    state = {};

    render() {
        return(
            <main className='mainWrapper'>
                <SwiperBlock />
                <div className='scroll'>
                    <div className='scrollWrapper'>
                        <img src={doubleDown} className='scrollArrow' alt='' />
                    </div>
                </div>
                <UnderSwiperBlock />
                <MiddleBlock />
                {/* <div className="underBlock"></div>
                <div className="contactForm">
                    <htmlFor>
                        <label htmlFor="phone">ТЕЛЕФОН:</label><br />
                        <input type="tel" id="phone" name="phone" /><br />
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" name="email" /><br />
                        <label htmlFor="message">СООБЩЕНИЕ:</label><br />
                        <textarea id="message" name="message" rows="4" cols="50"></textarea><br />
                        <input type="submit" value="Submit" />
                    </htmlFor>
                    <img className="photoPig" src={pig} alt=""></img>
                </div> */}
            </main>
        )
    }
}