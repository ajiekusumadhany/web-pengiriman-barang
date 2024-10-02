import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/BenefitSection.css";
import ImageBenefit from "../assets/img/image-benefit.svg";
import { IoMdCheckmarkCircle } from "react-icons/io";
// import { useSpring, animated } from 'react-spring';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function BenefitCard({ benefit, index }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animasiBenefit = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1200 },
    delay: index * 200
  });

  return (
    <animated.div ref={ref} style={animasiBenefit} className="card-benefit d-flex gap-1">
      <IoMdCheckmarkCircle size={"30px"} color={"#01aa5a"} />
      <p className="fw-semibold fs-5">{benefit}</p>
    </animated.div>
  );
}

function BenefitSection() {

  const benefits = [
    "Fast and Reliable Delivery",
    "Secure Shipments",
    "Wide Coverage Area",
    "Excellent Customer Support",
    "Multiple Delivery Options",
    "Affordable Rates"
  ];

  return (
    <section className="benefit container-fluid pt-5 pb-5  d-flex align-items-center">
      <div className="benefit-container container-fluid d-flex flex-column flex-lg-row justify-content-beetwen">
        <div className="benefit-content col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center order-2 order-lg-1 pt-5 pb-1 ">
          <div className="header-content text-center">
            <h2 className="fs-2 fw-bold">
              Our <span>Benefit</span>
            </h2>
            <p>Discover some of the benefits of choosing us</p>
          </div>
          <div className="body-content d-flex flex-wrap ps-sm-5 pe-sm-5 pt-4 pb-4 gap-4  gap-sm-3 justify-content-center">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
        <div className="benefit-image col-12 col-lg-4 d-flex justify-content-center order-1 order-lg-2 pt-5">
          <img src={ImageBenefit} alt="benefit section" className="image-benefit" />
        </div>
      </div>
    </section>
  );
}

export default BenefitSection;
