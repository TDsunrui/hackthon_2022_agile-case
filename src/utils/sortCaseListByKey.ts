import { CaseModel, SortedKeyEnum } from '@/slices/case/caseSlice';

export interface SortedCaseModel {
  value: CaseModel[SortedKeyEnum];
  title: string;
  list: CaseModel[];
}

const sortCaseListByKey = (caseList: CaseModel[], key: SortedKeyEnum) => {
  const result: SortedCaseModel[] = [];
  
  switch (key) {
    case 'priority':
      const priorityOrder: CaseModel['priority'][] = ['Urgent', 'High', 'Normal', 'Low'];
      priorityOrder.forEach((curPriority, index) => {
        result[index] = {
          value: curPriority,
          title: curPriority,
          list: caseList.filter((item) => item.priority === curPriority),
        };
      });
      break;
    case 'status':
      const statusOrder: CaseModel['status'][] = ['New', 'Open', 'Pending', 'On-hold', 'Resolved', 'Closed'];
      statusOrder.forEach((curStatus, index) => {
        result[index] = {
          value: curStatus,
          title: curStatus,
          list: caseList.filter((item) => item.status === curStatus),
        };
      });
      break;
  }

  return result;
};

export default sortCaseListByKey;
