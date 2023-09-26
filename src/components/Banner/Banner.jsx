import BannerContent from "../bannerContent/BannerContent";

const Banner = ({handleOnSubmit}) => {
    return (
        <div>
            <div className="bg-white h-64 lg:h-96 relative">
                <img src="https://i.ibb.co/q1YDv0Z/banner.jpg" className="w-full h-full object-cover absolute opacity-10" />
                <div className="flex justify-center items-center h-full w-full z-10 absolute">
                   <BannerContent handleOnSubmit={handleOnSubmit}></BannerContent>
                </div>
            </div>
        </div>
    );
};

export default Banner;