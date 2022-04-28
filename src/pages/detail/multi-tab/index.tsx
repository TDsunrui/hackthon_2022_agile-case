import { Card } from "antd";
import { MessageOutlined, PhoneOutlined } from "@ant-design/icons";

import { useAppDispatch } from "@/app/hooks";

import { setCurCaseId, CaseModel } from "@/slices/case/caseSlice";

import "./index.scss";

export interface MultiTabProps {
  caseList: CaseModel[];
  curCaseId: string | undefined;
}

function MultiTab(props: MultiTabProps) {
  const { caseList, curCaseId } = props;
  const dispatch = useAppDispatch();

  const handleClickCaseItem = (id: string) => {
    dispatch(setCurCaseId(id));
  };

  return (
    <div className="multiTab">
      {caseList.map((item) => {
        return (
          <Card
            key={item.id}
            hoverable
            style={{ width: "100%" }}
            className={`${
              item.id === curCaseId ? "active card-item" : "card-item"
            }`}
            onClick={() => {
              handleClickCaseItem(item.id);
            }}
          >
            <div className="item-t">
              {item.source === "Email" ? (
                <MessageOutlined />
              ) : (
                <PhoneOutlined />
              )}{" "}
              <span>{item.group}</span>
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
