import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import HomeCard from "../../components/HomeCard/HomeCard";
import { useEffect, useState } from "react";



const HomePage = () => {
    const donations = useLoaderData()
    const [donationForDisplay, setDonationForDisplay] = useState(donations)
    const [searchText, setSearchText] = useState("")
    //console.log(donationForDisplay);
    const handleOnSubmit = e => {
        e.preventDefault()
        setSearchText(e.target.search.value);
        // if(searchText){
        //     const filteredItems = donations.filter(item => item.category.toLowerCase().includes(searchText))
        //     if(filteredItems.length > 0){
        //         setDonationForDisplay(filteredItems)
        //     }
        // }
        
       
    }
    useEffect(() => {
        if (searchText) {
            const filteredItems = donations.filter(item => item.category.toLowerCase().includes(searchText.toLowerCase()));
            setDonationForDisplay(filteredItems);
           // console.log(filteredItems); 
        } else {
            // If searchText is empty, reset the display to all donations
            setDonationForDisplay(donations);
        }
    }, [searchText, donations]);
    console.log(donationForDisplay);
    
    

    return (
        <div>
            <Banner handleOnSubmit={handleOnSubmit}></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-10 px-4 py-10 md:px-20">
            {
                donationForDisplay.map(donation => <HomeCard key={donation.id} donation={donation}></HomeCard>)
            }
            </div>
            
        </div>
    );
};

export default HomePage;