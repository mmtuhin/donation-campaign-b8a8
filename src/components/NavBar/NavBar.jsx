import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const NavBar = () => {
    const activeDesign = ({ isActive, isPending }) => isPending ? "pending" : isActive ? "font-bold underline text-[#FF444A]" : ""
    return (
        <nav className="flex flex-col md:flex-row justify-between items-center px-4 pt-10 md:px-20">
            <Logo></Logo>
            <ul className="flex gap-5 text-lg">
                <li>
                    <NavLink
                        to="/"
                        className={activeDesign
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/donations"
                        className={activeDesign
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={activeDesign
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;