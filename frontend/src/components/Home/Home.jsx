import TraditionalCalender from "../TraditionalCalender"
import "./home.css";

function Home() {
    return (
        <>
            <div className="sidebar">
                <h1>What&apos;s the name?</h1>
                <div className="traditional-calender">
                    <TraditionalCalender />
                </div>
            </div>
        </>
    )
}

export default Home;
