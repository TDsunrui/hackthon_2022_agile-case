import { Modal, Typography } from "antd";

import PropertyPannel from "@/pages/detail/property-pannel";
import DetailPannel from "@/pages/detail/detail-pannel";

import { useAppDispatch, useAppSelector } from "@/app/hooks";

import { changeRoute } from "@/slices/case/caseSlice";

import "./index.scss";

function DetailModal() {
  const { curPage, curCase } = useAppSelector((state) => state.case);
  const dispatch = useAppDispatch();

  const handleClickLink = () => {
    dispatch(changeRoute({ curPage: "detail" }));
  };

  const handleCancel = () => {
    dispatch(changeRoute({ curPage: "home" }));
  };

  return (
    <Modal
      visible={curPage === "detail-modal"}
      footer={null}
      centered
      maskClosable={false}
      onCancel={handleCancel}
      width="70%"
    >
      <Typography.Title onClick={handleClickLink}>{curCase?.title}</Typography.Title>
      <div className="detail-modal">
        {curCase && <PropertyPannel data={curCase}></PropertyPannel>}
        {curCase && <DetailPannel data={curCase}></DetailPannel>}
      </div>
    </Modal>
  );
}

export default DetailModal;
