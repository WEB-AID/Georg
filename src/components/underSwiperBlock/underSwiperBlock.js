import React from "react";
import photo from "../../assets/14804 — копия.png";

import '../underSwiperBlock/underSwiperBlock.css';

export default class UnderSwiperBlock extends React.Component {
    state = {};

    render() {
        return(
            <div className="divTest1">
                <div className="divTest">
                    <img className="photo1" src={photo} alt=""></img>
                    <img className="photo2" src={photo} alt=""></img>
                    <img className="photo3" src={photo} alt=""></img>
                    <img className="photo4" src={photo} alt=""></img>
                </div>
            </div>
        )
    }
}