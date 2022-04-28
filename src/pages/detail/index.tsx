import { ArrowLeftOutlined } from "@ant-design/icons";

import MultiTab from "./multi-tab";
import PropertyPannel from "./property-pannel";
import DetailPannel from "./detail-pannel";

import { useAppSelector, useAppDispatch } from "@/app/hooks";

import { changeRoute } from "@/slices/case/caseSlice";

import "./index.scss";

function Detail() {
  const dispatch = useAppDispatch();
  const { curCase, caseList, curCaseId } = useAppSelector(
    (state) => state.case
  );

  const random = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const handleCancel = () => {
    dispatch(changeRoute({ curPage: "home" }));
  };
  
  console.log(111, curCaseId);

  return (
    <div className="detail-page">
      <div className="detail-l">
        <div className="back">
          <ArrowLeftOutlined
            style={{ fontSize: "14px", color: "#000", cursor: "pointer" }}
            onClick={handleCancel}
          />
          <div className="overdue">
            <span>Overdue</span>
            <span>（{random()}）</span>
          </div>
        </div>
        <div className="multi-tab-wrap">
          <MultiTab caseList={caseList} curCaseId={curCaseId}></MultiTab>
        </div>
      </div>

      {curCase && <PropertyPannel data={curCase}></PropertyPannel>}

      {curCase && <DetailPannel data={curCase}></DetailPannel>}
    </div>
  );
}

export default Detail;
