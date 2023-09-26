import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import HomeCard from "../../components/HomeCard/HomeCard";



const HomePage = () => {
    const donations = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-10 px-4 py-10 md:px-20">
            {
                donations.map(donation => <HomeCard key={donation.id} donation={donation}></HomeCard>)
            }
            </div>
            
        </div>
    );
};

export default HomePage;