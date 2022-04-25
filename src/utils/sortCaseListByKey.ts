import { CaseModel, SortedKeysType } from '@/slices/case/caseSlice';

export interface SortedCaseModel {
  value: CaseModel['priority' | 'status'];
  title: string;
  list: CaseModel[];
}

const sortCaseListByKey = (caseList: CaseModel[], key: SortedKeysType) => {
  const result: SortedCaseModel[] = [];
  
  switch (key) {
    case 'Priority':
      const priorityOrder: CaseModel['priority'][] = ['Urgent', 'High', 'Normal', 'Low'];
      priorityOrder.forEach((curPriority, index) => {
        result[index] = {
          value: curPriority,
          title: curPriority,
          list: caseList.filter((item) => item.priority === curPriority),
        };
      });
      break;
    case 'Status':
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
