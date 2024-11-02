import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6"
import { useMonth } from "../../context/MonthContext";
import "./navigation.css"

function WeekButtons () {
    const { week, setWeek,  month, setMonth } = useMonth();

    const handleLeft = () => {
        if (week === 1) {
            setMonth(month - 1)
            setWeek(6)
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
            </div>
        </>
    )
}

export default WeekButtons;
