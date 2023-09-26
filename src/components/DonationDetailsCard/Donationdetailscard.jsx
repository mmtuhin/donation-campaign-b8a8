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
            <div className="relative mt-16">
                <img src={picture} className="w-full h-[80vh] rounded-lg" />
                <div className="absolute bg-black w-full py-6 bottom-0 bg-opacity-60 rounded-lg">
                    <button style={{backgroundColor:`${text_button_bg_color}`}} onClick={handleAddToDonation} className="text-white py-4 px-6 ml-4 font-semibold rounded">Donate {price}</button>
                </div>
            </div>
            <h1 className='text-4xl font-bold text-black mt-12'>{title}</h1>
            <p className='mt-4 mb-24'>{description}</p>
        </div>
    );
};

export default Donationdetailscard;