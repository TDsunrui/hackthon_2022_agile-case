import { useState } from "react";
import { Timeline, Checkbox, Dropdown, Menu } from "antd";
import {
  ClockCircleOutlined,
  CaretDownOutlined,
  MessageOutlined,
  PhoneOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

import "./index.scss";
function History() {
  const [filter, setFilter] = useState("");

  const StatusOverlay = (
    <Menu
      items={[
        { label: "Incoming Responses", key: "Incoming Responses" },
        { label: "Outgoing Responses", key: "Outgoing Responses" },
        { label: "Status", key: "Status" },
        { label: "Comments", key: "Comments" },
        { label: "Attachments", key: "Attachments" },
        { label: "Approvals", key: "Approvals" },
      ]}
      onClick={({ key }) => setFilter(key)}
    />
  );

  return (
    <div className="history">
      <div className="history-t">
        <Checkbox>Show only my activities</Checkbox>
        <div className="filter-by">
          <Dropdown
            placement="bottomRight"
            arrow
            trigger={["click"]}
            overlay={StatusOverlay}
          >
            <div className="dropdown-item">
              <span>Filter by</span>
              <span>{filter ? "：" + filter : filter}</span>
               <CaretDownOutlined style={{ fontSize: "12px" }} />
            </div>
          </Dropdown>
        </div>
      </div>
      <Timeline className="timeline">
        <Timeline.Item
          dot={
            <div className="timeline-dot">
              <MessageOutlined />
            </div>
          }
        >
          <span className="small">25 Apr202208:00 PM</span>
          <div className="black">
            chengyu dai has removed tag(s) from the ticket
          </div>
          <div className="black">Tags callback</div>
        </Timeline.Item>
        <Timeline.Item
          dot={
            <div className="timeline-dot">
              <PhoneOutlined />
            </div>
          }
        >
          <span className="small">07:36 PM</span>
          <div className="black">
            chengyu dai has removed tag(s) from the ticket
          </div>
        </Timeline.Item>
        <Timeline.Item
          dot={
            <div className="timeline-dot">
              <ClockCircleOutlined />
            </div>
          }
        >
          <span className="small">25 Apr202208:00 PM</span>
          <div className="black">
            chengyu dai has removed tag(s) from the ticket
          </div>
          <div className="black">Tags callback</div>
        </Timeline.Item>
        <Timeline.Item
          dot={
            <div className="timeline-dot">
              <FieldTimeOutlined />
            </div>
          }
        >
          <span className="small">25 Apr202208:00 PM</span>
          <div className="black">
            chengyu dai has removed tag(s) from the ticket
          </div>
          <div className="black">Tags callback</div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default History;
