import React from "react";

const Modal = (props) => {
  const { closeModal, modalDetail } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content mb-20">
        <div className="mb-20">
          <span onClick={closeModal} className="close">
            ×
          </span>
        </div>
        {modalDetail}
      </div>
    </div>
  );
};

export default Modal;