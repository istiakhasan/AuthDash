import ReactApexChart from "react-apexcharts";
import HomeCard from "../../common/HomeCard";
import DashboardTimeline from "../../common/DashboardTimeline";

const AdminDashboard = () => {
  const userChartState = {
    series: [
      {
        name: "Users",
        data: [120, 90, 140, 180, 75, 100, 130, 90, 160, 120],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
        toolbar: { show: false },
      },
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
          "Jul", "Aug", "Sep", "Oct"
        ],
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      colors: ["#FF6B6B"],
      dataLabels: { enabled: false },
      grid: {
        borderColor: "#e7e7e7",
      },
    },
  };

  return (
    <div className="container-fluid p-3">
      {/* Top Cards */}
      <div className="row g-3 mb-4">
          <HomeCard title="Total Users" percentage="1023" total="1023" />
   
          <HomeCard title="Total Merchants" percentage="87" total="87" />
       
          <HomeCard title="Pending Approvals" percentage="12" total="12" />
       
          <HomeCard title="System Alerts" percentage="5" total="5" />
       
      </div>

      {/* Main Dashboard Row */}
      <div className="row g-3">
        {/* User Growth Chart */}
        <div className="col-xl-8 col-md-12">
          <div className="card p-3 h-100">
            <h6 className="text-secondary mb-3">User Growth Overview</h6>
            <ReactApexChart
              options={userChartState.options}
              series={userChartState.series}
              type="line"
              height={350}
            />
          </div>
        </div>

        {/* Admin Timeline */}
        <div className="col-xl-4 col-md-12">
          <div className="card p-3 h-100">
            <h6 className="text-secondary mb-3">Admin Activities</h6>
            <DashboardTimeline />
          </div>
        </div>

        {/* Pending Approvals Table */}
        <div className="col-xl-8 col-md-12 mt-3">
          <div className="card h-100 p-3 table-responsive">
            <h6 className="text-secondary mb-3">Pending Approvals</h6>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>User/Merchant</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>Merchant</td>
                  <td>Pending</td>
                  <td>
                    <button className="btn btn-success btn-sm me-2">Approve</button>
                    <button className="btn btn-danger btn-sm">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>jane@example.com</td>
                  <td>User</td>
                  <td>Pending</td>
                  <td>
                    <button className="btn btn-success btn-sm me-2">Approve</button>
                    <button className="btn btn-danger btn-sm">Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* System Tasks / Alerts */}
        <div className="col-xl-4 col-md-12 mt-3">
          <div className="card p-3 h-100">
            <h6 className="mb-3 d-flex align-items-center">
              <span style={{ color: "#FF6B6B" }}>System Alerts</span>
            </h6>
            <hr />
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong>Backup Required</strong>
                <br />
                <small className="text-secondary">Last backup was 7 days ago</small>
              </li>
              <li className="mb-2">
                <strong>Server CPU High</strong>
                <br />
                <small className="text-secondary">CPU at 85%</small>
              </li>
              <li className="mb-2">
                <strong>Pending Merchants</strong>
                <br />
                <small className="text-secondary">12 merchants waiting approval</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
