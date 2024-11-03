import { useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6"
import { useMonth } from "../../context/MonthContext";
import Calendr from "../../../utils/CalenderClass";
import "./navigation.css"

function WeekButtons () {
    const { week, setWeek,  month, setMonth, year, currentDate, setCurrentDate } = useMonth();

    useEffect(() => {
        setCurrentDate(new Calendr(new Date(), year, month))
        console.log(currentDate)
    }, [month, year, setCurrentDate])

    const handleLeft = () => {
        if (week === 1) {
            setMonth(month - 1)
            setWeek(6)
            return
        }
        setWeek(week - 1)
    }

    return (
        <>
            <div className="week-but-container">
                <button
                    className="week-but"
                    onClick={handleLeft}
                >
                    <FaAngleLeft className="select-week"/>
                </button>
                <button
                    className="week-but"
                    onClick={() => setWeek(week + 1)}
                >
                    <FaAngleRight className="select-week"/>
                </button>

                <p className="current-month">{ currentDate.stringr() }</p>

            </div>
        </>
    )
}

export default WeekButtons;
