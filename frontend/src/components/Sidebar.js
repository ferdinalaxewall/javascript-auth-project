import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoHome, IoLogOut, IoPerson, IoPricetag } from "react-icons/io5"
import { useDispatch, useSelector } from 'react-redux'
import { Logout, reset } from '../features/AuthSlice'

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const LogoutSession = () => {
        dispatch(Logout());
        dispatch(reset());
        navigate("/")
    }

  return (
    <div>
        <aside className="menu has-shadow pl-5 pt-3">
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li>
                    <NavLink to={"/dashboard"}>
                        <IoHome /> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/products"}>
                        <IoPricetag /> Products
                    </NavLink>
                </li>
            </ul>

            {user && user.role === "admin" && (
                <>
                    <p className="menu-label">
                        Administration
                    </p>
                    <ul className="menu-list">
                        <li>
                            <NavLink to={"/users"}><IoPerson /> Users</NavLink>
                        </li>
                    </ul>
                </>
            )}

            <p className="menu-label">
                Settings
            </p>

            <ul className="menu-list">
                <li>
                    <button onClick={LogoutSession} className='button is-white'><IoLogOut /> Log Out</button>
                </li>
            </ul>
        </aside>
    </div>
  )
}

export default Sidebar