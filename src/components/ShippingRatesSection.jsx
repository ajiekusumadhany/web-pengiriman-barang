import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/ShippingRatesSection.css";
import ImageShippingRates from "../assets/img/image-shipping-rates.svg";
import { ButtonStyle } from "./StyledComponents";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import Swal from "sweetalert2";

function ShippingRatesSection() {
  const [service, setService] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [weight, setWeight] = useState("");

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };
  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const shipingRates = {
      origin: from,
      destination: to,
      weight,
    };
    // Menampilkan loader
    const loadingSwal = Swal.fire({
      title: "Processing...",
      text: "Please wait while we calculate the shipping cost.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await axios.post("/api/auth/cek-ongkir/", shipingRates, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      loadingSwal.close();
      if (response.status === 200) {
        Swal.fire({
          title: "Estimate Rates",
          text: `Shipping Rates from ${response.data.origin} to ${response.data.destination} is : Rp.${response.data.cost}`,
          iconColor: "#01aa5a",
          confirmButtonColor: "#01aa5a",
        });
      }
    } catch (error) {
      console.error("Error:", error);

      // Menangani kesalahan berdasarkan status kode dari respon
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Request Failed!",
          text: error.response.data.message,
          confirmButtonColor: "#f27474",
        });
      } else {
        // Jika tidak ada respon dari server
        Swal.fire({
          icon: "error",
          title: "Request Failed!",
          text: "Unable to connect to server.",
          confirmButtonColor: "#f27474",
        });
      }
    }
  };

  const [refShippingRates, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animasiShippingRates = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <section className="shipping-rates container-fluid pt-5 pb-5">
      <div className="container-rates d-flex flex-column">
        <div className="header-rates d-flex flex-column justify-content-center align-items-center">
          <h2 className="fw-bold fs-2">
            Shipping <span>Rates</span>
          </h2>
          <p className="text-center">
            This is the estimated cost of shipping the package
          </p>
        </div>
        <div className="body-rates d-flex flex-column flex-lg-row p-3 p-sm-5 ">
          <animated.div
            ref={refShippingRates}
            style={animasiShippingRates}
            className="img-rates d-flex justify-content-center align-items-center col-12 col-lg-6"
          >
            <img src={ImageShippingRates} alt=" shipping rates section" />
          </animated.div>
          <div className="form-container d-flex justify-content-center align-items-center col-12 col-lg-6">
            <animated.div ref={refShippingRates} style={animasiShippingRates}>
              <form
                onSubmit={handleSubmit}
                action=""
                className="form-shipping-rates  d-flex flex-wrap justify-content-center p-5 "
              >
                <div className="d-flex flex-column col-12 col-md-6 p-1 p-sm-2 gap-3">
                  <label className="fw-bold" htmlFor="type">
                    TYPE OF SERVICE
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="form-control input-form-shipping-rate-section"
                    value={service}
                    onChange={handleServiceChange}
                    required
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Document">Document</option>
                    <option value="Goods">Goods</option>
                    <option value="Cargo">Cargo</option>
                  </select>
                </div>
                <div className="d-flex flex-column col-12 col-md-6 p-1 p-sm-2 gap-3">
                  <label className="fw-bold" htmlFor="email">
                    WEIGHT
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    className="form-control input-form-shipping-rate-section"
                    value={weight}
                    onChange={handleWeightChange}
                    placeholder="min 0.5 kg"
                    min="0.5"
                    step="0.1"
                    required
                  />
                </div>
                <div className="d-flex flex-column col-12 col-md-6 p-1 p-sm-2 gap-3">
                  <label className="fw-bold" htmlFor="state">
                    FROM
                  </label>
                  <input
                    type="text"
                    id="from"
                    name="from"
                    className="form-control input-form-shipping-rate-section"
                    placeholder="City"
                    value={from}
                    onChange={handleFromChange}
                    required
                  />
                </div>
                <div className="d-flex flex-column col-12 col-md-6 p-1 p-sm-2 gap-3">
                  <label className="fw-bold" htmlFor="zip">
                    TO
                  </label>
                  <input
                    type="text"
                    id="to"
                    name="to"
                    className="form-control input-form-shipping-rate-section"
                    placeholder="City"
                    value={to}
                    onChange={handleToChange}
                    required
                  />
                </div>
                <ButtonStyle
                  style={{ width: "100%" }}
                  className="mt-4 ms-2 me-2 d-flex justify-content-between align-item-center"
                >
                  Estimate <FaArrowRightLong />
                </ButtonStyle>
              </form>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShippingRatesSection;
