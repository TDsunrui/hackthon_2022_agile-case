import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const priorityMapper = {
  low: 'Low',
  normal: 'Normal',
  high: 'High',
  urgent: 'Urgent',
};

export const statusMapper = {
  new: 'New',
  open: 'Open',
  pending: 'Pending',
  onHold: 'On-hold',
  resolved: 'Resolved',
  closed: 'Closed',
};

export interface CaseModel {
  id: string;
  title: string;
  agent: string;
  group: string;
  phone: string;
  email: string;
  type: 'call' | 'email';
  status: keyof typeof statusMapper;
  priority: keyof typeof priorityMapper;
  due_date: string;
}

export enum SortedKeyEnum {
  Priority = 'priority',
  Status = 'status',
}

interface CaseState {
  sortedKey: SortedKeyEnum;
  caseList: CaseModel[];
}

const initialState: CaseState = {
  sortedKey: SortedKeyEnum.Priority,
  caseList: [
    {
      id: '1',
      title: 'Ticket_1',
      agent: 'sunrui',
      group: 'kirin',
      phone: 'phone-1',
      email: 'email-1',
      type: 'call',
      status: 'new',
      priority: 'low',
      due_date: '24 Apr 12:00 AM',
    },
    {
      id: '2',
      title: 'Ticket_2',
      agent: 'sunrui',
      group: 'kirin',
      phone: 'phone-2',
      email: 'email-2',
      type: 'call',
      status: 'open',
      priority: 'normal',
      due_date: '24 Apr 13:00 AM',
    },
    {
      id: '3',
      title: 'Ticket_3',
      agent: 'sunrui',
      group: 'kirin',
      phone: 'phone-3',
      email: 'email-3',
      type: 'call',
      status: 'open',
      priority: 'high',
      due_date: '24 Apr 14:00 AM',
    },
    {
      id: '4',
      title: 'Ticket_4',
      agent: 'heshun',
      group: 'kirin',
      phone: 'phone-4',
      email: 'email-4',
      type: 'email',
      status: 'resolved',
      priority: 'high',
      due_date: '24 Apr 15:00 AM',
    },
    {
      id: '5',
      title: 'Ticket_5',
      agent: 'sunrui',
      group: 'kirin',
      phone: 'phone-5',
      email: 'email-5',
      type: 'call',
      status: 'new',
      priority: 'urgent',
      due_date: '24 Apr 16:00 AM',
    },
    {
      id: '6',
      title: 'Ticket_6',
      agent: 'heshun',
      group: 'kirin',
      phone: 'phone-6',
      email: 'email-6',
      type: 'email',
      status: 'closed',
      priority: 'high',
      due_date: '24 Apr 17:00 AM',
    },
    {
      id: '7',
      title: 'Ticket_7',
      agent: 'sunrui',
      group: 'kirin',
      phone: 'phone-7',
      email: 'email-7',
      type: 'email',
      status: 'resolved',
      priority: 'low',
      due_date: '24 Apr 18:00 AM',
    },
    {
      id: '8',
      title: 'Ticket_8',
      agent: 'sunrui',
      group: 'kirin',
      phone: 'phone-8',
      email: 'email-8',
      type: 'email',
      status: 'resolved',
      priority: 'normal',
      due_date: '24 Apr 19:00 AM',
    },
    {
      id: '9',
      title: 'Ticket_9',
      agent: 'heshun',
      group: 'kirin',
      phone: 'phone-9',
      email: 'email-9',
      type: 'email',
      status: 'pending',
      priority: 'urgent',
      due_date: '24 Apr 20:00 AM',
    },
    {
      id: '10',
      title: 'Ticket_10',
      agent: 'sunrui',
      group: 'kirin',
      phone: 'phone-10',
      email: 'email-10',
      type: 'email',
      status: 'resolved',
      priority: 'low',
      due_date: '24 Apr 21:00 AM',
    },
    {
      id: '11',
      title: 'Ticket_11',
      agent: 'sunrui',
      group: 'kirin',
      phone: 'phone-11',
      email: 'email-11',
      type: 'email',
      status: 'onHold',
      priority: 'low',
      due_date: '24 Apr 22:00 AM',
    },
  ],
}

const caseSlice = createSlice({
  name: 'case',
  initialState,
  reducers: {
    setSortedKey: (state, action: PayloadAction<SortedKeyEnum>) => {
      state.sortedKey = action.payload;
    },
    updateById: (state, action: PayloadAction<{ id: CaseModel['id'], data: Partial<CaseModel> }>) => {
      const index = state.caseList.findIndex((item) => item.id === action.payload.id);
      const oldCase = state.caseList[index];
      const newCase = Object.assign({}, oldCase, action.payload.data);
      const caseList = [...state.caseList];
      caseList[index] = newCase;
      state.caseList = caseList;
    },
  }
});

export const { setSortedKey, updateById } = caseSlice.actions;

export default caseSlice.reducer;
