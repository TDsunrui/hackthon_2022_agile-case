import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CaseModel {
  id: string;
  title: string;
  agent: string;
  group: string;
  phone: string;
  email: string;
  source: 'Call' | 'Email';
  status: 'New' | 'Open' | 'Pending' | 'On-hold' | 'Resolved' | 'Closed';
  priority: 'Low' | 'Normal' | 'High' | 'Urgent';
  due_date: string;
}

export const SortedKeyMapper = {
  priority: 'Priority',
  status: 'Status',
}
export type SortedKeyType = keyof typeof SortedKeyMapper;

interface CaseState {
  curPage: 'home' | 'detail-modal' | 'detail';
  curCaseId?: string;
  curCase?: CaseModel;
  sortedKey: SortedKeyType;
  caseList: CaseModel[];
}

const initialState: CaseState = {
  curPage: 'home',
  curCaseId: undefined,
  curCase: undefined,
  sortedKey: 'priority',
  caseList: [
    {
      id: '1',
      title: 'Ticket_1',
      agent: 'RS',
      group: 'kirin',
      phone: 'phone-1',
      email: 'email-1',
      source: 'Call',
      status: 'New',
      priority: 'Low',
      due_date: '24 Apr 12:00 AM',
    },
    {
      id: '2',
      title: 'Ticket_2',
      agent: 'RS',
      group: 'kirin',
      phone: 'phone-2',
      email: 'email-2',
      source: 'Call',
      status: 'Open',
      priority: 'Normal',
      due_date: '24 Apr 13:00 AM',
    },
    {
      id: '3',
      title: 'Ticket_3',
      agent: 'RS',
      group: 'kirin',
      phone: 'phone-3',
      email: 'email-3',
      source: 'Call',
      status: 'Open',
      priority: 'High',
      due_date: '24 Apr 14:00 AM',
    },
    {
      id: '4',
      title: 'Ticket_4',
      agent: 'SH',
      group: 'kirin',
      phone: 'phone-4',
      email: 'email-4',
      source: 'Email',
      status: 'Resolved',
      priority: 'High',
      due_date: '24 Apr 15:00 AM',
    },
    {
      id: '5',
      title: 'Ticket_5',
      agent: 'RS',
      group: 'kirin',
      phone: 'phone-5',
      email: 'email-5',
      source: 'Call',
      status: 'New',
      priority: 'Urgent',
      due_date: '24 Apr 16:00 AM',
    },
    {
      id: '6',
      title: 'Ticket_6',
      agent: 'SH',
      group: 'kirin',
      phone: 'phone-6',
      email: 'email-6',
      source: 'Email',
      status: 'Closed',
      priority: 'High',
      due_date: '24 Apr 17:00 AM',
    },
    {
      id: '7',
      title: 'Ticket_7',
      agent: 'RS',
      group: 'kirin',
      phone: 'phone-7',
      email: 'email-7',
      source: 'Email',
      status: 'Resolved',
      priority: 'Low',
      due_date: '24 Apr 18:00 AM',
    },
    {
      id: '8',
      title: 'Ticket_8',
      agent: 'RS',
      group: 'kirin',
      phone: 'phone-8',
      email: 'email-8',
      source: 'Email',
      status: 'Resolved',
      priority: 'Normal',
      due_date: '24 Apr 19:00 AM',
    },
    {
      id: '9',
      title: 'Ticket_9',
      agent: 'SH',
      group: 'kirin',
      phone: 'phone-9',
      email: 'email-9',
      source: 'Email',
      status: 'Pending',
      priority: 'Urgent',
      due_date: '24 Apr 20:00 AM',
    },
    {
      id: '10',
      title: 'Ticket_10',
      agent: 'RS',
      group: 'kirin',
      phone: 'phone-10',
      email: 'email-10',
      source: 'Email',
      status: 'Resolved',
      priority: 'Low',
      due_date: '24 Apr 21:00 AM',
    },
    {
      id: '11',
      title: 'Ticket_11',
      agent: 'RS',
      group: 'kirin',
      phone: 'phone-11',
      email: 'email-11',
      source: 'Email',
      status: 'On-hold',
      priority: 'Low',
      due_date: '24 Apr 22:00 AM',
    },
  ],
}

const caseSlice = createSlice({
  name: 'case',
  initialState,
  reducers: {
    setCurCaseId: (state, action: PayloadAction<CaseState['curCaseId']>) => {
      const curCaseId = action.payload;
      state.curCaseId = curCaseId;
      state.curCase = state.caseList.find((item) => item.id === curCaseId);
    },
    changeRoute: (state, action: PayloadAction<Pick<CaseState, 'curPage' | 'curCaseId'>>) => {
      const { curPage, curCaseId } = action.payload;
      state.curPage = curPage;
      if (curPage === 'home') {
        state.curCaseId = undefined;
        state.curCase = undefined;
      } else if (curPage === 'detail-modal') {
        state.curCaseId = curCaseId;
        state.curCase = state.caseList.find((item) => item.id === curCaseId);
      }
    },
    setSortedKey: (state, action: PayloadAction<SortedKeyType>) => {
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

export const { setCurCaseId, changeRoute, setSortedKey, updateById } = caseSlice.actions;

export default caseSlice.reducer;
