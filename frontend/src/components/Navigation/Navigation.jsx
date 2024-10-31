import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useMonth } from "../../context/MonthContext";
import ProfiileButton from "./ProfileButton";
import "./navigation.css"

function Navigation() {
    const sessionUser = useSelector(state => state.session.user)
    const { today, setCurrentDate } = useMonth();

    const navigate = useNavigate()

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
                    <p className="title">Calendr</p>
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

            {sessionUser? <ProfiileButton /> :
                <div className="login-signup-buttons">
                    <button onClick={() => navigate('/login')}>Login</button>
                    <button onClick={() => navigate('/signup')}>Signup</button>
                </div>
            }

        </>
    )
}

export default Navigation;
