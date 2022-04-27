import { ArrowLeftOutlined } from "@ant-design/icons";

import MultiTab from "./multi-tab";
import PropertyPannel from "./property-pannel";
import DetailPannel from "./detail-pannel";

import { useAppSelector } from "@/app/hooks";

import "./index.scss";

function Detail() {
  const { caseList } = useAppSelector((state) => state.case);
  const data = caseList[0];

  const random = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  return (
    <div className="detail-page">
      <div className="detail-l">
        <div className="back">
          <ArrowLeftOutlined
            style={{ fontSize: "14px", color: "#000", cursor: "pointer" }}
          />
          <div className="overdue">
            <span>Overdue</span>
            <span>（{random()}）</span>
          </div>
        </div>
        <div className="multi-tab-wrap">
          <MultiTab></MultiTab>
        </div>
      </div>

      <PropertyPannel data={data}></PropertyPannel>

      <DetailPannel data={data}></DetailPannel>
    </div>
  );
}

export default Detail;
