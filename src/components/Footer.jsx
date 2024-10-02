import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link} from "react-router-dom";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <footer className=" mt-auto">
      <div
        className="footer1 d-flex flex-column justify-content-center"
        style={{ backgroundColor: "#a0e1c3" }}
      >
        <div className="isi-footer1 d-flex flex-column flex-sm-row justify-content-around pt-4 pb-4 ps-4 pe-4 pt-lg-5 pb-lg-5 ps-lg-0 pe-lg-0">
          <div
            className="judul-deskripsi d-flex flex-column gap-3 pe-3"
          >
            <h2 className="fs-2 fw-bold">
              Febe<span style={{ color: "#01aa5a" }}>Express</span>
            </h2>
            <p className="fs-6">
              FebeExpress is a comprehensive delivery platform that provides
              fast, efficient, and reliable delivery services.
            </p>
          </div>
          <div className="menu">
            <p className="fs-5 fw-bold">About</p>
            <ul className="p-0 m-0">
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#service-section"
                >
                  Service
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#faq-section"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="menu">
            <p className="fs-5 fw-bold">Service</p>
            <ul className="p-0 m-0">
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#service-section"
                >
                  Document
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#service-section"
                >
                  Goods
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  href="#service-section"
                >
                  Cargo
                </a>
              </li>
            </ul>
          </div>
          <div className="menu">
            <p className="fs-5 fw-bold">Support</p>
            <ul className="p-0 m-0">
              <li className="mb-2 list-unstyled">
                <Link to="call-center"
                  className="text-dark text-decoration-none fw-semibold fs-6"
                  
                >
                  Call Center
                </Link>
              </li>
              <li className="mb-2 list-unstyled">
                <Link to="/support-center"
                  className="text-dark text-decoration-none fw-semibold fs-6"
                
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="footer2 d-flex justify-content-center align-items-center text-white fs-6 fw-bold p-3"
        style={{ backgroundColor: "#1e293b" }}
      >
        <p>&copy; 2024 FebeExpress | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
