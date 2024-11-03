import { createContext, useContext, useState } from "react";
import Calendr from "../../utils/CalenderClass";

export const DateContext = createContext();

export const useDate = () => useContext(DateContext);

const DateProvider = props => {
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
        <DateContext.Provider value={value}>
            {props.children}
        </DateContext.Provider>
    )
}

export default DateProvider;
