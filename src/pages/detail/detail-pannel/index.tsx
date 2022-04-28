
import { Tabs, Empty, Badge } from "antd";
import {
  MessageOutlined,
  PhoneOutlined,
  FieldTimeOutlined,
  CheckCircleOutlined,
  TagOutlined,
} from "@ant-design/icons";

import History from "./components/history";
import Conversation from "./components/conversation";

import { CaseModel } from "@/slices/case/caseSlice";

import "./index.scss";
import { useState } from "react";
export interface DetailPannelProps {
  data: CaseModel;
}

const { TabPane } = Tabs;

function DetailPannel(props: DetailPannelProps) {
  const { data } = props;
  const [activeKey, setActiveKey] = useState("Conversation");
  const changeHandle = (key: string) => {
    setActiveKey(key);
  };

  const tabs = [
    {
      tab: "CONVERSATION",
      key: "Conversation",
    },
    {
      tab: "RESOLUTION",
      key: "Resolution",
    },
    {
      tab: "INTERNAL NOTES",
      key: "Internal notes",
    },
    {
      tab: "ATTACHMENT",
      key: " Attachment",
    },
    {
      tab: "HISTORY",
      key: "History",
    },
  ];

  const tabContent = (key: string) => {
    switch (key) {
      case "History":
        return <History />;
      case "Conversation":
        return <Conversation />;
      default:
        return (
          <div className="no-data">
            <Empty />
          </div>
        );
    }
  };

  return (
    <div className="detail-pannel">
      <div className="detail-t">
        <div className="tl">
          {data.source === "Email" ? <MessageOutlined /> : <PhoneOutlined />}
        </div>
        <div className="tr">
          <div className="tr-t">
            #{data.id} {data.title}
          </div>
          <div className="tr-b">
            <div className="tr-b-item">
              <FieldTimeOutlined /> {data.due_date}
            </div>
            <div className="tr-b-item">
              <CheckCircleOutlined /> Followers
            </div>
            <div className="tr-b-item">
              <TagOutlined /> Tags
            </div>
          </div>
        </div>
        <div className="ribbon">{data.status}</div>
      </div>
      <Tabs
        activeKey={activeKey}
        tabBarGutter={24}
        onChange={changeHandle}
        className="tabs-wrap"
      >
        {tabs.map((item) => (
          <TabPane
            tab={
              item.key === "Conversation" ? (
                <Badge count={5} color="rgb(134, 53, 242)" size="small">{item.tab}</Badge>
              ) : (
                item.tab
              )
            }
            key={item.key}
          >
            {tabContent(activeKey)}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export default DetailPannel;
