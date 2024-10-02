import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ButtonStyle } from "../components/StyledComponents";
import ImgTracking from "../assets/img/image-tracking.png";
import Swal from "sweetalert2";
import "../assets/css/TrackingPage.css";

const TrackingPage = () => {
  const [orderId, setOrderId] = useState("");
  const [orderDetails, setOrderDetails] = useState({
    namesender: "",
    namerecipient: "",
    from: "",
    to: "",
    status: "",
  });

  const handleTrackOrder = async () => {
    const loadingSwal = Swal.fire({
      title: "Tracking Order",
      text: "Please wait while we track your order...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // Menambahkan timestamp ke URL untuk mencegah caching
      const response = await axios.get(
        `/api/auth/track/${orderId}?t=${new Date().getTime()}`
      );

      loadingSwal.close();

      const { order } = response.data;

      setOrderDetails({
        namesender: order.nama_pengirim,
        namerecipient: order.nama_penerima,
        from: order.kota_asal,
        to: order.kota_penerima,
        status: order.status,
      });

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
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col md-6">
            <img
              className="image-tracking"
              src={ImgTracking}
              alt="Images"
              width={"600px"}
              height={"600px"}
            />
          </div>
          <div className="col md-6" style={{ margin: "30px 20px" }}>
            <p className="tracking-title">Track Your Order</p>
            <input
              className="form-control tracking-form-control"
              type="text"
              placeholder="Enter your order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
              autoFocus
            />
            <br />
            <div className="d-flex justify-content-center">
              <ButtonStyle
                style={{ borderRadius: "50px" }}
                onClick={handleTrackOrder}
              >
                Track
              </ButtonStyle>
            </div>

            <div className="shadow-sm result-tracking">
              <p>
                <b>ID Order: {orderId}</b>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>Sender</td>
                    <td>:</td>
                    <td>{orderDetails.namesender}</td>
                  </tr>
                  <tr>
                    <td>Recipient</td>
                    <td>:</td>
                    <td>{orderDetails.namerecipient}</td>
                  </tr>
                  <tr>
                    <td>From</td>
                    <td>:</td>
                    <td>{orderDetails.from}</td>
                  </tr>
                  <tr>
                    <td>To</td>
                    <td>:</td>
                    <td>{orderDetails.to}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>:</td>
                    <td>{orderDetails.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackingPage;
