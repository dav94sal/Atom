import { useDate } from '../../context/DateContext';
import './appt-form.css'

function ApptForm({ day, hour }) {
    const { currentDate } = useDate()

    console.log(`${currentDate.year}-${day}-${currentDate.month}`)
    // Need to convert hours!

    const calculateHour = () => {
        const timeArr = hour.split(' ')

        if (timeArr[1] === 'PM') {
            timeArr[0] = parseInt(timeArr[0]) + 12
        }
        return `${timeArr[0]}:00`
    }

    return (
        <div className='form-container'>
            <form>
                <input
                    type='text'
                    placeholder='Add title'
                />
                <input
                    type='date'
                    defaultValue={`${currentDate.year}-${day}-${currentDate.month}`}
                />
                <input
                    type='time'
                    defaultValue={() => calculateHour() - 1}
                />
                <input
                    type='time'
                    defaultValue={calculateHour()}
                />
                <p>{ hour }</p>
            </form>
        </div>
    )
}

export default ApptForm;
