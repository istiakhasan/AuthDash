import React, { useState } from "react";
import { Form, InputGroup, Tab, Tabs } from "react-bootstrap";
import JsButton from "../../common/JsButton";

const SetContributionRate = () => {
  const [rate, setRate] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rate === "" || isNaN(rate) || rate < 0 || rate > 100) {
      alert("Please enter a valid rate between 0 and 100.");
      return;
    }
    setSuccessMsg(`Contribution rate set to ${rate}%`);
  };

  return (
    <Tabs className="mb-3" defaultActiveKey="approve_purchases">
      <Tab title="Set Contribution Rate" eventKey="approve_purchases">
    <div className="mt-3">
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3" style={{ maxWidth: "300px" }}>
          <Form.Control
            type="number"
            placeholder="Enter contribution rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            min={0}
            max={100}
          />
          <InputGroup.Text>%</InputGroup.Text>
        </InputGroup>
        <JsButton variant="contained" style={{background:"#176E6D"}} type="submit">Set Rate</JsButton>
      </Form>
      {successMsg && <p style={{ color: "green", marginTop: "10px" }}>{successMsg}</p>}
    </div>
    </Tab>
    </Tabs>
  );
};

export default SetContributionRate;
