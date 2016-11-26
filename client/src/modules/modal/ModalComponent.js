import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { closeModal } from './modalActions';
import { deleteVideo } from '../deleteVideo/deleteVideoAction';
import variables from '../../utils/variables.client';

const ModalComponent = ({
  modalVideo: { show, title, url, description, publishedAt, _id },
  closeModal,
  deleteVideo
}) => {
  return (
    <div className="modal">
      <Modal className="video-modal" show={show}  aria-labelledby="contained-modal-title-lg">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-lg">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="iframe_modal_video">
            <p className="modal-para">{description}</p>
            <iframe className='iframe-video-feed' src={`${variables.YOUTUBE_URL}${url}`}
            allowFullScreen>
            </iframe>
          </div>
          <span>{publishedAt}</span>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-buttons">
            <Button
              onClick={() => closeModal()}
              className="btn btn-default"
              >
              Close
            </Button>

            <Button
              onClick={() => {
                deleteVideo(_id)
              }}
              className="btn btn-danger"
              >
              Delete
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    modalVideo: state.modalReducer
  };
}

export default connect(mapStateToProps, { closeModal, deleteVideo })(ModalComponent);
