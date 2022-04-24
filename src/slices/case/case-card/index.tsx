import { Divider } from "antd";

import { SortedCaseModel } from "../../../utils/sortCaseListByKey";

import './index.scss';

export interface CaseCardProps {
  data: SortedCaseModel;
}

function CaseCard(props: CaseCardProps) {
  const { data } = props;
  
  return (
    <div className="case-card-container">
      <h4>{data.title} ({data.list.length})</h4>

      <Divider />


    </div>
  );
}

export default CaseCard;
