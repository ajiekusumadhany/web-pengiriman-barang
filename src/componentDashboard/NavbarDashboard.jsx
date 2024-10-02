import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/NavbarDashboard.css";
import { AiOutlineMenuUnfold, AiOutlineTruck } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { FaHome, FaUsers } from "react-icons/fa";
import { IoPersonCircleOutline, IoLogOutOutline } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import { MdOutlineSettings } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NavbarDashboard() {
  const [userRole, setUserRole] = useState(""); // State untuk menyimpan peran pengguna
  const navigate = useNavigate();

  // Callback untuk menangani scroll
  const handleScroll = useCallback(() => {
    const header = document.querySelector(".header");
    if (header) {
      if (window.scrollY > 70) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  }, []);
  // Efek untuk menambahkan event listener pada scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Waktu saat ini dalam detik
        if (decodedToken.exp < currentTime) {
          // Token sudah kadaluarsa
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          navigate("/login");
        } else {
          setUserRole(decodedToken.role); // Set peran pengguna
        }
      } catch (error) {
        console.error("Token decoding error:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  // Fungsi untuk menangani logout
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data.message); // Menampilkan pesan logout sukses di console
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/";
      } else {
        console.error("Error logging out:", response.data.message);
      }
    } catch (error) {
      console.error("Error logging out:", error);
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/";
      }
    }
  };

  return (
    <header className="header header-dashboard">
      <nav className="navbar pt-1 pb-1 pt-sm-0 pb-sm-0" id="nav-dekstop">
        <div className="container-fluid p-xl-2 ps-xl-5 pe-xl-5 fw-semibold">
          <div className="judul d-flex align-items-center">
            <a className="navbar-brand" href="/">
              <h1 className="fw-bold">
                Febe<span>Express</span>
              </h1>
            </a>
          </div>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            aria-expanded="false"
            onClick={openNav}
          >
            <AiOutlineMenuUnfold size={35} color="#000" />
          </button>
        </div>
      </nav>

      <div id="mySidenav" className="sidenavDashboard">
        <ul className="navbar-nav ps-4 fw-semibold">
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2" to="/dashboard">
              <FaHome size={25} color={"#01aa5a"} />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2" to="/dashboard/myprofile">
              <IoPersonCircleOutline size={25} color={"#01aa5a"} />
              Profil
            </Link>
          </li>
          {userRole === "user" && (
            <>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex gap-2"
                  to="/dashboard/tracking"
                >
                  <AiOutlineTruck size={25} color={"#01aa5a"} />
                  Tracking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex gap-2" to="/dashboard/order">
                  <CiBoxes size={25} color={"#01aa5a"} />
                  Order
                </Link>
              </li>
            </>
          )}
          {userRole === "admin" && (
            <>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex gap-2"
                  to="/dashboard/user-list"
                >
                  <FaUsers size={25} color={"#01aa5a"} />
                  User List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex gap-2"
                  to="/dashboard/order-list"
                >
                  <CiBoxes size={25} color={"#01aa5a"} />
                  Order List
                </Link>
              </li>
            </>
          )}
          {userRole === "superadmin" && (
            <>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex gap-2"
                  to="/dashboard/user-list"
                >
                  <FaUsers size={25} color={"#01aa5a"} />
                  User List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex gap-2"
                  to="/dashboard/order-list"
                >
                  <CiBoxes size={25} color={"#01aa5a"} />
                  Order List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex gap-2"
                  to="/dashboard/add-admin"
                >
                  <LuUserPlus size={25} color={"#01aa5a"} />
                  Add Admin
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2" to="/dashboard/settings">
              <MdOutlineSettings size={25} color={"#01aa5a"} />
              Setting
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="nav-link d-flex gap-2"
              onClick={handleLogout}
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <IoLogOutOutline size={25} color={"#01aa5a"} />
              Logout
            </button>
          </li>
        </ul>
        <div className="d-flex justify-content-center mt-4"></div>
      </div>
    </header>
  );
}

let isSidebarOpen = false;

// Fungsi untuk membuka dan menutup sidebar
function openNav() {
  const sidebar = document.getElementById("mySidenav");
  if (!isSidebarOpen) {
    if (window.innerWidth >= 400 && window.innerWidth <= 810) {
      sidebar.style.width = "60%";
    } else if (window.innerWidth >= 810) {
      sidebar.style.width = "200px";
    } else {
      sidebar.style.width = "100%";
    }
    isSidebarOpen = true;
  } else {
    sidebar.style.width = "0";
    isSidebarOpen = false;
  }
}

// Event listener untuk menutup sidebar ketika klik di luar elemen sidebar
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("mySidenav");
  const navbarToggle = document.querySelector(".navbar-toggler");
  if (
    sidebar &&
    event.target !== sidebar &&
    !sidebar.contains(event.target) &&
    navbarToggle &&
    event.target !== navbarToggle &&
    !navbarToggle.contains(event.target)
  ) {
    sidebar.style.width = "0";
    isSidebarOpen = false;
  }
});

export default NavbarDashboard;
