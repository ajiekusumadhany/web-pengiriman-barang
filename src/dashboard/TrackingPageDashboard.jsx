import React from "react";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";
import "../assets/css/TrackingPageDashboard.css";
import { Link } from "react-router-dom";

function TrackingPageDashboard() {
  return (
    <>
      <NavbarDashboard />
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/dashboard" style={{ color: " #4caf50" }}>
                Dashboard
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/dashboard/tracking" style={{ color: "grey" }}>
                Tracking
              </Link>
            </li>
          </ol>
        </nav>
        <div
          className="card shadow"
          style={{ border: "none", borderRadius: "0" }}
        >
          <h1
            className="title-tracking"
            style={{ fontSize: "24px", fontWeight: "bold", margin: "20px" }}
          >
            Live Tracking
          </h1>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">NO</th>
                    <th scope="col">ORDER ID</th>
                    <th scope="col">SERVICE</th>
                    <th scope="col">WEIGHT</th>
                    <th scope="col">ROUTE</th>
                    <th scope="col">FEE</th>
                    <th scope="col">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle">1</td>
                    <td className="align-middle">#001ABC</td>
                    <td className="align-middle">Document</td>
                    <td className="align-middle">1kg</td>
                    <td className="align-middle">Jakarta → Semarang</td>
                    <td className="align-middle">Rp. 50.000</td>
                    <td className="align-middle">
                      <span className="badge rounded-pill status-delivered">
                        Delivered
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle">2</td>
                    <td className="align-middle">#002DJF</td>
                    <td className="align-middle">Goods</td>
                    <td className="align-middle">5kg</td>
                    <td className="align-middle">Semarang → Jepara</td>
                    <td className="align-middle">Rp. 100.000</td>
                    <td className="align-middle">
                      <span className="badge rounded-pill status-pending">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle">3</td>
                    <td className="align-middle">#003QWE</td>
                    <td className="align-middle">Cargo</td>
                    <td className="align-middle">11kg</td>
                    <td className="align-middle">Kudus → Semarang</td>
                    <td className="align-middle">Rp. 500.000</td>
                    <td className="align-middle">
                      <span className="badge rounded-pill status-shipping">
                        Shipping
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackingPageDashboard;
