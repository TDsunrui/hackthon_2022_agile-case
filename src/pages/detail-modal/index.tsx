import { Modal, Typography } from "antd";

import { useAppDispatch, useAppSelector } from "@/app/hooks";

import { changeRoute } from "@/slices/case/caseSlice";

function DetailModal() {
  const { curPage, curCase } = useAppSelector((state) => state.case);
  const dispatch = useAppDispatch();

  const handleClickLink = () => {
    dispatch(changeRoute({ curPage: 'detail' }));
  }
  
  const handleCancel = () => {
    dispatch(changeRoute({ curPage: 'home' }));
  };
  
  return (
    <Modal
      visible={curPage === 'detail-modal'}
      footer={null}
      maskClosable={false}
      onCancel={handleCancel}
    >
      <Typography.Title>{curCase?.title}</Typography.Title>
      <Typography.Link onClick={handleClickLink}>Detail</Typography.Link>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

export default DetailModal;
