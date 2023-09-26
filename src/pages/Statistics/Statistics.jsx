import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";


const Statistics = () => {
    const [donationListCount, setDonationListCount] = useState(0)
    const [totalDonationCount, setTotalDonationCount] = useState(0)
    const allDonation = useLoaderData()

    useEffect(()=>{
        const addedDonationList = JSON.parse(localStorage.getItem('donationList'))
        if(addedDonationList){
            setDonationListCount(addedDonationList.length)
        }
        setTotalDonationCount(allDonation.length)
    },[allDonation.length])

    const data = [
        ["Label", "Quantity"],
        ["Remaining Donation", totalDonationCount-donationListCount],
        ["My Donation", donationListCount]
    ];
    
    const options = {
        title: "My Donation Stat",
        legend: {
            position: "bottom", // Change the legend position to "bottom"
        },
        titlePosition: "out",
    };

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
};

export default Statistics;