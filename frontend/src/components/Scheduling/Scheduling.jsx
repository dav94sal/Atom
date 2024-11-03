import { useDate } from "../../context/DateContext";
import './scheduling.css'

function Scheduling() {
    const { currentDate, week } = useDate()
    const thisWeek = currentDate.weeks[week]
    const times = currentDate.timr()

    return (
        <>
            <div className="tz"><p>TZ</p></div>
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
            <div className="time-rect">
                <div className="time-label">
                    {times.map(el => (<p key={el}>{ el }</p>))}
                </div>
                <div className="day-times">
                    {thisWeek.map((_, i) => (
                        <div className="day" key={`day${i}`}>
                            {times.map((_, j) => (
                                <div className="hour" key={`day${i}-hour${j}`}></div>
                            ))}
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Scheduling;
