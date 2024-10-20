import TraditionalCalender from "../TraditionalCalender"
import Scheduling from "../Scheduling/Scheduling";
import "./home.css";

function Home() {
    return (
        <>
            <div className="sidebar">
                <div className="traditional-calender">
                    <TraditionalCalender />
                </div>
            </div>
            <div className="scheduling">
                <Scheduling />
            </div>
        </>
    )
}

export default Home;
