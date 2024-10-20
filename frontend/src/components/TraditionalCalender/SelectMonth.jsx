import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useMonth } from "../../context/MonthContext";

function SelectMonth() {
    const { month, setMonth } = useMonth
    return (
        <>
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
        </>
    )
}

export default SelectMonth;
