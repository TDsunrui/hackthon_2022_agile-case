import { useEffect, useMemo } from 'react';
import { Button, Select } from 'antd';

import CaseList from './case-list';

import { useAppDispatch, useAppSelector } from '@/app/hooks';

import { setSortedKey, SortedKeyEnum, updateById } from '@/slices/case/caseSlice';

import sortCaseListByKey from '@/utils/sortCaseListByKey';

const { Option } = Select;

function Home() {
  const { sortedKey, caseList } = useAppSelector((state) => state.case);
  const dispatch = useAppDispatch();

  const handleUpdateById = () => {
    dispatch(updateById({
      id: '1',
      data: {
        status: 'Pending',
        priority: 'High',
      },
    }));
  };
  useEffect(() => console.log(caseList), [caseList]);

  const sortedCaseList = useMemo(() => {
    return sortCaseListByKey(caseList, sortedKey);
  }, [caseList, sortedKey]);
  useEffect(() => console.log(sortedCaseList), [sortedCaseList]);
  
  return (
    <>
      <Button onClick={handleUpdateById}>
        Update by id
      </Button>

      <Select<SortedKeyEnum>
        style={{ width: 120 }}
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
