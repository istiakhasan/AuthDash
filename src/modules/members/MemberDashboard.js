import React from 'react';
import ReactApexChart from 'react-apexcharts';
import HomeCard from '../../common/HomeCard';
import DashboardTimeline from '../../common/DashboardTimeline';


const MemberDashboard = () => {
  const pointsChartState = {
    series: [
      {
        name: 'Points Earned',
        data: [50, 70, 40, 90, 60, 80, 100, 70, 120, 90],
      },
    ],
    options: {
      chart: { type: 'line', height: 350, toolbar: { show: false } },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      stroke: { curve: 'smooth', width: 3 },
      colors: ['#4CAF50'],
      dataLabels: { enabled: false },
      grid: { borderColor: '#e7e7e7' },
    },
  };

  // Dummy recent activity
  const recentActivities = [
    { activity: 'Purchased Product A', points: 50, date: '2025-08-25' },
    { activity: 'Referred a Friend', points: 100, date: '2025-08-24' },
    { activity: 'Reviewed Product B', points: 30, date: '2025-08-23' },
    { activity: 'Purchased Product C', points: 40, date: '2025-08-22' },
  ];

  return (
    <div className="container-fluid p-3">
      {/* Top Cards */}
      <div className="row g-3 mb-4">
        <HomeCard title="Total Points" percentage="1240" total="1240" />
        <HomeCard title="Points Redeemed" percentage="540" total="540" />
        <HomeCard title="Available Points" percentage="700" total="700" />
        <HomeCard title="Membership Level" percentage="Gold" total="Gold" />
      </div>

      {/* Main Dashboard Row */}
      <div className="row g-3">
        {/* Points Trend Chart */}
        <div className="col-xl-8 col-md-12">
          <div className="card p-3 h-100">
            <h6 className="text-secondary mb-3">Points Trend Overview</h6>
            <ReactApexChart
              options={pointsChartState.options}
              series={pointsChartState.series}
              type="line"
              height={350}
            />
          </div>
        </div>

        {/* Member Timeline */}
        <div className="col-xl-4 col-md-12">
          <div className="card p-3 h-100">
            <h6 className="text-secondary mb-3">Recent Activity</h6>
            <DashboardTimeline items={recentActivities.map(act => ({
              title: act.activity,
              date: act.date,
              points: act.points
            }))} />
          </div>
        </div>

        {/* Recent Activities Table */}
        <div className="col-xl-8 col-md-12 mt-3">
          <div className="card h-100 p-3 table-responsive">
            <h6 className="text-secondary mb-3">Recent Activities</h6>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Points</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((act, idx) => (
                  <tr key={idx}>
                    <td>{act.activity}</td>
                    <td>{act.points}</td>
                    <td>{act.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rewards / Notifications */}
        <div className="col-xl-4 col-md-12 mt-3">
          <div className="card p-3 h-100">
            <h6 className="mb-3">Rewards & Notifications</h6>
            <hr />
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong>New Reward Available</strong>
                <br />
                <small className="text-secondary">You earned 100 points!</small>
              </li>
              <li className="mb-2">
                <strong>Referral Bonus</strong>
                <br />
                <small className="text-secondary">Your friend signed up and you got 50 points</small>
              </li>
              <li className="mb-2">
                <strong>Membership Renewal</strong>
                <br />
                <small className="text-secondary">Gold membership expires in 15 days</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
