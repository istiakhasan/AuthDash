import React, { useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import CustomCommonTable from "../../common/CustomCommonTable";
import moment from "moment";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";

// Dummy purchases data
const purchasesDataDummy = [
  { id: 201, buyer: "John Doe", product: "iPhone 15 Pro", quantity: 2, amount: 2400, status: "Pending", date: "2025-02-10" },
  { id: 202, buyer: "Jane Smith", product: "Samsung Galaxy S24", quantity: 1, amount: 1200, status: "Pending", date: "2025-02-11" },
  { id: 203, buyer: "Michael Johnson", product: "MacBook Air M3", quantity: 1, amount: 1500, status: "Approved", date: "2025-02-05" },
  { id: 204, buyer: "Emily Davis", product: "Sony WH-1000XM5", quantity: 3, amount: 1050, status: "Pending", date: "2025-02-09" },
  { id: 205, buyer: "Chris Martin", product: "Dell XPS 15", quantity: 1, amount: 1800, status: "Rejected", date: "2025-02-01" },
  { id: 206, buyer: "Sarah Lee", product: "AirPods Pro 2", quantity: 2, amount: 500, status: "Pending", date: "2025-02-07" },
  { id: 207, buyer: "David Wilson", product: "Apple Watch Series 10", quantity: 1, amount: 600, status: "Pending", date: "2025-02-12" },
  { id: 208, buyer: "Sophia Turner", product: "iPad Pro 12.9", quantity: 1, amount: 1300, status: "Approved", date: "2025-02-03" },
  { id: 209, buyer: "Liam Harris", product: "Google Pixel 9", quantity: 2, amount: 2000, status: "Pending", date: "2025-02-13" },
  { id: 210, buyer: "Olivia Clark", product: "OnePlus 12", quantity: 1, amount: 950, status: "Pending", date: "2025-02-14" },
];

const ApprovePurchase = () => {
    const { purchasesData } = useSelector((state) => state.data);
  const [purchases, setPurchases] = useState(purchasesDataDummy);

  const tableHeaders = [
    { id: "sl", numeric: true, disablePadding: true, label: "SL" },
    { id: "date", numeric: true, disablePadding: false, label: "Date" },
    { id: "buyer", numeric: true, disablePadding: false, label: "Buyer" },
    { id: "product", numeric: true, disablePadding: false, label: "Product" },
    { id: "quantity", numeric: true, disablePadding: false, label: "Quantity" },
    { id: "amount", numeric: true, disablePadding: false, label: "Amount ($)" },
    { id: "status", numeric: true, disablePadding: false, label: "Status" },
    { id: "action", numeric: true, disablePadding: false, label: "Action" },
  ];

  const handleApprove = (id) => {
    setPurchases((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Approved" } : item
      )
    );
  };

  return (
    <Tabs className="mb-3" defaultActiveKey="approve_purchases">
      <Tab title="Approve Purchases" eventKey="approve_purchases">
        <div className="table-responsive mt-2">
          <div className="custom-scroll" style={{ maxHeight: "600px" }}>
            <CustomCommonTable tableheaders={tableHeaders}>
              {purchasesData?.map((item, i) => (
                <TableRow key={item.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{moment(item.date).format("YYYY-MM-DD")}</TableCell>
                  <TableCell>{item.buyer}</TableCell>
                  <TableCell>{item.product}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>
                    <span
                      style={{
                        color:
                          item.status === "Approved"
                            ? "green"
                            : item.status === "Rejected"
                            ? "red"
                            : "goldenrod",
                        fontWeight: "bold",
                        fontSize: "11px",
                      }}
                    >
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <button
                      disabled={item.status !== "Pending"}
                      onClick={() => handleApprove(item.id)}
                    >
                      Approve
                    </button>
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

export default ApprovePurchase;
