import { useState } from 'react';
import { useDate } from '../../context/DateContext';
import './appt-form.css'

function ApptForm({ day, hour }) {

    const calculateHour = (begin = false) => {
        const timeArr = hour.split(' ')

        if (timeArr[1] === 'PM') {
            timeArr[0] = parseInt(timeArr[0]) + 12
        }

        if (begin) timeArr[0]--

        if (timeArr[0] < 10) {
            timeArr[0] = `0${timeArr[0]}`
        }

        return `${timeArr[0]}:00`
    }

    const { currentDate } = useDate();
    const [title, setTitle] = useState('');
    const [startTime, setStartTime] = useState(calculateHour(true));
    const [endTime, setEndTime] = useState(calculateHour());

    const month = currentDate.month < 10 ?
    `0${currentDate.month}` : currentDate.month

    const [date, setDate] = useState(`${currentDate.year}-${month}-${day}`);

    return (
        <div className='form-container'>
            <form>
                <input
                    type='text'
                    placeholder='Add title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type='date'
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <input
                    type='time'
                    value={startTime}
                    onChange={e => setStartTime(e.target.value)}
                />
                <input
                    type='time'
                    value={endTime}
                    onChange={e => setEndTime(e.target.value)}
                />
            </form>
        </div>
    )
}

export default ApptForm;
