import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/ShipmentDetailsPage.css";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";

const ShipmentDetailsPage = () => {
  return (
    <>
      <NavbarDashboard />
      <div className="container mt-5">
        <div className="shipment-card shadow">
          <p className="shipment-title">Shipment Details</p>
          <div
            className="card-header text-white"
            style={{ backgroundColor: "#01AA5A" }}
          >
            <div className="d-flex justify-content-between">
              <span>Order ID</span>
              <span>#001ABC</span>
            </div>
          </div>
          <div className="shipment-card-body">
            <div className="tracking-item row mb-4">
              <div className="col-auto text-center">
                <div className="time">13.00</div>
                <div className="date">Nov 10</div>
              </div>
              <div className="col-auto d-flex align-items-center">
                <div className="tracking-circle-status rounded-circle"></div>
              </div>
              <div className="col">
                <div className="tracking-status">
                  <b>Order Received</b>
                </div>
              </div>
            </div>
            <div className="tracking-item row mb-4">
              <div className="col-auto text-center">
                <div className="time">15.00</div>
                <div className="date">Nov 10</div>
              </div>
              <div className="col-auto d-flex align-items-center">
                <div className="tracking-circle rounded-circle"></div>
              </div>
              <div className="col">
                <div className="tracking-status  ">
                  Your order is being processed at Jakarta, MP - Warehouse
                </div>
              </div>
            </div>
            <div className="tracking-item row mb-4">
              <div className="col-auto text-center">
                <div className="time">16.00</div>
                <div className="date">Nov 10</div>
              </div>
              <div className="col-auto d-flex align-items-center">
                <div className="tracking-circle-status rounded-circle"></div>
              </div>
              <div className="col">
                <div className="tracking-status">
                  <b>Your Order is Shipped</b>
                </div>
              </div>
            </div>
            <div className="tracking-item row mb-4">
              <div className="col-auto text-center">
                <div className="time">20.00</div>
                <div className="date">Nov 10</div>
              </div>
              <div className="col-auto d-flex align-items-center">
                <div className="tracking-circle rounded-circle"></div>
              </div>
              <div className="col">
                <div className="tracking-status  ">
                  Your order arrived at Semarang & scheduled delivery is 14
                  November
                </div>
              </div>
            </div>
            <div className="tracking-item row mb-4">
              <div className="col-auto text-center">
                <div className="time">12.00</div>
                <div className="date">Nov 14</div>
              </div>
              <div className="col-auto d-flex align-items-center">
                <div className="tracking-circle rounded-circle"></div>
              </div>
              <div className="col">
                <div className="tracking-status">
                  Your order is out for delivery
                </div>
              </div>
            </div>
            <div className="tracking-item row">
              <div className="col-auto text-center">
                <div className="time">13.00</div>
                <div className="date">Nov 14</div>
              </div>
              <div className="col-auto d-flex align-items-center">
                <div className="tracking-circle-status rounded-circle"></div>
              </div>
              <div className="col">
                <div className="tracking-status">
                  <b>Delivered</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipmentDetailsPage;
