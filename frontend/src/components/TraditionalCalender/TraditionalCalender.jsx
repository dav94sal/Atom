import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useMonth } from "../../context/MonthContext";
import Calendr from "../../../utils/CalenderClass";
import "./traditional-calender.css"

function TraditionalCalender() {
    const { currentDate, year } = useMonth();
    const [currentCal, setCurrentCal] = useState(currentDate)
    const [month, setMonth] = useState(currentCal.month);

    useEffect(() => {
        const newDate = new Calendr(new Date(year, month))
        setCurrentCal(newDate)
    }, [currentDate, month, setCurrentCal, year])

    useEffect(() => {
        setMonth(currentDate.month)
    }, [currentDate.month, setMonth])

    return(
        <>
            <div className="month">
                <div>{currentCal.stringr()}</div>
                <div>
                    <button
                        className="month-but"
                        onClick={() => setMonth(month - 1)}
                    >
                        <FaAngleLeft className="select-month back-but"/>
                    </button>
                    <button
                        className="month-but"
                        onClick={() => setMonth(month + 1)}
                    >
                        <FaAngleRight className="select-month"/>
                    </button>
                </div>
            </div>
            <ul className="days">
                <li scope="col" className="inactive">S</li>
                <li scope="col" className="inactive">M</li>
                <li scope="col" className="inactive">T</li>
                <li scope="col" className="inactive">W</li>
                <li scope="col" className="inactive">T</li>
                <li scope="col" className="inactive">F</li>
                <li scope="col" className="inactive">S</li>
            </ul>
            <ul className="days">
                {currentCal.calendr.map((el, i) => {
                    return <li className={el.class} key={i}>{ el.day }</li>
                })}
            </ul>
        </>
    )
}

export default TraditionalCalender;
