import { Dropdown, Menu, Typography } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

import CaseItemAgent from '../case-item-agent';

import { useAppDispatch } from '@/app/hooks';

import { CaseModel, updateById } from '@/slices/case/caseSlice';

import notification from '@/utils/notification';

import './index.scss';

export interface CaseItemProps {
  data: CaseModel;
  dragProvided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
}

function CaseItem(props: CaseItemProps) {
  const { data, dragProvided, snapshot } = props;

  const dispatch = useAppDispatch();

  const caseItemClassName = `case-item-container ${snapshot.isDragging ? 'dragging-over' : '' }`;

  const handleChangeStatus = (status: CaseModel['status']) => {
    dispatch(updateById({
      id: data.id,
      data: { status },
    }));

    notification('Status updated successfully');
  };

  const SourceIcon = () => {
    const ComponentName = data.source === 'Call' ? PhoneOutlined : MailOutlined;
    return <ComponentName style={{ marginTop: 2, fontSize: 16, color: '#aaa' }} />
  };
  
  const DropdownOverlay = (
    <Menu
      selectedKeys={[data.status]}
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
    <div
      className={caseItemClassName}
      ref={dragProvided.innerRef}
      {...dragProvided.draggableProps}
      {...dragProvided.dragHandleProps}
    >
      {/* source */}
      <SourceIcon />

      <div className="case-item-wrap">
        <div className="case-item-content">
          {/* id & title */}
          <div className="case-item-content-first">
            #{data.id} {data.title}
          </div>

          {/* due date */}
          <div className="case-item-content-second">
            {data.due_date}
          </div>

          {/* status */}
          <div className="case-item-content-third">
            <Dropdown overlay={DropdownOverlay} trigger={['click']}>
              <Typography.Link className="case-item-middle-third-status">
                {data.status}
              </Typography.Link>
            </Dropdown>
          </div>
        </div>

        {/* agent */}
        <CaseItemAgent data={data} />
      </div>
    </div>
  );
}

export default CaseItem;
