/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HomeCard = ({ donation }) => {
    const {id, category, category_bg_color, picture, title, card_bg_color, text_button_bg_color } = donation



    //const cardBgClass = '#122343';
    //
    return (
        <div>
            <Link to={`/donation/${id}`}>
                <div style={{ backgroundColor: `${card_bg_color}` }} className="h-full">
                    <img src={picture} alt="" />
                    <div>
                        <h1>{category}</h1>
                        <h1>{title}</h1>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default HomeCard;