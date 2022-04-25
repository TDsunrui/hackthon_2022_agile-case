import { Dropdown, Menu } from 'antd';

import CaseItemAgent from '../case-item-agent';

import { useAppDispatch } from '@/app/hooks';

import { CaseModel, updateById } from '@/slices/case/caseSlice';

import './index.scss';

export interface CaseItemProps {
  data: CaseModel;
}

function CaseItem(props: CaseItemProps) {
  const { data } = props;

  const dispatch = useAppDispatch();

  const handleChangeStatus = (status: CaseModel['status']) => {
    dispatch(updateById({
      id: data.id,
      data: { status },
    }));
  };
  
  const DropdownOverlay = (
    <Menu
      items={[
        { label: 'New', key: 'New' },
        { label: 'Open', key: 'Open' },
        { label: 'Pending', key: 'Pending' },
        { label: 'On-hold', key: 'On-hold' },
        { label: 'Resolved', key: 'Resolved' },
        { label: 'Closed', key: 'Closed' },
      ]}
      onClick={({ key }) => handleChangeStatus(key as any)}
    />
  );
  
  return (
    <div className="case-item-container">
      <div className="case-item-left">{data.source}</div>

      <div className="case-item-middle">
        <div className="case-item-middle-first">
          #{data.id} {data.title}
        </div>

        <div className="case-item-middle-second">
          {data.due_date}
        </div>

        <div className="case-item-middle-third">
          <Dropdown overlay={DropdownOverlay}>
            <span className="case-item-middle-third-status">{data.status}</span>
          </Dropdown>
        </div>
      </div>

      <div className="case-item-right">
        <CaseItemAgent data={data} />
      </div>
    </div>
  );
}

export default CaseItem;
