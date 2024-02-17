import React from "react";
import logo from '../../assets/logoMain.png';
import phone from '../../assets/phone.png';
import message from '../../assets/email.png';

import '../header/Header.css';

export default class Header extends React.Component {
    state = {};

    render() {
        return(
            <header className="appHeader">
                <img src={logo} className='headerLogo' alt='' />
                <div className="headerMenuWrapper">
                    <ul className="headerMenuList">
                        <li>მთავარი</li>
                        <li>პროდუქტები</li>
                        <li>ჩვენს შესახებ</li>
                        <li>კონტაქტები</li>
                    </ul>
                </div>
                <div className="headerSideWrapper">
                    <button>
                        <img className="phone" src={phone} alt="Phone" />
                    </button>
                    <button>
                        <img className="message" src={message} alt="Message" />
                    </button>
                </div>
            </header>
        )
    }
}