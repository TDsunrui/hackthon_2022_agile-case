import { Avatar, Popover, Tabs } from "antd";

import { CaseModel } from "@/slices/case/caseSlice";

const { TabPane } = Tabs;

export interface CaseItemAgentProps {
  data: CaseModel;
}

function CaseItemAgent(props: CaseItemAgentProps) {
  const { data } = props;
  
  const popoverContent = (
    <Tabs
      tabBarStyle={{ margin: 0 }}
      defaultActiveKey="Agents"
      onChange={(activeKey) => console.log(activeKey)}
    >
      <TabPane tab="Agents" key="Agents">
        Content of Tab Pane Agents
      </TabPane>

      <TabPane tab="Groups" key="Groups">
        Content of Tab Pane Groups
      </TabPane>
    </Tabs>
  )
  
  return (
    <Popover content={popoverContent}>
      <Avatar size="small" style={{ cursor: 'pointer' }}>{data.agent}</Avatar>
    </Popover>
  );
}

export default CaseItemAgent;
