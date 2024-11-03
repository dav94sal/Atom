import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6"
import { useDate } from "../../context/DateContext";
import Calendr from "../../../utils/CalenderClass";
import "./navigation.css"

function WeekButtons () {
    const { week, setWeek, year, currentDate, setCurrentDate } = useDate();
    const [month, setMonth] = useState(currentDate.month);
    const [indicator, setIndicator] = useState(currentDate.stringr())

    useEffect(() => {
        setCurrentDate(new Calendr(new Date(year, month)));
    }, [month, year, setCurrentDate])

    useEffect(() => {
        setIndicator(currentDate.stringr());
    }, [currentDate]);

    const handleLeft = () => {
        if (week === 2) {
            setMonth(month - 1)
            setWeek(5)
            return
        }

        setWeek(week - 1)
    }

    const handleRight = () => {
        if (week === 5) {
            setMonth(month + 1)
            setWeek(2)
            return
        }

        setWeek(week + 1)
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
                    onClick={handleRight}
                >
                    <FaAngleRight className="select-week"/>
                </button>

                <p className="current-month">{ indicator }</p>

            </div>
        </>
    )
}

export default WeekButtons;
