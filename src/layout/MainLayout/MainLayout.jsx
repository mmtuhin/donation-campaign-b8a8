import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";


const MainLayout = () => {
    return (
        <div >
            <NavBar ></NavBar>
            <Outlet className="px-4 py-10 md:px-20"></Outlet>
        </div>
    );
};

export default MainLayout;