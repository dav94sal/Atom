import { createContext, useContext, useState } from "react";
import Calendr from "../../utils/CalenderClass";

export const MonthContext = createContext();

export const useMonth = () => useContext(MonthContext);

const MonthProvider = props => {
    const [today, setToday] = useState(new Date())
    const [year, setYear] = useState(today.getFullYear())
    const [month, setMonth] = useState(today.getMonth())
    const [currentDate, setCurrentDate] = useState(new Calendr(today, year, month))

    const value = {
        today, setToday,
        year, setYear,
        month, setMonth,
        currentDate, setCurrentDate
    }

    return (
        <MonthContext.Provider value={value}>
            {props.children}
        </MonthContext.Provider>
    )
}

export default MonthProvider;
