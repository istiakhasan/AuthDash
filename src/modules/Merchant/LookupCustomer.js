import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TableCell, TableRow } from "@mui/material";
import CustomCommonTable from "../../common/CustomCommonTable";
import { Tab, Tabs, Form, InputGroup, Button } from "react-bootstrap";

const LookupCustomer = () => {
  const customersData = useSelector((state) => state.data.customersData);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customersData.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm)
  );

  const tableHeaders = [
    { id: "sl", numeric: true, disablePadding: true, label: "SL" },
    { id: "name", numeric: true, disablePadding: false, label: "Name" },
    { id: "email", numeric: true, disablePadding: false, label: "Email" },
    { id: "phone", numeric: true, disablePadding: false, label: "Phone" },
    { id: "city", numeric: true, disablePadding: false, label: "City" },
    { id: "createdAt", numeric: true, disablePadding: false, label: "Created At" },
  ];

  return (
    <Tabs className="mb-3" defaultActiveKey="lookup_customer">
      <Tab title="Customers" eventKey="lookup_customer">
        <div className="mb-3 mt-2">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search by name, email or phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={() => setSearchTerm("")}>Clear</Button>
          </InputGroup>
        </div>

        <div className="table-responsive mt-2">
          <div className="custom-scroll" style={{ maxHeight: "600px" }}>
            <CustomCommonTable tableheaders={tableHeaders}>
              {filteredCustomers.map((item, i) => (
                <TableRow key={item.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.createdAt}</TableCell>
                </TableRow>
              ))}
            </CustomCommonTable>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};

export default LookupCustomer;
