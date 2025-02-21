import TraditionalCalender from "../TraditionalCalender";
import { useDate } from "../../context/DateContext";
import { useSelector } from "react-redux";
import LandingPage from "../LandingPage";
import "./home.css";

function Home() {
    const user = useSelector(state => state.session.user)
    const { currentDate, week } = useDate();
    const thisWeek = currentDate.weeks[week];

    if (!user) return <LandingPage />

    return (
        <>
            <div className="sidebar">
                <div className="traditional-calender">
                    <TraditionalCalender />
                </div>
            </div>

            <div className="weekly-content">
                <div className="head-week-container">
                    {thisWeek.map(day => (
                        <div className="weekday" key={`${currentDate.month} ${day.day}`}>
                            <p>{ day.wkday }</p>
                            <div className={ day.class === 'active' ? 'today' : '' }>
                                { day.day }
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="time-rect">

                </div> */}
            </div>
        </>
    )
}

export default Home;
