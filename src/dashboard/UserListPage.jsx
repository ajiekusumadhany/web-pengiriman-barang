import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/UserListPage.css";
import { Link } from "react-router-dom";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";

const UserListPage = () => {
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
              <Link to="/dashboard/user-list" style={{ color: "grey" }}>
                User List
              </Link>
            </li>
          </ol>
        </nav>
        <p className="userlist-title">User List</p>
        <div className="table-responsive">
          <table className="table table-user shadow">
            <thead className="table">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Fullname</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Budi123</td>
                <td>Budi Setiawan</td>
                <td>08967564783</td>
                <td>budi@gmail.com</td>
                <td>Semarang, Jawa Tengah</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Budi123</td>
                <td>Budi Setiawan</td>
                <td>08967564783</td>
                <td>budi@gmail.com</td>
                <td>Semarang, Jawa Tengah</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Budi123</td>
                <td>Budi Setiawan</td>
                <td>08967564783</td>
                <td>budi@gmail.com</td>
                <td>Semarang, Jawa Tengah</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserListPage;
