import React, { useState } from 'react';
import '../tresci.css';
import { ModalForm } from '../ModalForm';

const OptionBox2 = ({ optionBox2 }) => {
  const {
    background_image = '',
    description = '',
    title = '',
    btn_title = '',
  } = optionBox2 || {};

  const [isModal, setIsModal] = useState(false);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };
  return (
    <div>
      <section className="projects-gray-opinion-2">
        <div className="container projects-opinion-box-container">
          <div className="row">
            <div className="col-md-12">
              <div className="opinion-box">
                <div className="opinion-box-image">
                  <img
                    className="opinion-box-inside-image"
                    src={background_image}
                    title="Usługi copywriterskie dla różnych branż"
                    alt="Opinia klienta jest bardzo ważna dla agencji marketingowej"
                  />
                </div>
                <div className="opinion-box-content projects-opinion-2 copywriter-prawo-text">
                  <p className="theme-desc projects-client-opinion-p text-center">
                    {title}
                  </p>
                  <div className="opinion-box-text copywriter-opinion-box-text">
                    {description}
                  </div>
                  <button
                    onClick={() => setIsModal(true)}
                    className="download-catalog-button projects-opinion-button copywriter-blue-background copywriter-new-btn copywriter-standard-mt-10 send-offer-button js--triggerAnimation"
                    type="button"
                  >
                    <strong>{btn_title}</strong>
                  </button>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-md-12 projects-empty-opinion-box"></div>
          </div>
        </div>
      </section>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </div>
  );
};

export default OptionBox2;
