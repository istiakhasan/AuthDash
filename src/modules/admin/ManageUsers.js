import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TableCell, TableRow } from "@mui/material";
import CustomCommonTable from "../../common/CustomCommonTable";
import moment from "moment";
import { Tab, Tabs } from "react-bootstrap";

const ManageUsers = () => {
  const { usersData } = useSelector((state) => state.data);
  const [selectedRole, setSelectedRole] = useState("Merchant"); // default: Merchant

  const tableheaders = [
    { id: "89", numeric: true, disablePadding: true, label: "SL" },
    { id: "calories", numeric: true, disablePadding: false, label: "CreatedAt" },
    { id: "76", numeric: true, disablePadding: false, label: "Name" },
    { id: "77", numeric: true, disablePadding: false, label: "Business Name" },
    { id: "16", numeric: true, disablePadding: false, label: "Email" },
    { id: "13", numeric: true, disablePadding: false, label: "Role" },
    {
      id: "11",
      numeric: true,
      disablePadding: false,
      label: "Status",
      style: { textAlign: "start" },
    },
  ];

  const uniqueRoles = [...new Set(usersData.map((u) => u.role))];

  const filteredUsers = selectedRole
    ? usersData.filter((u) => u.role === selectedRole)
    : usersData;

  return (
    <Tabs className="mb-3" defaultActiveKey="po_approve">
      <Tab title="Users" eventKey={"po_approve"}>
        <div className="table-responsive mt-2">
          <select
            className="form-select mb-3"
            style={{ width: "300px" }}
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            {uniqueRoles.map((role, idx) => (
              <option key={idx} value={role}>
                {role}
              </option>
            ))}
          </select>

          <div className="custom-scroll" style={{ maxHeight: "600px" }}>
            <CustomCommonTable tableheaders={tableheaders}>
              {filteredUsers?.map((item, i) => (
                <TableRow key={item.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{moment(item?.createdAt).format("YYYY-MM-DD")}</TableCell>
                  <TableCell>{item?.name || ""}</TableCell>
                  <TableCell>{item?.businessName || ""}</TableCell>
                  <TableCell>{item?.email || ""}</TableCell>
                  <TableCell>{item?.role || ""}</TableCell>
                  <TableCell sx={{ textAlign: "start", maxWidth: "40px" }}>
                    <span
                      style={{
                        color:
                          item?.status === "Active"
                            ? "green"
                            : item?.status === "Pending"
                            ? "goldenrod"
                            : item?.status === "Suspended"
                            ? "red"
                            : "gray",
                        fontWeight: "bold",
                        fontSize: "11px",
                      }}
                    >
                      {item?.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </CustomCommonTable>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};

export default ManageUsers;
