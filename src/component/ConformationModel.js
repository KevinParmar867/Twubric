import React from 'react';

const ConfirmationModal = ({ showModal, onClose, onConfirm, follower }) => {
    return (
        <div>
            <div className={`modal ${showModal ? 'show' : ''} ConformationModal`} style={{ display: showModal ? 'block' : 'none'}} tabIndex="1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className='justify-content-center'>Confirmation</h2>
                        </div>
                        <div className="modal-body d-flex justify-content-center align-items-center flex-column">
                            <img src={follower.image} width={80} alt="Avatar" className="rounded-circle img-fluid mr-2 " />
                            <h3 >{follower.username}</h3>
                            <span>Are you sure, you want to delete this user ?</span>
                        </div>
                        <div className="mx-3 mb-3 d-flex justify-content-between">
                            <button type="button" className="btn btn-success" onClick={onClose}>Back</button>
                            <button type="button" className="btn btn-danger" onClick={onConfirm}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ConfirmationModal;
