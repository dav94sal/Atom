import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDate } from "../../context/DateContext";
import ProfiileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import LoginFormModal from "../LoginForm";
import SignupFormModal from "../SignupForm/SignupFormModal";
import WeekButtons from "./WeekButtons";
import "./navigation.css"

function Navigation() {
    const sessionUser = useSelector(state => state.session.user)
    const { currentDate, setCurrentDate } = useDate();

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
                        onClick={() => setCurrentDate(currentDate.setToday())}
                        >Today</button>
                </div>

                <WeekButtons />

            </div>

            {sessionUser?
                <ProfiileButton user={sessionUser}/>
                : <div >
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
