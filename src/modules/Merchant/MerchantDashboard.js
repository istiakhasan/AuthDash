import ReactApexChart from "react-apexcharts";
import HomeCard from "../../common/HomeCard";
import DashboardTimeline from "../../common/DashboardTimeline";

const MerchantDashboard = () => {
  const chartState = {
    series: [
      {
        name: "Servings",
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
      },
    ],
    options: {
      annotations: {
        points: [
          {
            x: "Bananas",
            seriesIndex: 0,
            label: {
              borderColor: "#ffffff",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#176E6D",
              },
              text: "Bananas are good",
            },
          },
        ],
      },
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: "30%",
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: [
          "Apples",
          "Oranges",
          "Strawberries",
          "Pineapples",
          "Mangoes",
          "Bananas",
          "Blackberries",
          "Pears",
          "Watermelons",
          "Cherries",
          "Pomegranates",
          "Tangerines",
          "Papayas",
        ],
      },
      fill: {
        colors: ["#176E6D"],
      },
    },
  };

  return (
    <div className="container-fluid p-3">
      {/* Top Cards */}
      <div className="row g-3 mb-4">
     
          <HomeCard title="New Accounts" percentage="234" total="58" />
      
          <HomeCard title="Total Expenses" percentage="71" total="62" />
  
          <HomeCard title="Company Value" percentage="$1,45M" total="72" />
       
          <HomeCard title="New Employees" percentage="34 hires" total="81" />
        
      </div>

      {/* Main Dashboard Row */}
      <div className="row g-3">
        {/* Chart */}
        <div className="col-xl-8 col-md-12">
          <div className="card p-3 h-100">
            <h6 className="text-secondary mb-3">Monthly Servings Overview</h6>
            <ReactApexChart
              options={chartState.options}
              series={chartState.series}
              type="bar"
              height={350}
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="col-xl-4 col-md-12">
          <div className="card p-3 h-100">
            <h6 className="text-secondary mb-3">Activity Timeline</h6>
            <DashboardTimeline />
          </div>
        </div>

        {/* Sales Table */}
        <div className="col-xl-8 col-md-12 mt-3">
          <div className="card p-3 table-responsive">
            <h6 className="text-secondary mb-3">Sales Overview</h6>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Sold</th>
                  <th>Revenue</th>
                  <th>Returns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apples</td>
                  <td>44</td>
                  <td>$220</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Oranges</td>
                  <td>55</td>
                  <td>$275</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Bananas</td>
                  <td>43</td>
                  <td>$215</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tasks List */}
        <div className="col-xl-4 col-md-12 mt-3">
          <div className="card p-3 h-100">
            <h6 className="mb-3 d-flex align-items-center">
              <img
                style={{ height: "25px", width: "25px", marginRight: "8px" }}
                src="https://w7.pngwing.com/pngs/731/105/png-transparent-computer-icons-task-management-virtual-assistant-symbol-symbol-miscellaneous-text-service.png"
                alt="Tasks"
              />
              <span style={{ color: "#176E6D" }}>Tasks List</span>
            </h6>
            <hr />
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start">
                <input type="checkbox" className="me-2 mt-1" />
                <div>
                  <strong>Wash the car</strong>
                  <br />
                  <small className="text-secondary">Scheduled for today</small>
                </div>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <input type="checkbox" className="me-2 mt-1" />
                <div>
                  <strong>Prepare monthly report</strong>
                  <br />
                  <small className="text-secondary">Due tomorrow</small>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
