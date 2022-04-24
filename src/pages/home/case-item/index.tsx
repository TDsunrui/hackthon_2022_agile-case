import { Avatar, Select } from 'antd';

import { CaseModel, sourceMapper, updateById } from '@/slices/case/caseSlice';

import './index.scss';
import { useAppDispatch } from '@/app/hooks';

const { Option } = Select;

export interface CaseItemProps {
  data: CaseModel;
}

function CaseItem(props: CaseItemProps) {
  const { data } = props;

  const dispatch = useAppDispatch();

  const handleChangeStatus = (id: string, status: CaseModel['status']) => {
    console.log(id, status);
    
    dispatch(updateById({
      id,
      data: { status },
    }));
  };
  
  return (
    <div className="case-item-container">
      <div className="case-item-left">{sourceMapper[data.source]}</div>

      <div className="case-item-middle">
        <div className="case-item-middle-first">
          #{data.id} {data.title}
        </div>

        <div className="case-item-middle-second">
          {data.due_date}
        </div>

        <div className="case-item-middle-third">
          <Select
            style={{ width: 120 }}
            bordered={false}
            value={data.status}
            onChange={(value) => handleChangeStatus(data.id, value)}
          >
            <Option value="new">New</Option>
            <Option value="open">Open</Option>
            <Option value="pending">Pending</Option>
            <Option value="onHold">On-hold</Option>
            <Option value="resolved">Resolved</Option>
            <Option value="closed">Closed</Option>
          </Select>
        </div>
      </div>

      <div className="case-item-right">
        <Avatar size="small">{data.agent}</Avatar>
      </div>
    </div>
  );
}

export default CaseItem;
