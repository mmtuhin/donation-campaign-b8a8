import { useEffect, useState } from "react";
import DonationPageCard from "../../components/DonationPageCard/DonationPageCard";

const Donation = () => {
    const [storedDonations, setStoredDonations] = useState([])
    const [notFound, setNotFound] = useState()
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const addedDonationList = JSON.parse(localStorage.getItem('donationList'))
        if (addedDonationList) {
            setStoredDonations(addedDonationList)
        }
        else {
            setNotFound("No Data Found")
        }
    }, [])

    const handleRemoveHistory = () => {
        localStorage.clear()
        setStoredDonations([])
        setNotFound("No Data Found")
    }
    

    console.log(storedDonations);

    return (
        <div>
            {notFound ? <p>{notFound}</p> : <div>
                {storedDonations.length > 0 && <button onClick={handleRemoveHistory}>Remove Donation History</button>}
                <div className="grid grid-cols-2 gap-4">
                    {
                        isShow? storedDonations.map(donation => <DonationPageCard key={donation.id} donation={donation}></DonationPageCard>) 
                        : 
                        storedDonations.slice(0,2).map(donation => <DonationPageCard key={donation.id} donation={donation}></DonationPageCard>)

                    }
                </div>
                {
                    storedDonations.length > 2 && <button onClick={()=>setIsShow(!isShow)}>{isShow?'See Less':'See More'}</button>
                }
            </div>}
        </div>
    );
};

export default Donation;