import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FaAtom } from "react-icons/fa6";
import { logout } from '../../store/session';
import "./profile.css"

function ProfiileButton({ user }) {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const ulRef = useRef();

    useEffect(() => {
        if (!showMenu) return

        const closeMenu = e => {
            if (ulRef.current && !ulRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const toggleMenu = (e) => {
        e.stopPropagation(); // Keep click from bubbling up to document and triggering closeMenu
        setShowMenu(!showMenu);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

    return (
        <>
            <button
                onClick={toggleMenu}
                className='profile-but'
            >
                <Atom />
            </button>
            <ul className={ulClassName} ref={ulRef}>
                <li className='li-drop'><p>{user.email}</p></li>
                <li className='logo-container li-drop'>
                    <img
                        className="logo"
                        src="https://i.ibb.co/pbJS9hp/rm373batch15-element-02.jpg"
                        alt="rm373batch15-element-02"
                    />
                </li>
                <li className='li-drop'><h3>Hi, {user.firstName}!</h3></li>
                <li className='li-drop'>
                    <button
                        onClick={handleLogout}
                        className='logout-but'
                    >
                        Log Out
                    </button>
                </li>
            </ul>
        </>
    )
}

const Atom = () => {
    return (
        <div className="atom"
            style={{ color: '#00ddff', fontSize: '40px',  display: 'flex'}}>
            <FaAtom />
        </div>
    )
}

export default ProfiileButton;
