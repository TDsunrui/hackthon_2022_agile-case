import React from "react";
import { Divider, Typography } from "antd";

import CaseItem from "../case-item";

import { SortedCaseModel } from "@/utils/sortCaseListByKey";

import './index.scss';

export interface CaseCardProps {
  data: SortedCaseModel;
}

function CaseCard(props: CaseCardProps) {
  const { data } = props;
  
  return (
    <div className="case-card-container">
      <Typography.Text className="case-card-header" strong>
        {data.title} ({data.list.length})
      </Typography.Text>

      <div className="case-card-content">
        {data.list.map((item) => (
          <React.Fragment key={item.id}>
            <Divider style={{ margin: 0 }} />
            <CaseItem data={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CaseCard;
