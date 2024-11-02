import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useMonth } from "../../context/MonthContext";
import ProfiileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import LoginFormModal from "../LoginForm";
import SignupFormModal from "../SignupForm/SignupFormModal";
import WeekButtons from "./WeekButtons";
import "./navigation.css"

function Navigation() {
    const sessionUser = useSelector(state => state.session.user)
    const { currentDate, setCurrentDate, week, setWeek } = useMonth();

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
                        onClick={() => setCurrentDate(CurrentDate)}
                        >Today</button>
                </div>

                <WeekButtons />

                <p className="current-month">{ currentDate.stringr() }</p>
            </div>

            {sessionUser? <ProfiileButton user={sessionUser}/> :
                <div >
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
