import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ButtonStyle, WhiteButton } from "../components/StyledComponents";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";
import { Link } from "react-router-dom";

function MyProfilePage() {
  const [initialValues] = useState({
    fullName: "bima sakti",
    username: "bimsak",
    email: "bimasakti@gmail.com",
    phoneNumber: "082465478654",
    address: "Semarang",
  });

  const [formData, setFormData] = useState({ ...initialValues });

  const [editMode, setEditMode] = useState(false);

  const saveProfile = (event) => {
    event.preventDefault();
    console.log("Profile updated:", formData);
    setEditMode(false);
  };

  const cancelEdit = () => {
    setFormData({ ...initialValues });
    setEditMode(false);
  };

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
              <Link to="/dashboard/myprofile" style={{ color: "grey" }}>
                My Profile
              </Link>
            </li>
          </ol>
        </nav>
        <div
          className="card shadow"
          style={{ border: "none", borderRadius: "0", width: "600px" }}
        >
          <div className="card-body">
            <h2
              className="title-profile"
              style={{ fontSize: "24px", fontWeight: "bold", margin: "20px" }}
            >
              My Profile
            </h2>
            <form onSubmit={saveProfile} style={{margin: "30px"}}>
              <div className="row mb-3">
                <div className="col-md-12 mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter full name"
                      autoFocus
                    />
                  ) : (
                    <div>{formData.fullName}</div>
                  )}
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      id="username"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter username"
                    />
                  ) : (
                    <div>{formData.username}</div>
                  )}
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  {editMode ? (
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter email address"
                    />
                  ) : (
                    <div>{formData.email}</div>
                  )}
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  {editMode ? (
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  ) : (
                    <div>{formData.phoneNumber}</div>
                  )}
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter address"
                    />
                  ) : (
                    <div>{formData.address}</div>
                  )}
                </div>
              </div>
              {editMode ? (
                <div className="col-md-12 d-flex justify-content-left text-center">
                  <ButtonStyle
                    type="submit"
                    className="btn-update"
                    style={{ marginRight: "25px" }}
                  >
                    Update
                  </ButtonStyle>
                  <WhiteButton
                    type="button"
                    className="btn-cancel"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </WhiteButton>
                </div>
              ) : (
                <ButtonStyle
                  type="button"
                  className="btn-edit"
                  onClick={() => setEditMode(true)}
                >
                  Edit
                </ButtonStyle>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfilePage;
