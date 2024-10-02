import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/TestimoniSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import FotoDimas from "../assets/img/dimas-pratama.jpg";
import FotoSari from "../assets/img/sari-puspita.jpg";
import FotoAnita from "../assets/img/anita-lestari.jpg";
import FotoBudi from "../assets/img/budi-raharjo.jpg";

const testimonies = [
  {
    name: "Dimas Pratama",
    username: "@dimaspratama",
    text: "The delivery service is very fast and professional. My package arrived in perfect condition and on time.",
    avatar: FotoDimas,
  },
  {
    name: "Sari Puspita",
    username: "@saripuspita",
    text: "I am impressed with the constant updates and service during the delivery.",
    avatar: FotoSari,
  },
  {
    name: "Budi Raharjo",
    username: "@budiraharjo",
    text: "Customer service is very helpful when there are issues during delivery.",
    avatar: FotoBudi,
  },
  {
    name: "Anita Lestari",
    username: "@anitalestari",
    text: "The shipping cost is affordable with a service that does not compromise on quality. Very satisfied!",
    avatar: FotoAnita,
  },
];

const renderTestimoniCard = (testimoni, index) => (
  <div
    className="card-testimoni d-flex p-3 flex-column card gap-3"
    key={index}
    style={{
      width: "18rem",
      height: "12rem", // Menambahkan tinggi yang sama untuk semua card
      backgroundColor: "#fff",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.25)",
      margin: "0 auto", // Menambahkan margin auto untuk center card
    }}
  >
    <div className="header-card d-flex gap-3 align-items-center">
      <div
        className="image-card d-flex align-items-end justify-content-center"
        style={{
          width: "55px",
          height: "55px",
          backgroundColor: "#e2e2e3",
          borderRadius: "50px",
          overflow: "hidden",
        }}
      >
        <img
          src={testimoni.avatar}
          alt="foto user testimoni"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="identitas d-flex flex-column"
        style={{ lineHeight: "0.5em" }}
      >
        <p className="fw-semibold">{testimoni.name}</p>
        <p>{testimoni.username}</p>
      </div>
    </div>
    <div className="body-card">
      <p>{testimoni.text}</p>
    </div>
  </div>
);

const CustomLeftArrow = ({ onClick }) => (
  <button
    className="carousel-control-prev"
    type="button"
    onClick={onClick}
    style={{
      background: "none",
      border: "none",
      zIndex: 1, // Menambahkan z-index untuk memastikan arrow berada di atas elemen lain
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: "0",
    }}
  >
    <FaArrowCircleLeft size={"30px"} color={"#01aa5a"} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    className="carousel-control-next"
    type="button"
    onClick={onClick}
    style={{
      background: "none",
      border: "none",
      zIndex: 1, // Menambahkan z-index untuk memastikan arrow berada di atas elemen lain
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: "0",
    }}
  >
    <FaArrowCircleRight size={"30px"} color={"#01aa5a"} />
  </button>
);

const TestimoniSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section
      className="testimoni-section pt-5 pb-5 ps-2 pe-2 ps-sm-5 pe-sm-5"
      id="testimoni"
    >
      <div className="testimoni-container container-fluid d-flex flex-column justify-content-center">
        <div className="testimoni-header text-center">
          <h2 className="fs-2 fw-bold">
            Our <span style={{ color: "#01aa5a" }}>Testimonial</span>
          </h2>
          <p className="text-center">
            These are some testimonial from our customer.
          </p>
        </div>
        <div className="testimoni-body pt-5 pb-5">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={1000}
            containerclassName="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={"desktop"}
            dotListclassName="none"
            itemclassName="carousel-item-padding-20-px"
            centerMode={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {testimonies.map((testimoni, index) =>
              renderTestimoniCard(testimoni, index)
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
