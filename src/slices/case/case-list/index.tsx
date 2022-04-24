import CaseCard from '../case-card';

import { SortedCaseModel } from '@/utils/sortCaseListByKey';

import './index.scss';

export interface CaseListProps {
  sortedCaseList: SortedCaseModel[];
}

function CaseList(props: CaseListProps) {
  const { sortedCaseList } = props;
  
  return (
    <div className="case-list-container">
      {sortedCaseList.map((sortedCase) => (
        <CaseCard data={sortedCase} />
      ))}
    </div>
  );
}

export default CaseList;
