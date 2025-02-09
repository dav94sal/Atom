import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDate } from "../../context/DateContext";
import ProfiileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import LoginFormModal from "../LoginForm";
import SignupFormModal from "../SignupForm/SignupFormModal";
import WeekButtons from "./WeekButtons";
import NotesForm from "../NotesForm/NotesForm";
import "./navigation.css"

function Navigation() {
    const sessionUser = useSelector(state => state.session.user)
    const { currentDate, setCurrentDate, setWeek } = useDate();

    const handleClick = () => {
        const today = currentDate.setToday()
        setCurrentDate(today)
        setWeek(today.week)
    }

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
                        onClick={handleClick}
                        >Today</button>
                </div>

                <WeekButtons />

            </div>

            {sessionUser?
                <div className="user-actions">
                    <OpenModalButton
                        modalComponent={<NotesForm />}
                        buttonText="New Note"
                        htmlClass="note-button"
                    />
                    <ProfiileButton user={sessionUser}/>
                </div>
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
