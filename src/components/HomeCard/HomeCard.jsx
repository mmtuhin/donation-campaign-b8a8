/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HomeCard = ({ donation }) => {
    const {id, category, category_bg_color, picture, title, card_bg_color, text_button_bg_color } = donation



    //const cardBgClass = '#122343';
    //
    return (
        <div>
            <Link to={`/donation/${id}`}>
                <div style={{ backgroundColor: `${card_bg_color}` }} className="h-full rounded-lg">
                    <img src={picture} alt="" className="rounded-t-lg"/>
                    <div className="m-4">
                        <h1 style={{ backgroundColor: `${category_bg_color}`, color: `${text_button_bg_color}` }} className="w-min text-sm font-medium py-1 px-2 mb-3 rounded">{category}</h1>
                        <h1 style={{ color: `${text_button_bg_color}` }} className="font-bold">{title}</h1>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default HomeCard;