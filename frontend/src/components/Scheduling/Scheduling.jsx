import { useDate } from "../../context/DateContext";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import ApptForm from "../AppointmentForm"
import './scheduling.css'

function Scheduling() {
    const { currentDate, week } = useDate()
    const thisWeek = currentDate.weeks[week]
    const times = currentDate.timr()
    // console.log(thisWeek)

    return (
        <>
            <div className="head-week-container">
                <div className="tz"><p>TZ</p></div>
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
                    {thisWeek.map((day, i) => (
                        <div className="day" key={`day${i}`}>
                            {times.map((hour, j) => (
                                <div className="hours" key={`day${i}-hour${j}`}>
                                    <OpenModalButton
                                        modalComponent={
                                            <ApptForm day={day.day} hour={hour}/>
                                        }
                                        buttonText=''
                                        htmlClass='hour-button'
                                    />
                                </div>
                            ))}
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Scheduling;
