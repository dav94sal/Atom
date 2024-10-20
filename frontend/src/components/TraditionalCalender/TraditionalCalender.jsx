import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useMonth } from "../../context/MonthContext";
import "./traditional-calender.css"

function TraditionalCalender() {
    const { currentDate, year, month } = useMonth()

    const handleClick = e => {
        
    }

    return(
        <>
            <div className="month">
                <div>{`${currentDate.months[month]} ${year}`}</div>
                <div>
                    <button
                        className="month-but"
                        onClick={handleClick}
                    >
                        <FaAngleLeft className="select-month back-but"/>
                    </button>
                    <button
                        className="month-but"
                        onClick={handleClick}
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
                {currentDate.calendr.map((el, i) => {
                    return <li className={el.class} key={i}>{ el.day }</li>
                })}
            </ul>
        </>
    )
}

export default TraditionalCalender;
