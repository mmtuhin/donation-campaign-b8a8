import swal from 'sweetalert';


const Donationdetailscard = ({ donationDetails }) => {
    const { id, picture, text_button_bg_color, description, title, price } = donationDetails

    const handleAddToDonation = () => {
        const addedDonationArray = []
        const addedDonationList = JSON.parse(localStorage.getItem('donationList'))
        if (!addedDonationList) {
            addedDonationArray.push(donationDetails)
            localStorage.setItem('donationList', JSON.stringify(addedDonationArray))
            swal("Good job!", "You donated!", "success");
        }
        else {
            const isExist = addedDonationList.find(item => item.id == id)
            if (!isExist) {
                addedDonationArray.push(...addedDonationList, donationDetails)
                localStorage.setItem('donationList', JSON.stringify(addedDonationArray))
                swal("Good job!", "You donated!", "success");

            }
            else{
                swal("Sorry!", "You can't donate to same program!", "error");

            }


        }

    }
    return (
        <div>
            <div className="relative">
                <img src={picture} className="w-full h-[80vh]" />
                <div className="absolute bg-black w-full py-6 bottom-0 bg-opacity-60">
                    <button onClick={handleAddToDonation} className="bg-orange-600 p-2 ml-4">Donate {price}</button>
                </div>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Donationdetailscard;