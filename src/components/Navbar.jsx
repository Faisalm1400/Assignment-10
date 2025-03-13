import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
 console.log(user);
    const links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/allCampaign'}>All Campaign</Link></li>
        <li><Link to={'/addNewCampaign'}>Add New Campaign</Link></li>
        <li><Link to={'/myCampaigns'}>My Campaign</Link></li>
        <li><Link>My Donations</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">

                <div>
                    {
                        user && user ?
                            (<>
                                <div className="dropdown dropdown-hover dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li>
                                            <a className="justify-between">
                                            {user.displayName}
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><Link onClick={logOut}>Logout</Link ></li>
                                    </ul>
                                </div>
                            </>)
                            :
                            (<>
                                <Link to={"/auth/login"} className="btn">Login</Link>
                                <Link to={"/auth/register"} className="btn">Register</Link>
                            </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;