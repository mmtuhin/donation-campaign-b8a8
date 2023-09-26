

const DonationPageCard = ({ donation }) => {
    const { id, category, picture, text_button_bg_color, description, title, price } = donation
    console.log(donation);
    return (
        <div >
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border">
                    <img
                        src={picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="">
                        {category}
                    </h6>
                    <h4 className="">
                       {title}
                    </h4>
                    <p className="">
                        {price}
                    </p>
                    <a className="inline-block" href="#">
                        <button
                            className=""
                            type="button"
                        >
                            Show Details
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonationPageCard;