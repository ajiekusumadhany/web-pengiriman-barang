import React, { useEffect, useState } from "react";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";
import {jwtDecode} from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/DashboardPage.css";
import { ButtonStyle } from "../components/StyledComponents";
import { Link } from "react-router-dom";

function DashboardPage() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("User not logged in");
          return;
        }
        // Decode the token to get user role
        const decodedToken = jwtDecode(token);
        const userType = decodedToken.role;
        // Update state with user role
        setRole(userType);

      } catch (error) {
        console.error("Error fetching user role", error);
      }
    };

    fetchRole();
  }, []);

  return (
    <>
      <NavbarDashboard />
      <div className="container mt-5">
        {/* <p className="welcome-dashboard">Welcome, Admin1!</p> */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/dashboard" style={{ color: " #4caf50" }}>
                Dashboard
              </Link>
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div
              className="dasboard-card card no-border shadow-sm"
              style={{
                backgroundColor: "#FEF5C5",
                border: "1px solid   #FEF5C5",
              }}
            >
              <div className="card-body">
                <h2 id="userCount" className="display-6">
                  0
                </h2>
                <p className="card-text">Delivered Items</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="dasboard-card card no-border shadow-sm"
              style={{
                backgroundColor: "#C2EBD7",
                border: "1px solid  #C2EBD7",
              }}
            >
              <div className="card-body">
                <h2 id="revenue" className="display-6">
                  0
                </h2>
                <p className="card-text">Shipped Items</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="dasboard-card card no-border shadow-sm"
              style={{
                backgroundColor: "#D0F6FE",
                border: "1px solid  #D0F6FE",
              }}
            >
              <div className="card-body">
                <h2 id="dailyVisits" className="display-6">
                  0
                </h2>
                <p className="card-text">Pending Items</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mb-4">
            <div
              className="dasboard-card card no-border shadow"
              style={{ border: "1px solid   white" }}
            >
              <div className="card-body">
                <p>
                  <b>Latest Order</b>
                </p>
                <div className="table-responsive">
                  <table className="table table-dashboard text-center">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID Order</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Total Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>#OD123</td>
                        <td>Semarang</td>
                        <td>Jakarta</td>
                        <td>Rp 14.000</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>#OD123</td>
                        <td>Semarang</td>
                        <td>Jakarta</td>
                        <td>Rp 14.000</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>#OD123</td>
                        <td>Semarang</td>
                        <td>Jakarta</td>
                        <td>Rp 14.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ButtonStyle className="see-detail-order">
                  See Details
                </ButtonStyle>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="dasboard-card card no-border shadow"
              style={{ border: "1px solid   white" }}
            >
              <div className="card-body text-center">
                <p>
                  <b>Role</b>
                </p>
                <p>{role}</p>
                <hr />
                <p>
                  <b>Order Quantity</b>
                </p>
                <p>0</p>
                <hr />
                <p>
                  <b>Number of Users</b>
                </p>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashboardPage;
