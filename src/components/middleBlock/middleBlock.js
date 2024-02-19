import React from "react";

import '../middleBlock/middleBlock.css';

export default class MiddleBlock extends React.Component {
    state = {};

    render() {
        return(
            <div className="middleBlock">
                <div className="middleBlockText">
                    AAA
                </div>
                <div className="googleMap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11959.540295261131!2d44.4499325!3d41.4634079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4043ebd82be195af%3A0xd092e196efa6c56a!2z0JDQutCw0YPRgNGC0LAsINCT0YDRg9C30LjRjw!5e0!3m2!1sru!2sua!4v1708358879530!5m2!1sru!2sua"
                        title="Google maps"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }} // Объект стиля
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        )
    }
}