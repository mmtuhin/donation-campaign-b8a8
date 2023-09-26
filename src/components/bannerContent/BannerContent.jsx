

const BannerContent = ({handleOnSubmit}) => {
    
    return (

        <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold">I Grow By Helping People In Need</h1>
            <div className="p-2 md:p-4">
                <form onSubmit={handleOnSubmit}>
                    <input className="border-1 py-2 px-1 md:px-6 rounded-l-lg border border-solid border-black" type="text" name="search" placeholder="Search here...." />
                    <button type="submit" className="bg-[#FF444A] py-2 px-1 md:px-6 rounded-r-lg border border-solid border-[#FF444A] text-white font-semibold">Search</button>
                </form>

            </div>

        </div>

    );
};

export default BannerContent;