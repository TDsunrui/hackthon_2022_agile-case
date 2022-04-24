import { CaseModel, priorityMapper, SortedKeyEnum, statusMapper } from '@/slices/case/caseSlice';

export interface SortedCaseModel {
  value: CaseModel[SortedKeyEnum];
  title: string;
  list: CaseModel[];
}

const sortCaseListByKey = (caseList: CaseModel[], key: SortedKeyEnum) => {
  const result: SortedCaseModel[] = [];
  
  switch (key) {
    case 'priority':
      const priorityOrder: CaseModel['priority'][] = ['urgent', 'high', 'normal', 'low'];
      priorityOrder.forEach((curPriority, index) => {
        result[index] = {
          value: curPriority,
          title: priorityMapper[curPriority],
          list: caseList.filter((item) => item.priority === curPriority),
        };
      });
      break;
    case 'status':
      const statusOrder: CaseModel['status'][] = ['new', 'open', 'pending', 'onHold', 'resolved', 'closed'];
      statusOrder.forEach((curStatus, index) => {
        result[index] = {
          value: curStatus,
          title: statusMapper[curStatus],
          list: caseList.filter((item) => item.status === curStatus),
        };
      });
      break;
  }

  return result;
};

export default sortCaseListByKey;
