import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Donationdetailscard from "../../components/DonationDetailsCard/Donationdetailscard";


const DonationDetails = () => {
    const [donationDetails, setDonationDetails] = useState({})

    const {id} = useParams()
    //console.log(id);

    const donations = useLoaderData()
    useEffect(() => {
        const foundDonation = donations.find(donation => donation.id == id)
        setDonationDetails(foundDonation)
    },[donations, id])

    //console.log(donationDetails);
    return (
        <div className="px-4 py-10 md:px-20">
            <Donationdetailscard donationDetails={donationDetails}></Donationdetailscard>
        </div>
    );
};

export default DonationDetails;