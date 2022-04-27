import { Card } from "antd";
import { MessageOutlined, PhoneOutlined } from "@ant-design/icons";

import { useAppSelector } from "@/app/hooks";

import "./index.scss";

function MultiTab() {
  const { caseList } = useAppSelector((state) => state.case);

  return (
    <div className="multiTab">
      {caseList.map((item) => {
        return (
          <Card hoverable style={{ width: "100%" }} className={`${item.id === '1' ? 'active card-item' : 'card-item'}`} key={item.id}>
            <div className="item-t">
              {item.source === 'Email' ? <MessageOutlined /> : <PhoneOutlined />} <span>{item.group}</span>
            </div>
            <div className="item-m">{item.due_date}</div>
            <div className="item-b">
              #{item.id} {item.title}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default MultiTab;
