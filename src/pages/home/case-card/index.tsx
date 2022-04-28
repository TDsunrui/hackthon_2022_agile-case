import React from "react";
import { Divider, Typography } from "antd";
import { Draggable, Droppable } from "react-beautiful-dnd";

import CaseItem from "../case-item";

import { SortedCaseModel } from "@/utils/sortCaseListByKey";

import './index.scss';

export interface CaseCardProps {
  data: SortedCaseModel;
}

function CaseCard(props: CaseCardProps) {
  const { data } = props;
  
  return (
    <Droppable droppableId={data.title} ignoreContainerClipping>
      {(provided) => (
        <div className="case-card-container">
          {/* title & total */}
          <Typography.Text className="case-card-header" strong>
            {data.title} ({data.list.length})
          </Typography.Text>

          {data.list.length > 0 && <Divider style={{ margin: 0 }} />}

          <div
            className="case-card-content"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {data.list.map((item, index) => (
              <React.Fragment key={item.id}>
                <Draggable draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <CaseItem data={item} dragProvided={provided} snapshot={snapshot} />
                  )}
                </Draggable>

                <Divider style={{ margin: 0 }} />
              </React.Fragment>
            ))}

            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default CaseCard;
