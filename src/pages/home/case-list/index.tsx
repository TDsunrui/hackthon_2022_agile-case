import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import CaseCard from '../case-card';

import { useAppDispatch, useAppSelector } from '@/app/hooks';

import { SortedCaseModel } from '@/utils/sortCaseListByKey';

import './index.scss';
import { updateById } from '@/slices/case/caseSlice';

export interface CaseListProps {
  sortedCaseList: SortedCaseModel[];
}

function CaseList(props: CaseListProps) {
  const { sortedCaseList } = props;

  const sortedKey = useAppSelector((state) => state.case.sortedKey);
  const dispatch = useAppDispatch();

  const onDragEnd = (result: DropResult) => {
    const { draggableId, source, destination } = result;
    if (!destination) return;

    const { droppableId: sourceId } = source;
    const { droppableId: targetId } = destination;

    if (sourceId === targetId) return;

    dispatch(updateById({
      id: draggableId,
      data: { [sortedKey]: targetId },
    }));
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="case-list-container">
        {sortedCaseList.map((sortedCase) => (
          <CaseCard key={sortedCase.value} data={sortedCase} />
        ))}
      </div>
    </DragDropContext>
  );
}

export default CaseList;
