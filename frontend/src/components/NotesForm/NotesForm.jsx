import { useEffect, useState } from "react";

function NotesForm() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        console.log(type)
    }, [type])

    return (
        <form>
            <input
                type='text'
                placeholder='Add title'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <div>
                <input
                    type='radio'
                    id="mental-health"
                    name="type"
                    value='Mental-Health'
                    onChange={e => setType(e.target.value)}
                />
                <label htmlFor='mental-health'>Mental Health</label>
            </div>
            <div>
                <input
                    type='radio'
                    id="to-do"
                    name="type"
                    value=''
                    onChange={e => setType(e.target.value)}
                />
                <label htmlFor='to-do'>To-Do</label>
            </div>
            <div>
                <input
                    type='radio'
                    id="reminder"
                    name="type"
                    value=''
                    onChange={e => setType(e.target.value)}
                />
                <label htmlFor='reminder'>Reminder</label>
            </div>
            <textarea
                placeholder="Add notes"
            />
        </form>
    )
}

export default NotesForm;
