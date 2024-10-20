import { useMonth } from "../../context/MonthContext";
import './scheduling.css'

function Scheduling() {
    const { today, week, month } = useMonth()
    const thisWeek = today.weeks[week]
    console.log(thisWeek)

    return (
        <>
            <div className="head-week-container">
                {thisWeek.map(day => (
                    <div className="weekday" key={`${month} ${day.day}`}>
                        <p>{ day.wkday }</p>
                        <div>{ day.day }</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Scheduling;
