import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";


const Header = ({handleOnSubmit}) => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
                <Banner handleOnSubmit={handleOnSubmit}></Banner>
            </div>
            
        </div>
    );
};

export default Header;