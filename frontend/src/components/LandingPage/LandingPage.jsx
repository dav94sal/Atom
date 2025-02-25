import { BsArrowDown } from "react-icons/bs";
import OpenModalButton from "../OpenModalButton/OpenModalButton"
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm"
import "./landing-page.css"

function LandingPage() {
    return (
        <div className="landing-grid">
            <section className="sec-1-welcome"> {/* Welcome */}
                <div className="welcome card">
                    <h2>Welcome to Atom!</h2>
                    <p>Your personal organizational tool.</p>
                    <div className="center-flex">
                        <OpenModalButton
                            modalComponent={<LoginForm />}
                            buttonText="Get Started"
                            htmlClass="modal-but wide-but"
                            />
                    </div>
                    <p className="center-flex">
                        <span>
                            <OpenModalButton
                                modalComponent={<LoginForm />}
                                buttonText="Login"
                                />
                        </span>
                        <span>
                            <OpenModalButton
                                modalComponent={<SignupForm />}
                                buttonText="Signup"
                                />
                        </span>
                    </p>
                </div>

                <div className="center-flex flex-col">
                    <h2 className="text-white margin-right">
                        Keep track of life with Atom&apos;s intuitive calendar
                    </h2>
                    <p className="text-white arrow">
                        <BsArrowDown />
                    </p>
                </div>
            </section>
            <section className="sec-2-calender center-flex text-white">
                <div className="center-flex">
                    <img src="/public/android-chrome-192x192.png" />
                    {/* <p>Atom</p> */}
                </div>
            </section>
        </div>

    )
}

export default LandingPage;
