import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import JsButton from "../../common/JsButton";
import { toast } from "react-toastify";

const dummyNotifications = [
  { id: 1, message: "Purchase #201 needs approval", read: false },
  { id: 2, message: "Purchase #202 needs approval", read: false },
  { id: 3, message: "Purchase #204 needs approval", read: false },
  { id: 4, message: "Purchase #206 needs approval", read: false },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(dummyNotifications);

  const handleMarkRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    toast.success('Success')
  };

  return (
    <div className="mt-3">
      <h5>Notifications</h5>
      <ListGroup>
        {notifications.map((n) => (
          <ListGroup.Item
            key={n.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: n.read ? "#f0f0f0" : "white",
            }}
          >
            {n.message}
            {!n.read && (
              <JsButton variant="contained" style={{background:"#176E6D"}} size="small" onClick={() => handleMarkRead(n.id)}>
                Mark as Read
              </JsButton>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Notifications;
