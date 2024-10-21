import { useMonth } from "../../context/MonthContext";
import './scheduling.css'

function Scheduling() {
    const { today, week, month } = useMonth()
    const thisWeek = today.weeks[week]
    const times = today.timr()

    return (
        <>
            <div className="tz"><p>TZ</p></div>
            <div className="head-week-container">
                {thisWeek.map(day => (
                    <div className="weekday" key={`${month} ${day.day}`}>
                        <p>{ day.wkday }</p>
                        <div>{ day.day }</div>
                    </div>
                ))}
            </div>
            <div className="time-rect">
                <div className="time-label">
                    {times.map(el => (<p>{ el }</p>))}
                </div>
                <div className="day-times">
                    <p>Daytime</p>

                </div>
            </div>
        </>
    )
}

export default Scheduling;
