import React from "react";
import doubleDown from '../../assets/double-down.png'
import SwiperBlock from "../swiperBlock/swiperBlock";
import UnderSwiperBlock from "../underSwiperBlock/underSwiperBlock";
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
                        <img src={doubleDown} className='scroll1' alt='' />
                    </div>
                </div>
                {/* <UnderSwiperBlock /> */}
                {/* <div className="middleBlock">
                    <div className="middleBlockText">
                        AAA123543453
                    </div>
                    <div className="googleMap">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.509401055734!2d3.899177714266419!3d43.607463422015665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA1JzMzLjkiTiAzwrAzMic1MS4wIlc!5e0!3m2!1sen!2sus!4v1644964482279!5m2!1sen!2sus"
                            width="200"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
                <div className="underBlock"></div>
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