import { useMemo } from 'react';
import { Select } from 'antd';

import CaseList from './case-list';

import { useAppDispatch, useAppSelector } from '@/app/hooks';

import { setSortedKey, SortedKeyType } from '@/slices/case/caseSlice';

import sortCaseListByKey from '@/utils/sortCaseListByKey';

const { Option } = Select;

function Home() {
  const { sortedKey, caseList } = useAppSelector((state) => state.case);
  const dispatch = useAppDispatch();

  const sortedCaseList = useMemo(() => {
    return sortCaseListByKey(caseList, sortedKey);
  }, [caseList, sortedKey]);
  
  return (
    <>
      <Select<SortedKeyType>
        style={{ width: 100 }}
        value={sortedKey}
        onChange={(value) => dispatch(setSortedKey(value))}
      >
        <Option value="priority">Priority</Option>
        <Option value="status">Status</Option>
      </Select>
      
      <CaseList sortedCaseList={sortedCaseList} />
    </>
  );
}

export default Home;
