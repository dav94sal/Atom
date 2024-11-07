function NotesForm() {
    return (
        <form>
            <input
                type='text'
                placeholder='Add title'
            />
            <div>
                <input
                    type='checkbox'
                    value="Mental Health"
                    id="mental-health"
                />
                <label htmlFor='mental-health'>Mental Health</label>
            </div>
            <div>
                <input
                    type='checkbox'
                    value="To-Do"
                    id="to-do"
                />
                <label htmlFor='to-do'>To-Do</label>
            </div>
            <div>
                <input
                    type='checkbox'
                    value="Reminder"
                    id="reminder"
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
