

const DonationPageCard = ({ donation }) => {
    const { category,category_bg_color,card_bg_color, picture, text_button_bg_color, title, price } = donation
    return (
        <div >
            <div style={{ backgroundColor: `${card_bg_color}` }} className="relative flex w-full flex-row rounded-xl ">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border">
                    <img
                        src={picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 style={{ backgroundColor: `${category_bg_color}`, color: `${text_button_bg_color}` }} className="w-min text-sm font-medium py-1 px-2 mb-3 rounded">
                        {category}
                    </h6>
                    <h4 className="text-black text-lg md:text-2xl font-semibold my-2">
                       {title}
                    </h4>
                    <p style={{color: `${text_button_bg_color}` }} className="font-semibold mb-4">
                        {price}
                    </p>
                    <a className="inline-block" href="#">
                        <button 
                            style={{ backgroundColor: `${text_button_bg_color}` }}
                            className="text-white px-2 md:px-4 py-1 md:py-2 text-lg font-semibold rounded"
                            type="button"
                        >
                            View Details
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonationPageCard;