import { createContext, useContext, useState } from "react";
import Calendr from "../../utils/CalenderClass";

export const MonthContext = createContext();

export const useMonth = () => useContext(MonthContext);

const MonthProvider = props => {
    const date = new Date()
    const [currentDate, setCurrentDate] = useState(new Calendr(new Date()))
    const [year, setYear] = useState(date.getFullYear())
    const [week, setWeek] = useState(currentDate.week)

    const value = {
        year, setYear,
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
