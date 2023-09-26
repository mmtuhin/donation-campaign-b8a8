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
        <div className="px-4 py-10 md:px-20">
            {notFound ? <p>{notFound}</p>
                : <div>
                    <div className="text-center">
                        {storedDonations.length > 0 && <button onClick={handleRemoveHistory} className="text-center bg-sky-300 py-2 px-2 rounded font-medium my-4 hover:bg-sky-600 hover:text-white">Remove Donation History</button>}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {
                            isShow ? storedDonations.map(donation => <DonationPageCard key={donation.id} donation={donation}></DonationPageCard>)
                                :
                                storedDonations.slice(0, 2).map(donation => <DonationPageCard key={donation.id} donation={donation}></DonationPageCard>)

                        }
                    </div>
                    <div className="text-center">
                        {
                            storedDonations.length > 2 && <button className="bg-[#009444] my-8  py-3 px-6 font-semibold text-white rounded" onClick={() => setIsShow(!isShow)}>{isShow ? 'See Less' : 'See More'}</button>
                        }
                    </div>
                </div>}
        </div>
    );
};

export default Donation;