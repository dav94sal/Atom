import './appt-form.css'

function ApptForm({ day, hour }) {

    // Need to convert hours!

    return (
        <>
            <h2>Appointment Form!</h2>
            <p>{ day }</p>
            <p>{ hour }</p>
        </>
    )
}

export default ApptForm;
