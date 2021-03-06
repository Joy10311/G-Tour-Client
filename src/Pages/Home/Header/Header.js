import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth/UseAuth';
import logo from '../../../images/logo@2x_white.png'

const Header = () => {
    const { user, logOut, } = useAuth();
    return (
        <div>
            <nav className="bg-green-600 text-white  text-xl font-medium ">
                <Link to="/home"><img className="pt-5" src={logo} alt="" /></Link>
                <div className="mb-10  text-center pb-7 pt-5">
                    <Link className="mx-10 lg:inline block" to="/home">Home</Link>
                    <Link className="mx-10 lg:inline block" to="/tours">Tours</Link>
                    <Link className="mx-10 lg:inline block" to="/guides">Guides</Link>
                    {user?.email ?
                        <Link className="mx-10 lg:inline block" to="/myOrder">My Order</Link>
                        : ''
                    }
                    {user?.email ?
                        <Link className="mx-10 lg:inline block" to="/allOrders">Manage All Orders</Link>
                        : ''
                    }

                    {user?.email ?
                        <Link className="mx-10 lg:inline block" to="/addnew">Add New Service</Link>
                        : ''
                    }
                    <Link className="mx-10 lg:inline block" to="/about">About Us</Link>


                    {user?.email ?
                        <button onClick={logOut} className="bg-blue-300 text-base rounded px-1 py-1 mr-2">Log Out</button> :
                        <Link className="mx-10 lg:inline block" to="/login">Log In</Link>}
                    <Link to="" className="text-red-700"> {user?.displayName}</Link>

                </div>
            </nav>
        </div>
    );
};

export default Header;