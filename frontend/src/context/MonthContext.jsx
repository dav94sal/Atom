import { createContext, useContext, useState } from "react";
import Calendr from "../../utils/CalenderClass";

export const MonthContext = createContext();

export const useMonth = () => useContext(MonthContext);

const MonthProvider = props => {
    const [date, setDate] = useState(new Date())
    const [year, setYear] = useState(date.getFullYear())
    const [month, setMonth] = useState(date.getMonth())
    const [today, setToday] = useState(new Calendr(new Date(), year, month))
    const [week, setWeek] = useState(today.week)
    const [currentDate, setCurrentDate] = useState(today)

    const value = {
        date, setDate,
        today, setToday,
        year, setYear,
        month, setMonth,
        week, setWeek,
        currentDate, setCurrentDate
    }

    return (
        <MonthContext.Provider value={value}>
            {props.children}
        </MonthContext.Provider>
    )
}

export default MonthProvider;
