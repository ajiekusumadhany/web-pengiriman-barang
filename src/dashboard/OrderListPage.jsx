import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/OrderListPage.css";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";
import { Link } from "react-router-dom";

const OrderListPage = () => {
  return (
    <>
      <NavbarDashboard />
      <div className="container-fluid mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/dashboard" style={{ color: " #4caf50" }}>
                Dashboard
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/dashboard/order-list" style={{ color: "grey" }}>
                Order List
              </Link>
            </li>
          </ol>
        </nav>
        <p className="orderlist-title">Order List</p>
        <div className="table-responsive">
          <table className="table  table-bordered table-order shadow">
            <thead className="table">
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID Order</th>
                <th scope="col">Username</th>
                <th scope="col">Fullname</th>
                <th scope="col">Recipient Name</th>
                <th scope="col">Recipient Address</th>
                <th scope="col">Recipient Phone Number</th>
                <th scope="col">Item Name</th>
                <th scope="col">Service Type</th>
                <th scope="col">Weight</th>
                <th scope="col">Total Payment</th>
                <th scope="col">Action</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>#Order12345</td>
                <td>budi123</td>
                <td>Budi Setiawan</td>
                <td>Eko santoso</td>
                <td>Jl. Bima, Semarang Tengah</td>
                <td>08987809868</td>
                <td>Dokumen Pendaftaran</td>
                <td>Dokumen</td>
                <td>1kg</td>
                <td>Rp 10.000</td>
                <td>
                  <div className="d-flex flex-column ">
                    <button
                      type="button"
                      className="btn-delivered btn-sm me-1"
                      style={{ marginBottom: "5px" }}
                    >
                      Delivered
                    </button>
                    <button
                      type="button"
                      className="btn-pending btn-sm me-1"
                      style={{ marginBottom: "5px" }}
                    >
                      Pending
                    </button>
                    <button type="button" className="btn-shipment btn-sm">
                      Shipment
                    </button>
                  </div>
                </td>
                <td>Delivered</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderListPage;
