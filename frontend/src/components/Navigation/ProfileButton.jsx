import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FaAtom } from "react-icons/fa6";
import { logout } from '../../store/session';

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
            <button onClick={toggleMenu}>
                <Atom />
            </button>
            <ul className={ulClassName} ref={ulRef}>
                <li>{user.username}</li>
                <li>{user.firstName} {user.lastName}</li>
                <li>{user.email}</li>
                <li>
                    <button onClick={handleLogout}>Log Out</button>
                </li>
            </ul>
        </>
    )
}

const Atom = () => {
    return (
        <div className="profile-button"
            style={{ color: '#00ddff', fontSize: '40px'}}>
            <FaAtom />
        </div>
    )
}

export default ProfiileButton;
