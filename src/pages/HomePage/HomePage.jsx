import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import HomeCard from "../../components/HomeCard/HomeCard";



const HomePage = () => {
    const donations = useLoaderData()
    //console.log(donations);
    return (
        <div>
            <Banner></Banner>
            <h2>{donations.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                donations.map(donation => <HomeCard key={donation.id} donation={donation}></HomeCard>)
            }
            </div>
            
        </div>
    );
};

export default HomePage;