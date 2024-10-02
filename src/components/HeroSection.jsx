import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/HeroSection.css";
import motor1 from "../assets/img/motor1-hero.svg";
import motor2 from "../assets/img/motor2-hero.svg";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { ButtonStyle } from "./StyledComponents";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function HeroSection() {
  const [orderId, setOrderId] = useState("");

  
  const [refHero, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animasiHero1 = useSpring({
    opacity: 1,
    transform: inView ? "translateX(0)" : "translateX(-50px)",
    config: { duration: 1000 },
  });

  const animasiHero2 = useSpring({
    opacity: 1,
    transform: inView ? "translateX(0)" : "translateX(50px)",
    config: { duration: 1000 },
  });

  const handleTrackOrder = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const loadingSwal = Swal.fire({
      title: "Tracking Order",
      text: "Please wait while we track your order...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await axios.get(`/api/auth/track/${orderId}?t=${new Date().getTime()}`);

      loadingSwal.close();

      const { order } = response.data;

      Swal.fire({
        title: "Order Details",
        html: `
          <p><b>Sender:</b> ${order.nama_pengirim}</p>
          <p><b>Recipient:</b> ${order.nama_penerima}</p>
          <p><b>From:</b> ${order.kota_asal}</p>
          <p><b>To:</b> ${order.kota_penerima}</p>
          <p><b>Status:</b> ${order.status}</p>
        `,
        confirmButtonColor: "#01aa5a",
      });

      setOrderId("");
    } catch (error) {
      console.error("Error:", error);
      loadingSwal.close();

      Swal.fire({
        icon: "error",
        title: "Failed to Track Order!",
        text: error.response
          ? error.response.data.message
          : "Failed to connect to server.",
        confirmButtonColor: "#f27474",
      });

      setOrderId("");
    }
  };

  return (
    <section className="hero d-flex align-items-center justify-content-center pb-5 pb-sm-0">
      <div className="hero-content d-flex flex-column justify-content-center align-items-center gap-2">
        <h2 className="text-center fw-bold fs-1">
          Delivering Expeditions, <br /> <span>Safely </span>and
          <span> Swiftly</span>
        </h2>
        <p className="text-center ps-5 pe-5 mx-auto">
          Track your package delivery here easily and accurately
        </p>
        <form className="track-form d-flex p-2 p-sm-3 align-items-center" onSubmit={handleTrackOrder}>
          <IoIosSearch size={35} color={"#808080"} />
          <input
            type="text"
            placeholder="Track your package now"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <ButtonStyle style={{ padding: "10px 15px" }} type="submit">
            <span className="d-none d-md-block ps-0 pe-0 ps-xl-0 pe-xl-0 ps-sm-2 pe-sm-2">Track Now</span>
            <FaArrowRightLong />
          </ButtonStyle>
        </form>
        <div className="statistik d-flex flex-wrap justify-content-center align-item-center gap-3 gap-sm-5 mt-3 pb-5 pb-sm-0">
          <div className="statistik-item lh-1 text-center">
            <p className="fs-3 fw-bold">0</p>
            <p>Customer</p>
          </div>
          <div className="statistik-item lh-1 text-center">
            <p className="fs-3 fw-bold">0</p>
            <p>Pending</p>
          </div>
          <div className="statistik-item lh-1 text-center">
            <p className="fs-3 fw-bold">0</p>
            <p>Shipping</p>
          </div>
          <div className="statistik-item lh-1 text-center">
            <p className="fs-3 fw-bold">0</p>
            <p>Delivered</p>
          </div>
        </div>
      </div>
      <div
        ref={refHero}
        className="motor container-fluid d-flex justify-content-end justify-content-sm-between position-absolute bottom-0"
      >
        <animated.div
          style={animasiHero1}
          className="motor-1 d-none d-sm-block"
        >
          <img src={motor1} alt="motor-hero-section" />
        </animated.div>
        <animated.div style={animasiHero2} className="motor-2">
          <img src={motor2} alt="motor-hero-section" />
        </animated.div>
      </div>
    </section>
  );
}

export default HeroSection;
