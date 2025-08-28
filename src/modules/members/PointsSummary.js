import React from "react";
import { Table, TableCell, TableRow } from "@mui/material";
import CustomCommonTable from "../../common/CustomCommonTable";
import moment from "moment";
import { pointsData } from "../../redux/usersData";
import { Tab, Tabs } from "react-bootstrap";

const PointsSummary = () => {
  const tableHeaders = [
    { id: "sl", numeric: true, disablePadding: true, label: "SL" },
    { id: "category", numeric: true, disablePadding: false, label: "Category" },
    { id: "points", numeric: true, disablePadding: false, label: "Points" },
    { id: "dateEarned", numeric: true, disablePadding: false, label: "Date Earned" },
  ];

  // Calculate total points
  const totalPoints = pointsData.reduce((sum, item) => sum + item.points, 0);

  return (
    <Tabs className="mb-3" defaultActiveKey="lookup_customer">
      <Tab title="Points Summary" eventKey="lookup_customer">
    <div>
      <p className="text-end">Total Points: <strong>{totalPoints}</strong></p>
      <div className="table-responsive">
        <CustomCommonTable tableheaders={tableHeaders}>
          {pointsData.map((item, i) => (
            <TableRow key={item.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.points}</TableCell>
              <TableCell>{moment(item.dateEarned).format("YYYY-MM-DD")}</TableCell>
            </TableRow>
          ))}
        </CustomCommonTable>
      </div>
    </div>
    </Tab>
    </Tabs>
  );
};

export default PointsSummary;
