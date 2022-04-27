import { useState } from "react";
import { Avatar, List, Popover, Space, Tabs, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

import { useAppDispatch } from "@/app/hooks";

import { CaseModel, updateById } from "@/slices/case/caseSlice";

import notification from "@/utils/notification";

import './index.scss';

const { TabPane } = Tabs;

const agentList = [
  { name: 'Rui Sun', avatar: 'RS' },
  { name: 'Shun He', avatar: 'SH' },
  { name: 'Zhongxian Luo', avatar: 'ZX' },
  { name: 'Chengyu Dai', avatar: 'CY' },
  { name: 'Lyndon', avatar: 'LY' },
];

export interface CaseItemAgentProps {
  data: CaseModel;
}

function CaseItemAgent(props: CaseItemAgentProps) {
  const { data } = props;

  const dispatch = useAppDispatch();

  const [visible, setVisible] = useState(false);

  const changeAgent = (agent: CaseModel['agent'], active: boolean) => {
    if (!active) {
      dispatch(updateById({
        id: data.id,
        data: { agent },
      }));
  
      notification('Agent updated successfully');
    }
    
    setVisible(false);
  };
  
  const popoverContent = (
    <Tabs defaultActiveKey="Agents" size="small">
      <TabPane tab="Agents" key="Agents">
        <List
          dataSource={agentList}
          renderItem={(item) => {
            const active = data.agent === item.avatar;
            return (
              <List.Item
                className={`case-item-agent-line ${active ? 'active' : ''}`}
                onClick={() => changeAgent(item.avatar, active)}
              >
                <Space align="center">
                  {/* avatar */}
                  <Avatar className="case-item-agent-avatar" size="small">
                    {item.avatar}
                  </Avatar>

                  {/* name */}
                  <Typography.Text className="case-item-agent-name">
                    {item.name}
                  </Typography.Text>

                  {/* check icon */}
                  {active && <CheckCircleOutlined className="case-item-agent-check-icon" />}
                </Space>
              </List.Item>
            );
          }}
        />
      </TabPane>

      <TabPane style={{ padding: '12px 16px' }} tab="Groups" key="Groups">
        No groups have been added yet.
      </TabPane>
    </Tabs>
  );
  
  return (
    <Popover
      content={popoverContent}
      placement="bottomRight"
      trigger="click"
      visible={visible}
      overlayStyle={{ width: '250px' }}
      destroyTooltipOnHide
      onVisibleChange={setVisible}
    >
      <Avatar size="small" style={{ cursor: 'pointer' }}>{data.agent}</Avatar>
    </Popover>
  );
}

export default CaseItemAgent;
