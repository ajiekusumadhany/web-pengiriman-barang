import React, { useState } from "react";
import "../assets/css/CheckShippingCostsPage.css";
import { ButtonStyle } from "../components/StyledComponents";
// import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { StyledIcon } from "../components/StyledIcon";
import {
  faMapMarkerAlt,
  faMapPin,
  faWeightHanging,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";

const CheckShippingCostsPage = () => {
  const [service, setService] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [weight, setWeight] = useState("");
  const [shippingCost, setShippingCost] = useState(null); // State untuk menyimpan hasil perhitungan biaya pengiriman

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
      setShippingCost(response.data.cost);
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
      setFrom("");
      setTo("");
      setShippingCost("");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5 pt-5 min-vh-100">
        <p className="title">Shipping Rates</p>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Baris pertama */}
            <div className="col-md-3">
              <label className="label-checkshiping">
                <StyledIcon icon={faMapMarkerAlt} size="20px" color="black" />{" "}
                From
              </label>
              <input
                type="text"
                className="form-control form-input-shipping-cost"
                placeholder="City"
                name="from"
                value={from}
                onChange={handleFromChange}
                required
                autoFocus
              />
            </div>
            <div className="col-md-3">
              <label className="label-checkshiping">
                <StyledIcon icon={faMapPin} size="20px" color="black" /> To
              </label>
              <input
                type="text"
                className="form-control form-input-shipping-cost"
                placeholder="City"
                name="to"
                value={to}
                onChange={handleToChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label className="label-checkshiping">
                <StyledIcon icon={faBox} size="20px" color="black" /> Service
              </label>
              <select
                className="form-select form-input-shipping-cost"
                name="service"
                value={service}
                onChange={handleServiceChange}
                required
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Document Delivery">Document Delivery</option>
                <option value="Goods Delivery">Goods Delivery</option>
                <option value="Cargo Delivery">Cargo Delivery</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="label-checkshiping">
                <StyledIcon icon={faWeightHanging} size="20px" color="black" />{" "}
                Weight
              </label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control form-input-shipping-cost"
                  name="weight"
                  value={weight}
                  onChange={handleWeightChange}
                  placeholder="min 0.5 kg"
                  min="0.5"
                  step="0.1"
                  required
                />
                <span className="input-group-text">Kilogram</span>
              </div>
            </div>
          </div>
          <center>
            <ButtonStyle
              style={{
                borderRadius: "50px",
                alignItems: "center",
                marginBottom: "50px",
              }}
              type="submit"
            >
              Check Shipping Rates
            </ButtonStyle>
          </center>
        </form>
        {/* Menampilkan input */}
        {shippingCost !== null && (
          <div className="input-container">
            <table className="tbl-input">
              <tr>
                <td>From</td>
                <td>:</td>
                <td>{from}</td>
              </tr>
              <tr>
                <td>To</td>
                <td>:</td>
                <td>{to}</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>:</td>
                <td>{service}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>:</td>
                <td>{weight} Kilogram</td>
              </tr>
            </table>
          </div>
        )}
        <div className="result-container">
          <table className="table">
            <thead className=" table-secondary">
              <tr>
                <th>Service</th>
                <th>Weight</th>
                <th>Shipping Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{service}</td>
                <td>{weight} Kilogram</td>
                <td>Rp {shippingCost}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckShippingCostsPage;
