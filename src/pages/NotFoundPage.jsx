import "../assets/css/NotFoundPage.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFoundPage() {
    return (
        <div>
            <Navbar />
            <main className="error-page">
                <div className="container-error">
                    <div className="eyes">
                        <div className="eye">
                            <div className="eye__pupil eye__pupil--left"></div>
                        </div>
                        <div className="eye">
                            <div className="eye__pupil eye__pupil--right"></div>
                        </div>
                    </div>

                    <div className="error-page__heading">
                        <h1 className="error-page__heading-title">Looks like you're lost</h1>
                        <p className="error-page__heading-description">404 error</p>
                    </div>

                    <Link className="error-page__button" to="/" aria-label="back to home" title="back to home">back to home</Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}


export default NotFoundPage;
