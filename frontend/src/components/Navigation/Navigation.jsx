import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useMonth } from "../../context/MonthContext";
import ProfiileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import LoginFormModal from "../LoginForm";
import SignupFormModal from "../SignupForm/SignupFormModal";
import "./navigation.css"

function Navigation() {
    const sessionUser = useSelector(state => state.session.user)
    const { today, setCurrentDate } = useMonth();

    return (
        <>
            <div className="left-nav">
                <div className="logo-container">
                    <NavLink to="/">
                        <img
                            className="logo"
                            src="https://i.ibb.co/pbJS9hp/rm373batch15-element-02.jpg"
                            alt="rm373batch15-element-02"
                        />
                    </NavLink>
                </div>
                <NavLink to="/">
                    <p className="title">Atom</p>
                </NavLink>

                <div className="today-but-container">
                    <button
                        className="today-but"
                        onClick={() => setCurrentDate(today)}
                        >Today</button>
                </div>

                <div className="week-but-container">
                    <button
                        className="week-but"
                        // onClick={() => setMonth(month - 1)}
                        >
                        <FaAngleLeft className="select-week"/>
                    </button>
                    <button
                        className="week-but"
                        // onClick={() => setMonth(month + 1)}
                        >
                        <FaAngleRight className="select-week"/>
                    </button>
                </div>

                <p className="current-month">{ today.stringr() }</p>
            </div>

            {sessionUser? <ProfiileButton user={sessionUser}/> :
                <div className="login-signup-buttons">
                    <OpenModalButton
                        modalComponent={<LoginFormModal />}
                        buttonText="Log In"
                    />
                    <OpenModalButton
                        modalComponent={<SignupFormModal />}
                        buttonText="Sign Up"
                    />
                </div>
            }

        </>
    )
}

export default Navigation;
