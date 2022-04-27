import { useState } from "react";
import { Divider, Avatar, Dropdown, Menu } from "antd";
import { LinkOutlined, CaretDownOutlined } from "@ant-design/icons";

import { useAppDispatch } from "@/app/hooks";

import { CaseModel, updateById } from "@/slices/case/caseSlice";

import "./index.scss";

export interface PropertyPannelProps {
  data: CaseModel;
}

function PropertyPannel(props: PropertyPannelProps) {
  const { data } = props;
  const dispatch = useAppDispatch();

  const [language, setLanguage] = useState("China");
  const [classifications, setClassifications] = useState("Problem");

  const handleChangeStatus = (status: CaseModel["status"]) => {
    dispatch(
      updateById({
        id: data.id,
        data: { status },
      })
    );
  };

  const handleChangePriority = (priority: CaseModel["priority"]) => {
    dispatch(
      updateById({
        id: data.id,
        data: { priority },
      })
    );
  };

  const StatusOverlay = (
    <Menu
      items={[
        { label: "New", key: "New" },
        { label: "Open", key: "Open" },
        { label: "Pending", key: "Pending" },
        { label: "On-hold", key: "On-hold" },
        { label: "Resolved", key: "Resolved" },
        { label: "Closed", key: "Closed" },
      ]}
      onClick={({ key }) => handleChangeStatus(key as any)}
    />
  );

  const PriorityOverlay = (
    <Menu
      items={[
        { label: "Urgent", key: "Urgent" },
        { label: "High", key: "High" },
        { label: "Medium", key: "Medium" },
        { label: "Low", key: "Low" },
      ]}
      onClick={({ key }) => handleChangePriority(key as any)}
    />
  );
  const LanguageOverlay = (
    <Menu
      items={[
        { label: "America", key: "America" },
        { label: "China", key: "China" },
        { label: "Japan", key: "Japan" },
        { label: "Korean", key: "Korean" },
        { label: "Urdu", key: "Urdu" },
      ]}
      onClick={({ key }) => setLanguage(key)}
    />
  );
  const ClassificationsOverlay = (
    <Menu
      items={[
        { label: "Question", key: "Question" },
        { label: "Problem", key: "Problem" },
        { label: "Feature", key: "Feature" },
        { label: "Others", key: "Others" },
      ]}
      onClick={({ key }) => setClassifications(key)}
    />
  );

  return (
    <div className="property">
      <div className="black">admin</div>
      <div className="link">
        <LinkOutlined style={{ color: "#8635F2", marginRight: "6px" }} />
        <span>TalkDesk</span>
      </div>
      <div className="black">19053454356@qq.com</div>
      <Divider dashed></Divider>

      <div className="property-item">
        <div className="item-t">Assigned To</div>
        <div className="item-b inline black">
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <span>{data.agent}</span>
        </div>
      </div>
      <div className="property-item">
        <div className="item-t">Status</div>
        <div className="item-b black">
          <Dropdown trigger={["click"]} overlay={StatusOverlay}>
            <div className="dropdown-item">
              <span>{data.status}</span>
              <CaretDownOutlined style={{ fontSize: "12px" }} />
            </div>
          </Dropdown>
        </div>
      </div>
      <div className="property-item">
        <div className="item-t">Due Date</div>
        <div className="item-b black">{data.due_date}</div>
      </div>

      <div className="info-tit black">Ticket Information</div>
      <div className="property-item">
        <div className="item-t">Phone</div>
        <div className="item-b black">{data.phone}</div>
      </div>
      <div className="property-item">
        <div className="item-t">Product Name</div>
        <div className="item-b black">{data.group}</div>
      </div>
      <div className="property-item">
        <div className="item-t">Skills</div>
        <div className="item-b black">-None-</div>
      </div>

      <div className="info-tit black">Additional Information</div>
      <div className="property-item">
        <div className="item-t">Priority</div>
        <div className="item-b black">
          <Dropdown trigger={["click"]} overlay={PriorityOverlay}>
            <div className="dropdown-item">
              <span>{data.priority}</span>
              <CaretDownOutlined style={{ fontSize: "12px" }} />
            </div>
          </Dropdown>
        </div>
      </div>
      <div className="property-item">
        <div className="item-t">Language</div>
        <div className="item-b black">
          <Dropdown trigger={["click"]} overlay={LanguageOverlay}>
            <div className="dropdown-item">
              <span>{language}</span>
              <CaretDownOutlined style={{ fontSize: "12px" }} />
            </div>
          </Dropdown>
        </div>
      </div>
      <div className="property-item">
        <div className="item-t">Classifications</div>
        <div className="item-b black">
          <Dropdown trigger={["click"]} overlay={ClassificationsOverlay}>
            <div className="dropdown-item">
              <span>{classifications}</span>
              <CaretDownOutlined style={{ fontSize: "12px" }} />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default PropertyPannel;
