import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { closeModal } from './modalActions';
import { deleteVideo } from '../deleteVideo/deleteVideoAction';
import variables from '../../utils/variables.client';

class ModalComponent extends Component {
  bootStrapModal() {
    const { show, title, url, description, publishedAt, _id } = this.props.modalVideo;
    const closeModal = this.props.closeModal;
    const deleteVideo = this.props.deleteVideo;
    return (
      <Modal className="video-modal" show={show}  aria-labelledby="contained-modal-title-lg">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-lg">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="iframe_modal_video modal_body">
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
              className="btn btn-default modal_button1"
              >
              Close
            </Button>

            <Button
              onClick={() => {
                deleteVideo(_id)
              }}
              className="btn btn-danger modal_button2"
              >
              Delete
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  render() {
    return (
      <div className="modal_container">
        {this.bootStrapModal()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalVideo: state.modalReducer
  };
}

export default connect(mapStateToProps, { closeModal, deleteVideo })(ModalComponent);
