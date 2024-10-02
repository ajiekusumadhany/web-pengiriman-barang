import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/AboutSection.css";
import ImageAbout from "../assets/img/image-about.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { ButtonStyle } from "./StyledComponents";
// import { useSpring, animated } from 'react-spring';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';


function AboutSection() {

  const [refAbout, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  const animasiAbout = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 1000 }
  });

  return (
    <section
      className="about container-fluid ps-3 pe-3 ps-sm-5 ps-sm-5 d-flex flex-column flex-lg-row pt-3 pb-5 pb-lg-0 justify-content-between align-items-center gap-5"
      id="about"
    >
      <div className="image-about ps-3 pe-3 ps-sm-1 pe-sm-1 ps-lg-5 pe-lg-5 col-12 col-lg-4 d-flex justify-content-center">
        <img src={ImageAbout} alt="about" />
      </div>
      <div className="content-about d-flex  justify-content-center pb-sm-3  pt-sm-3 align-items-center ps-2  col-12 col-lg-6">
        <div className="content-container d-flex flex-column gap-3 ">
        <animated.div ref={refAbout} style={animasiAbout}>
        <h2 className="fs-2 fw-bold">
          <span>About</span> Us
        </h2>
        <p>
          We are a leading parcel delivery service provider that prioritizes
          speed, security, and convenience in every delivery process. With
          advanced technology and a wide-reaching network, we ensure your items
          arrive at their destination on time and in perfect condition.
        </p>
        <div className="button-container">
          <ButtonStyle
            style={{ padding: "10px 25px" }}
            className="button-about"
            onClick={() => (window.location.href = "/support-center")}
          >
            Support <FaArrowRightLong />
          </ButtonStyle>
        </div>
        </animated.div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
